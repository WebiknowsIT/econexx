import { createSlice } from "@reduxjs/toolkit";
import { fetchCompany, fetchFooter, subscribeLanding } from "../action/companyActions";

const initialState = {
  header: null,
  footer: null,

  headerStatus: "idle",   // idle | loading | succeeded | failed
  footerStatus: "idle",

  error: null,

  // SUBSCRIBE STATE
  subscribeLoading: false,
  subscribeSuccess: false,
  subscribeError: null,

};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    clearCompany(state) {
      state.header = null;
      state.footer = null;

      state.headerStatus = "idle";
      state.footerStatus = "idle";

      state.error = null;
    },
    resetSubscribeState: (state) => {
      state.subscribeLoading = false;
      state.subscribeSuccess = false;
      state.subscribeError = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // =========================
      // ✅ HEADER (fetchCompany)
      // =========================
      .addCase(fetchCompany.pending, (state) => {
        state.headerStatus = "loading";
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.headerStatus = "succeeded";
        state.header = action.payload || null;
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.headerStatus = "failed";
        state.error =
          action.payload?.message ||
          action.error?.message ||
          "Failed to load header";
      })

      // =========================
      // ✅ FOOTER (fetchFooter)
      // =========================
      .addCase(fetchFooter.pending, (state) => {
        state.footerStatus = "loading";
      })
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.footerStatus = "succeeded";
        state.footer = action.payload || null;
      })
      .addCase(fetchFooter.rejected, (state, action) => {
        state.footerStatus = "failed";
        state.error =
          action.payload?.message ||
          action.error?.message ||
          "Failed to load footer";
      })

      .addCase(subscribeLanding.pending, (state) => {
        state.subscribeLoading = true;
        state.subscribeError = null;
        state.subscribeSuccess = false;
      })

      .addCase(subscribeLanding.fulfilled, (state) => {
        state.subscribeLoading = false;
        state.subscribeSuccess = true;
      })

      .addCase(subscribeLanding.rejected, (state, action) => {
        state.subscribeLoading = false;
        state.subscribeError =
          action.payload?.message || "Subscription failed";
      });




  },
});

export const { clearCompany,resetSubscribeState } = companySlice.actions;
export default companySlice.reducer;