import { createSlice } from "@reduxjs/toolkit";
import {fetchUnlistedShares,fetchUnlistedShareById,} from "@/store/action/unlistedShareActions";

const initialState = {
  unlistedShares: [],
  unlistedShareDetails: null,

  pagination: {
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  },

  loading: false,
  error: null,
};

const unlistedShareSlice = createSlice({
  name: "unlistedShares",
  initialState,
  reducers: {
    clearUnlistedShareDetails: (state) => {
      state.unlistedShareDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // ----------------------------
      // Fetch List
      // ----------------------------
      .addCase(fetchUnlistedShares.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUnlistedShares.fulfilled, (state, action) => {
        state.loading = false;

        const payload = action.payload;

        state.unlistedShares = payload.data;

        state.pagination = {
          current_page: payload.current_page,
          last_page: payload.last_page,
          total: payload.total,
          per_page: payload.per_page,
        };
      })
      .addCase(fetchUnlistedShares.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      // ----------------------------
      // Fetch Details
      // ----------------------------
      .addCase(fetchUnlistedShareById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUnlistedShareById.fulfilled, (state, action) => {
        state.loading = false;
        state.unlistedShareDetails = action.payload;
      })
      .addCase(fetchUnlistedShareById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export const { clearUnlistedShareDetails } = unlistedShareSlice.actions;

export default unlistedShareSlice.reducer;