import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "@/utils/Url";
import { request } from "@/services/Request";

const API = request(url.BASE_URL);

// ============================
// ✅ Fetch Blogs (LIST)
// ============================
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async ({ page = 1, per_page = 10 } = {}, { rejectWithValue }) => {
    try {
      const res = await API.get(`/api/news-and-insights/landing?per_page=${per_page}&page=${page}`);

      if (!res?.success) {
        return rejectWithValue({message: res?.message || "Failed to fetch blogs",});
      }

      return {
        blogs: res?.data?.news?.items || [],
        pagination: res?.data?.news?.pagination || {},
        banner: res?.data?.banner || null,
      };

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
      });
    }
  }
);

// ============================
// ✅ Fetch Blog Detail (UNCHANGED)
// ============================
export const fetchBlogBySlug = createAsyncThunk(
  "blog/fetchBlogBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const res = await API.get(`/api/blogs/${slug}`);

      if (!res?.success) {
        return rejectWithValue({message: res?.message || "Failed to fetch blog",});
      }

      return res.data;

    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
      });
    }
  }
);

// ============================
// ✅ Subscribe News
// ============================
export const subscribeNews = createAsyncThunk(
  "blog/subscribeNews",
  async (email, { rejectWithValue }) => {
    try {
      const res = await API.post("/api/news-and-insights/subscribe",{
          email,
          source: "news-and-insights",
        }
      );

      if (!res?.success) {
        return rejectWithValue({message: res?.message || "Subscription failed",});
      }

      return res;

    } catch (error) {
      return rejectWithValue({
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      });
    }
  }
);