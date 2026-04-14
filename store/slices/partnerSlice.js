import { createSlice } from "@reduxjs/toolkit";
import {fetchPartnerPage,applyPartner,} from "../action/partnerActions";

const initialState = {
  loading: false,

  // CMS data
  pageData: null,

  // Apply form
  applying: false,
  applySuccess: false,
  applyError: null,
  applyErrors: null,

  error: null,
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,

  reducers: {
    resetApplyState: (state) => {
      state.applySuccess = false;
      state.applyError = null;
      state.applyErrors = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= GET PAGE =================
      .addCase(fetchPartnerPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPartnerPage.fulfilled, (state, action) => {
        state.loading = false;
        state.pageData = action.payload;
      })

      .addCase(fetchPartnerPage.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to load page";
      })

      // ================= APPLY =================
      .addCase(applyPartner.pending, (state) => {
        state.applying = true;
        state.applyError = null;
        state.applyErrors = null;
        state.applySuccess = false;
      })

      .addCase(applyPartner.fulfilled, (state) => {
        state.applying = false;
        state.applySuccess = true;
      })

      .addCase(applyPartner.rejected, (state, action) => {
        state.applying = false;
        state.applyError = action.payload?.message;
        state.applyErrors = action.payload?.errors || null;
      });
  },
});

export const { resetApplyState } = partnerSlice.actions;
export default partnerSlice.reducer;