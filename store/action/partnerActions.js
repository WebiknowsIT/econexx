import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "@/utils/Url";
import { request } from "@/services/Request";

const API = request(url.BASE_URL);

// ================= GET PAGE DATA =================
export const fetchPartnerPage = createAsyncThunk(
  "partner/fetchPage",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/api/partner-with-us/landing");

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Failed to fetch data",
        });
      }

      return res.data; 
    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
      });
    }
  }
);

// ================= APPLY FORM =================
export const applyPartner = createAsyncThunk(
  "partner/apply",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/partner-with-us/apply",formData);

      if (!res?.success) {
        return rejectWithValue({message: res?.message || "Application failed",});
      }

      return res;
    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
        errors: error?.data?.errors || null,
      });
    }
  }
);