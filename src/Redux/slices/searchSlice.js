import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
      );

      if (!response.ok) {
        return rejectWithValue("No se pudo completar la búsqueda.");
      }

      const data = await response.json();

      return (data.album || []).map((album) => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        album: album.strAlbum,
      }));
    } catch {
      return rejectWithValue("No se pudo conectar con el servicio de música.");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error.message || "Error al buscar resultados.";
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;