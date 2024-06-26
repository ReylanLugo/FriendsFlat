"use server";

import prisma from "@/utils/prisma";
import { createClient } from "@/utils/supabase/server";
import * as console from "node:console";

export async function GetUserSession() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return null;
  }
  return session;
}

export async function CreateNewApartment(formData: FormData) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  const file = formData.get("image") as File;
  if (!file) {
    throw new Error("No image file provided");
  }
  // Upload image to Supabase Storage
  const { data, error } = await supabase.storage
    .from("Images")
    .upload(`${file.name}${Math.random()}`, file);

  if (error) {
    console.log(error);
    return { success: false };
  }

  const { data: fileSt } = await supabase.storage
    .from("Images")
    .getPublicUrl(data.path);

  try {
    const apartment = await prisma.apartaments.create({
      data: {
        name: formData.get("name") as string,
        location: formData.get("location") as string,
        price: parseInt(formData.get("price") as string),
        images: fileSt.publicUrl,
        description: formData.get("description") as string,
        userId: session.user.id,
      },
    });
    return { success: true, data: apartment };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function DeleteApartment(apartmentId: string) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }

  try {
    const apartment = await prisma.apartaments.delete({
      where: {
        id: apartmentId,
      },
    });
    return { success: true, data: apartment };
  } catch (error) {
    return { success: false, error };
  }
}

export async function GetAllMyApartment() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  const apartment = await prisma.apartaments.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      id: true,
      images: true,
      name: true,
      location: true,
      price: true,
      rooms: true,
    },
  });

  if (!apartment) {
    throw new Error("No apartment found");
  }

  const res = apartment.map((flat) => {
    const sumAllRoomSizes = flat.rooms.reduce(
      (sum, room) => sum + room.size,
      0,
    );
    const roomsLength = flat.rooms.length;
    return {
      id: flat.id,
      images: flat.images,
      name: flat.name,
      location: flat.location,
      price: flat.price,
      rooms: roomsLength,
      meters: sumAllRoomSizes,
    };
  });

  return res;
}

export async function GetAllApartment() {
  const supabase = createClient();
  let favsApartments = undefined;
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    favsApartments = await prisma.favorites.findMany({
      where: {
        userId: session.user.id,
      },
    });
  }

  const apartment = await prisma.apartaments.findMany({
    select: {
      id: true,
      images: true,
      name: true,
      description: true,
      location: true,
      price: true,
      rooms: true,
      favorites: true,
    },
  });

  const res = apartment.map((flat) => {
    const sumAllRoomSizes = flat.rooms.reduce(
      (sum, room) => sum + room.size,
      0,
    );
    const roomsLength = flat.rooms.length;
    return {
      id: flat.id,
      images: flat.images,
      name: flat.name,
      description: flat.description,
      location: flat.location,
      price: flat.price,
      rooms: roomsLength,
      meters: sumAllRoomSizes,
      favorited: !!favsApartments
        ? favsApartments.some((fav) => fav.apartamentId === flat.id)
        : false,
    };
  });
  return res;
}

export async function GetAllApartmentWithFilters(filters: any) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let favsApartments = undefined;
  if (session) {
    favsApartments = await prisma.favorites.findMany({
      where: {
        userId: session.user.id,
      },
    });
  }

  // Parse filters
  const minPrice = filters.minPrice ? parseFloat(filters.minPrice) : 0.0;
  const maxPrice =
    filters.maxPrice && filters.maxPrice > 0 && filters.maxPrice > minPrice
      ? parseFloat(filters.maxPrice)
      : 0.0;

  const minSize = filters.minSize ? parseInt(filters.minSize) : 0;
  const maxSize =
    filters.maxSize && filters.maxSize > 0 && filters.maxSize > minSize
      ? parseInt(filters.maxSize)
      : Infinity;

  const priceFilter = {
    gte: minPrice,
    ...(maxPrice > minPrice && { lte: maxPrice }), // Apply lte only if maxPrice is valid
  };

  // Get apartments with price filters
  const apartments = await prisma.apartaments.findMany({
    where: {
      price: priceFilter,
    },
    select: {
      id: true,
      images: true,
      name: true,
      description: true,
      location: true,
      price: true,
      rooms: true,
      favorites: true,
    },
  });

  // Map through the apartments and calculate additional data
  const res = apartments
    .map((flat) => {
      const sumAllRoomSizes = flat.rooms.reduce(
        (sum, room) => sum + room.size,
        0,
      );
      const roomsLength = flat.rooms.length;
      return {
        id: flat.id,
        images: flat.images,
        name: flat.name,
        description: flat.description,
        location: flat.location,
        price: flat.price,
        rooms: roomsLength,
        meters: sumAllRoomSizes,
        favorited: favsApartments
          ? favsApartments.some((fav) => fav.apartamentId === flat.id)
          : false,
      };
    })
    .filter((flat) => {
      return flat.meters >= minSize && flat.meters <= maxSize; // Filter by total room size
    });

  return res;
}

export async function GetAllFavoritesApartment() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  const userId = session.user.id;

  const favoriteApartments = await prisma.favorites.findMany({
    where: {
      userId: userId,
    },
    include: {
      apartament: {
        include: {
          rooms: true,
        },
      },
    },
  });

  const res = favoriteApartments.map((flat) => {
    const sumAllRoomSizes = flat.apartament.rooms.reduce(
      (sum, room) => sum + room.size,
      0,
    );
    const roomsLength = flat.apartament.rooms.length;
    return {
      id: flat.apartament.id,
      images: flat.apartament.images,
      name: flat.apartament.name,
      description: flat.apartament.description,
      location: flat.apartament.location,
      price: flat.apartament.price,
      rooms: roomsLength,
      meters: sumAllRoomSizes,
      favorited: true,
    };
  });
  return res;
}

export async function AddRoom(formData: FormData) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  const file = formData.get("image") as File;
  if (!file) {
    throw new Error("No image file provided");
  }
  const { data, error } = await supabase.storage
    .from("Images")
    .upload(`${file.name}${Math.random()}`, file);
  if (error) {
    console.log(error);
    return { success: false };
  }
  const { data: fileSt } = await supabase.storage
    .from("Images")
    .getPublicUrl(data.path);

  try {
    const newRoom = await prisma.rooms.create({
      data: {
        name: formData.get("name") as string,
        size: parseInt(formData.get("size") as string),
        equipment: formData.get("equipment") as string,
        image: fileSt.publicUrl,
        apartamentId: formData.get("apartmentId") as string,
      },
    });
    return { success: true, data: newRoom };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function GetAllRoom(apartamentId: string) {
  const room = await prisma.rooms.findMany({
    where: {
      apartamentId: apartamentId,
    },
    select: {
      id: true,
      name: true,
      size: true,
      image: true,
      equipment: true,
    },
  });
  return room;
}

export async function SetFavorite(apartmentId: string) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  const favExist = await prisma.favorites.findMany({
    where: {
      userId: session.user.id,
      apartamentId: apartmentId,
    },
  });
  if (favExist && favExist.length > 0) {
    await prisma.favorites.delete({
      where: {
        id: favExist[0].id,
      },
    });
    return false;
  }
  const fav = await prisma.favorites.create({
    data: {
      userId: session.user.id,
      apartamentId: apartmentId,
    },
  });
  return fav;
}
