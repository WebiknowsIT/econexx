import { createSlice } from "@reduxjs/toolkit";
import {fetchPreIpoLanding,expressPreIpoInterest,fetchPreIpoCompanies} from "@/store/action/preIpoActions";

const initialState = {
  loading: false,
  error: null,
  landingData: null,

   //Dropdown companies
  companies: [],
  companiesLoading: false,
  companiesError: null,

  //Interest submission state
  interestLoading: false,
  interestSuccess: false,
  interestError: null,
};

const preIpoSlice = createSlice({
  name: "preIpoShares",
  initialState,

  reducers: {
    resetInterestState: (state) => {
      state.interestLoading = false;
      state.interestSuccess = false;
      state.interestError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ============================
      // 📥 Fetch Landing
      // ============================
      .addCase(fetchPreIpoLanding.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPreIpoLanding.fulfilled, (state, action) => {
        state.loading = false;
        state.landingData = action.payload; // ✅ full response stored
      })

      .addCase(fetchPreIpoLanding.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

            // ============================
      // 📥 Fetch Companies (Dropdown)
      // ============================
      .addCase(fetchPreIpoCompanies.pending, (state) => {
        state.companiesLoading = true;
        state.companiesError = null;
      })

      .addCase(fetchPreIpoCompanies.fulfilled, (state, action) => {
        state.companiesLoading = false;
        state.companies = action.payload || [];
      })

      .addCase(fetchPreIpoCompanies.rejected, (state, action) => {
        state.companiesLoading = false;
        state.companiesError = action.payload;
      })

      // ============================
      // 📤 Express Interest
      // ============================
      .addCase(expressPreIpoInterest.pending, (state) => {
        state.interestLoading = true;
        state.interestSuccess = false;
        state.interestError = null;
      })

      .addCase(expressPreIpoInterest.fulfilled, (state) => {
        state.interestLoading = false;
        state.interestSuccess = true;
      })

      .addCase(expressPreIpoInterest.rejected, (state, action) => {
        state.interestLoading = false;
        state.interestError = action.payload;
      });
  },
});

export const { resetInterestState } = preIpoSlice.actions;
export default preIpoSlice.reducer;