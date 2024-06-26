import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllRoom } from "@/actions";

export const getAllRooms = createAsyncThunk(
  "roomState/getAllRooms",
  async ({ apartmentId }: { apartmentId: string }, { rejectWithValue }) => {
    try {
      const response = await GetAllRoom(apartmentId);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    name: "",
    size: 0,
    image: "",
    equipment: "",
    roomList: [
      {
        id: "",
        name: "",
        size: 0,
        image: "",
        equipment: "",
      },
    ],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRooms.fulfilled, (state, action) => {
      state.roomList = action.payload;
    });
  },
});

export const { setName, setSize, setImage, setEquipment } = roomSlice.actions;
export default roomSlice.reducer;
