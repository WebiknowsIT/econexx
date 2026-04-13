import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "../../utils/Url";
import {clearLocalStorage,getLocalStorageItem,setLocalStorageItem,} from "@/utils/localStorage";
import { request } from "@/services/Request";

// ----------------------------
// Create Auth API Instance
// ----------------------------
const API = request(url.BASE_URL);

// ----------------------------
// Helper: Normalize Errors
// ----------------------------
const handleError = (error, fallback = "Something went wrong") => {
  return error?.response?.data?.message || error?.message || fallback;
};

// ============================
// ✅ Register User
// ============================
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/register", formData);
      const data = res;
      if (!data?.success) {
        if (data?.errors) {
          const firstError = Object.values(data.errors)[0]?.[0];
          return rejectWithValue(firstError || "Signup failed");
        }

        return rejectWithValue(data?.message || "Signup failed");
      }
      const authData = {
        token: data?.data?.access_token,
        tokenType: data?.data?.token_type,
        user: data?.data?.user,
      };
      setLocalStorageItem("user-info", authData);
      return authData;
    } catch (error) {
      return rejectWithValue({
        type: error?.data?.errors ? "validation" : "general",
        message: error?.message || "Signup failed",
        errors: error?.data?.errors || null, // ✅ FIXED
      });

    }
  }
);

// ============================
// ✅ Login User
// ============================
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const  res = await API.post("/api/login", {login: email, password,});

      console.log("dataAc", res)

      if (!res?.success) {
        return rejectWithValue(res?.message || "Login failed");
      }
      const authData = {
        token: res?.data?.access_token,
        tokenType: res?.data?.token_type,
        user: res?.data?.user,
      };
      setLocalStorageItem("user-info", authData);

      return authData;
    } catch (error) {
      return rejectWithValue(handleError(error, "Login failed"));
    }
  }
);

// ============================
// ✅ Get Logged-In User Profile
// ============================
export const getProfile = createAsyncThunk(
  "auth/logged",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/api/customer/profile");
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error, "Failed to fetch profile"));
    }
  }
);

// ============================
// ✅ Update User Profile
// ============================
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.put("/api/customer/profile/update", payload);
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error, "Failed to update profile"));
    }
  }
);

// ============================
// ✅ Change Password
// ============================
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/api/customer/update/password", payload);
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error, "Failed to change password"));
    }
  }
);

// ============================
// ✅ Logout User
// ============================
export const userLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/api/customer/logout");
      clearLocalStorage();
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error, "Logout failed"));
    }
  }
);
