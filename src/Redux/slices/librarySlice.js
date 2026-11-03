import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: []
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addSong: (state, action) => {
      const alreadyExists = state.library.some(item => item.id === action.payload.id);
      if (!alreadyExists) {
        state.library.push(action.payload);
      }
    },
    removeSong: (state, action) => {
      state.library = state.library.filter(item => item.id !== action.payload);
    }
  }
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;