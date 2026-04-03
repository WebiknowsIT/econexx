import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../utils/Url";
import { request } from "@/services/Request";

// API Instance
const API = request(url.BASE_URL);

// ============================
// ✅ Fetch Pre-IPO Landing
// ============================
export const fetchPreIpoLanding = createAsyncThunk(
  "preIpo/fetchLanding",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/api/pre-ipo-stocks/landing");

      if (!res.success) {
        return rejectWithValue({
          message: res?.message || "No data received",
        });
      }

      return res.data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Failed to fetch Pre-IPO landing",
        data: error?.data || null,
      });
    }
  }
);
 // ============================
 // ✅ Fetch Companies (Dropdown)
 // ============================
export const fetchPreIpoCompanies = createAsyncThunk(
  "preIpo/fetchCompanies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/api/pre-ipo-stocks/companies");

      if (!res.success) {
        return rejectWithValue({
          message: res?.message || "No companies found",
        });
      }

      return res.data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Failed to fetch companies",
        data: error?.data || null,
      });
    }
  }
);

// ============================
// ✅ Express Interest (POST)
// ============================
export const expressPreIpoInterest = createAsyncThunk(
  "preIpo/expressInterest",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/pre-ipo-stocks/express-interest",payload);

      if (!res.success) {
        return rejectWithValue({
          message: res?.message || "Failed to submit interest",
        });
      }

      return res;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Interest submission failed",
        data: error?.data || null,
      });
    }
  }
);