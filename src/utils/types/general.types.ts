export type globalStateType = {
  toggleApartmentDetails: boolean;
  toggleNewApartment: boolean;
  toggleNewRoom: boolean;
  toggleProfile: boolean;
  toggleMenu: boolean;
  searchValue: string;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
};

export type toastStateType = {
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  visible: boolean;
};

export type apartmentType = {
  id: string;
  images: string;
  name: string;
  location: string;
  description: string;
  rooms: number;
  meters: number;
  price: number;
  favorited: boolean;
};

export type myApartmentType = Omit<apartmentType, "favorited" | "description">;

export type apartmentStateType = {
  name: string;
  location: string;
  image: string;
  price: number;
  description: string;
  myApartments: myApartmentType[];
  allApartments: apartmentType[];
};

export type roomType = {
  id: string;
  name: string;
  size: number;
  image: string;
  equipment: string;
};

export type roomStateType = {
  name: string;
  size: number;
  image: string;
  equipment: string;
  roomList: roomType[];
};
