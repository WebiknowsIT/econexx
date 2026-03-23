import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../utils/Url";
import { request } from "@/services/Request";

// API Instance
const API = request(url.BASE_URL);

// ----------------------------
// Get Unlisted Shares List
// ----------------------------
export const fetchUnlistedShares = createAsyncThunk(
  "unlistedShares/fetchUnlistedShares",
  async (params = {}, { rejectWithValue }) => {
    try {
      const { page = 1 } = params;

      const data = await API.get(`/api/shares?page=${page}`);
      
      //console.log("data", data);
      
      return data;
    } catch (error) {
      const errData = error?.data;
      return rejectWithValue({
        message: errData?.message || "Failed to fetch unlisted shares",
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
      const { data } = await API.get(`/api/shares/${id}`);

      return data;
    } catch (error) {
      const errData = error?.data;
      return rejectWithValue({
        message: errData?.message || "Failed to fetch share details",
      });
    }
  }
);