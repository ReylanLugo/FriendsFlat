import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  GetAllApartment,
  GetAllApartmentWithFilters,
  GetAllFavoritesApartment,
  GetAllMyApartment,
} from "@/actions";
import { RootState } from "@/store";
import {
  apartmentStateType,
  myApartmentType,
} from "@/utils/types/general.types";

// Async Actions
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

export const getAllFavoritesApartment = createAsyncThunk(
  "apartmentState/getAllFavoritesApartment",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetAllFavoritesApartment();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getAllApartmentWithFilter = createAsyncThunk(
  "apartmentState/getAllApartmentWithFilter",
  async (
    arg: {
      minPrice: number;
      maxPrice: number;
      minSize: number;
      maxSize: number;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await GetAllApartmentWithFilters(arg);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState: apartmentStateType = {
  name: "",
  location: "",
  image: "",
  price: 0,
  description: "",
  myApartments: [],
  allApartments: [],
};

// Slice
export const apartmentState = createSlice({
  name: "apartmentState",
  initialState,
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
    addNewMyApartment: (state, action: { payload: myApartmentType }) => {
      state.myApartments = [...state.myApartments, action.payload];
    },
    deleteMyApartment: (state, action) => {
      state.myApartments = state.myApartments.filter((apartment) => {
        return apartment.id !== action.payload;
      });
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
    filterArrayOfApartmentsByName: (state, action) => {
      state.allApartments = state.allApartments.filter((apartment) => {
        return apartment.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },

    resetApartmentForm(state) {
      state.name = "";
      state.location = "";
      state.image = "";
      state.price = 0;
      state.description = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMyApartment.fulfilled, (state, action) => {
      state.myApartments = action.payload;
    });

    builder.addCase(getAllApartment.fulfilled, (state, action) => {
      state.allApartments = action.payload;
    });

    builder.addCase(getAllFavoritesApartment.fulfilled, (state, action) => {
      state.allApartments = action.payload;
    });

    builder.addCase(getAllApartmentWithFilter.fulfilled, (state, action) => {
      state.allApartments = action.payload;
    });
  },
});
// Selectors
const selectSearchFilter = (state: RootState) => state.global.searchValue;
const allApartmentSelector = (state: RootState) =>
  state.apartmentForm.allApartments; //selector
export const apartmentListSelector = createSelector(
  [selectSearchFilter, allApartmentSelector],
  (searchValue, allApartments) => {
    if (!searchValue) return allApartments;
    return allApartments.filter((apartment) => {
      return apartment.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  },
);

export const {
  setName,
  setLocation,
  setImage,
  addNewRoom,
  setPrice,
  setDescription,
  resetRoomForm,
  toggleFavorites,
  filterArrayOfApartmentsByName,
  addNewMyApartment,
  resetApartmentForm,
  deleteMyApartment,
} = apartmentState.actions;
export default apartmentState.reducer;
