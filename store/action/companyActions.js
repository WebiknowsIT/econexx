import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "@/utils/Url";

import { request } from "@/services/Request";

// API Instance
const API = request(url.BASE_URL);

// ============================
// ✅ Fetch Company / Footer Data
// ============================
// ============================
// ✅ Fetch Company / Header Data
// ============================
export const fetchCompany = createAsyncThunk(
  "company/fetchCompany",
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.get("/api/header");

      // ✅ Optional: if your API sends { status: false }
      // if (data?.status === false) {
      //   return rejectWithValue({
      //     message: data?.message || "API returned status=false",
      //   });
      // }
      if (!data) {
        return rejectWithValue({
          message: "No footer data received",
        });
      }

      return data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
        data: error?.data || null,
      });
    }
  }
);


// ============================
// ✅ Fetch Footer Data
// ============================
export const fetchFooter = createAsyncThunk(
  "company/fetchFooter",
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.get("/api/footer");

      if (!data) {
        return rejectWithValue({
          message: "No footer data received",
        });
      }

      return data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Failed to fetch footer",
        data: error?.data || null,
      });
    }
  }
);