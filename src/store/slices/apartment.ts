import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllApartment, GetAllMyApartment } from "@/actions";

export const getAllMyApartment = createAsyncThunk(
  "apartmentState/getAllMyApartment",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetAllMyApartment();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getAllApartment = createAsyncThunk(
  "apartmentState/getAllApartment",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetAllApartment();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const apartmentState = createSlice({
  name: "apartmentState",
  initialState: {
    name: "",
    location: "",
    image: "",
    price: 0,
    description: "",
    myApartments: [
      {
        id: "",
        images: "",
        name: "",
        location: "",
        price: 0,
        rooms: 0,
        meters: 0,
      },
    ],
    allApartments: [
      {
        id: "",
        images: "",
        name: "",
        location: "",
        description: "",
        price: 0,
        rooms: 0,
        meters: 0,
        favorited: false,
      },
    ],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addNewRoom: (state, action) => {
      const aparment = state.myApartments.find((apartment) => {
        return apartment.id === action.payload.apartmentId;
      });
      if (aparment) {
        aparment.rooms += 1;
        aparment.meters = aparment.meters + parseInt(action.payload.meters);
      }
    },
    resetRoomForm: (state) => {
      state.name = "";
      state.location = "";
      state.image = "";
      state.price = 0;
      state.description = "";
    },
    toggleFavorites: (state, action) => {
      const apartment = state.allApartments.find((apartment) => {
        return apartment.id === action.payload;
      });
      if (apartment) {
        apartment.favorited = !apartment.favorited;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMyApartment.fulfilled, (state, action) => {
      state.myApartments = action.payload;
    });

    builder.addCase(getAllApartment.fulfilled, (state, action) => {
      state.allApartments = action.payload;
    });
  },
});

export const {
  setName,
  setLocation,
  setImage,
  addNewRoom,
  setPrice,
  setDescription,
  resetRoomForm,
  toggleFavorites,
} = apartmentState.actions;
export default apartmentState.reducer;
