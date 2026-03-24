import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUnlistedLanding,
  fetchUnlistedShares,
  fetchUnlistedShareById,
} from "@/store/action/unlistedShareActions";

const initialState = {
  unlistedLanding: null,
  unlistedShares: [],
  unlistedShareDetails: null,

  pagination: {
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
  },

  // ✅ separate statuses
  landingStatus: "idle",
  listStatus: "idle",
  detailsStatus: "idle",

  error: null,
};

const unlistedShareSlice = createSlice({
  name: "unlistedShares",
  initialState,
  reducers: {
    clearUnlistedShareDetails: (state) => {
      state.unlistedShareDetails = null;
      state.detailsStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder

      // =========================
      // ✅ LANDING (FULL DATA)
      // =========================
      .addCase(fetchUnlistedLanding.pending, (state) => {
        state.landingStatus = "loading";
      })

      .addCase(fetchUnlistedLanding.fulfilled, (state, action) => {
        state.landingStatus = "succeeded";
        state.unlistedLanding = action.payload || null;
      })

      .addCase(fetchUnlistedLanding.rejected, (state, action) => {
        state.landingStatus = "failed";
        state.error = action.payload?.message || action.error?.message || "Failed to load landing";
      })

      // =========================
      // ✅ LIST
      // =========================
      .addCase(fetchUnlistedShares.pending, (state) => {
        state.listStatus = "loading";
        state.error = null;
      })

      .addCase(fetchUnlistedShares.fulfilled, (state, action) => {
        state.listStatus = "succeeded";

        const payload = action.payload;

        state.unlistedShares = payload?.data || [];

        state.pagination = {
          current_page: payload?.current_page || 1,
          last_page: payload?.last_page || 1,
          total: payload?.total || 0,
          per_page: payload?.per_page || 10,
        };
      })

      .addCase(fetchUnlistedShares.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error =
          action.payload?.message || "Failed to load shares";
      })

      // =========================
      // ✅ DETAILS
      // =========================
      .addCase(fetchUnlistedShareById.pending, (state) => {
        state.detailsStatus = "loading";
      })

      .addCase(fetchUnlistedShareById.fulfilled, (state, action) => {
        state.detailsStatus = "succeeded";
        state.unlistedShareDetails = action.payload || null;
      })

      .addCase(fetchUnlistedShareById.rejected, (state, action) => {
        state.detailsStatus = "failed";
        state.error =
          action.payload?.message || "Failed to load details";
      });
  },
});

export const { clearUnlistedShareDetails } = unlistedShareSlice.actions;
export default unlistedShareSlice.reducer;