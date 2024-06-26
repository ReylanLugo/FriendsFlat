"use server";

import prisma from "@/utils/prisma";
import { createClient } from "@/utils/supabase/server";

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

  const apartment = await prisma.apartaments.delete({
    where: {
      id: apartmentId,
    },
  });
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
  const apartment = await prisma.apartaments.findMany({
    select: {
      id: true,
      images: true,
      name: true,
      description: true,
      location: true,
      price: true,
      rooms: true,
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
      favorited: false,
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
