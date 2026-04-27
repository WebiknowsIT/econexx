import { createAsyncThunk } from "@reduxjs/toolkit";
import {clearLocalStorage,getLocalStorageItem,setLocalStorageItem,} from "@/utils/localStorage";
import * as url from "@/utils/Url";
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
      const res = await API.get("/api/auth/profile");
      if (!res?.success) {
        return rejectWithValue(res?.message || "Failed to fetch profile");
      }
      return res?.data?.user; // Extract user from nested response structure
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
      const res = await API.put("/api/auth/profile", payload);
      return res;
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

// ============================
// ✅ Send OTP (Forgot Password - Step 1)
// ============================
export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async ({ login, channel = "auto" }, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/forgot-password/send-otp", {
        login,
        channel,
      });

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Failed to send OTP",
          errors: res?.errors || null,
        });
      }

      return {
        message: res?.message || "OTP sent successfully",
        data: res?.data,
      };
    } catch (error) {
      return rejectWithValue({
        type: error?.data?.errors ? "validation" : "general",
        message: handleError(error, "Failed to send OTP"),
        errors: error?.data?.errors || null,
      });
    }
  }
);

// ============================
// ✅ Verify OTP (Forgot Password - Step 2)
// ============================
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ login, otp }, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/forgot-password/verify-otp", {
        login,
        otp,
      });

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Invalid OTP",
          errors: res?.errors || null,
        });
      }

      return {
        message: res?.message || "OTP verified successfully",
        data: res?.data,
      };
    } catch (error) {
      return rejectWithValue({
        type: error?.data?.errors ? "validation" : "general",
        message: handleError(error, "OTP verification failed"),
        errors: error?.data?.errors || null,
      });
    }
  }
);

// ============================
// ✅ Reset Password (Forgot Password - Step 3)
// ============================
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    { login, otp, password, password_confirmation },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.post("/api/forgot-password/reset", {
        login,
        otp,
        password,
        password_confirmation,
      });

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Password reset failed",
          errors: res?.errors || null,
        });
      }

      // If backend returns new token (auto-login), store it
      if (res?.data?.access_token) {
        const authData = {
          token: res?.data?.access_token,
          tokenType: res?.data?.token_type || "Bearer",
          user: res?.data?.user,
        };
        setLocalStorageItem("user-info", authData);
        return {
          message: res?.message || "Password reset successfully",
          authData,
          autoLogin: true,
        };
      }

      return {
        message: res?.message || "Password reset successfully",
        autoLogin: false,
      };
    } catch (error) {
      return rejectWithValue({
        type: error?.data?.errors ? "validation" : "general",
        message: handleError(error, "Password reset failed"),
        errors: error?.data?.errors || null,
      });
    }
  }
);
