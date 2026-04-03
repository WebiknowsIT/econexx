import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../utils/Url";
import { request } from "@/services/Request";

// API Instance
const API = request(url.BASE_URL);


// ============================
// ✅ Fetch Unlisted Landing Page
// ============================
export const fetchUnlistedLanding = createAsyncThunk(
  "unlisted/fetchLanding",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/api/unlisted-shares/landing");
    
      if (!res.success) {
        return rejectWithValue({
          message: "No data received",
        });
      }

      return res.data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Failed to fetch landing data",
        data: error?.data || null,
      });
    }
  }
);

// ----------------------------
// Get Unlisted Shares List
// ----------------------------
export const fetchUnlistedShares = createAsyncThunk(
  "unlistedShares/fetchUnlistedShares",
  async (
    { page = 1, per_page = 12, q = "", sector_id = "" } = {},
    { rejectWithValue }
  ) => {
    try {
      const query = new URLSearchParams({
        page,
        per_page,
        ...(q && { q }),
        ...(sector_id && { sector_id }),
      }).toString();

      const response = await API.get(`/api/unlisted-shares/list?${query}`);

      return response;

    } catch (error) {
      return rejectWithValue({
        message:
          error?.response?.data?.message ||
          "Failed to fetch unlisted shares",
      });
    }
  }
);

// ----------------------------
// Get Single Unlisted Share
// ----------------------------
export const fetchUnlistedShareById = createAsyncThunk(
  "unlistedShares/fetchUnlistedShareById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get(`/api/shares/${id}`);

      return response;
    } catch (error) {
      const errData = error?.data;
      return rejectWithValue({
        message: errData?.message || "Failed to fetch share details",
      });
    }
  }
);