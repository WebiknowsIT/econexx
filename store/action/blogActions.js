import { createAsyncThunk } from "@reduxjs/toolkit";
import * as url from "@/utils/Url";
import { request } from "@/services/Request";

const API = request(url.BASE_URL);

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (page = 1, { rejectWithValue }) => {
    try {
      const res = await API.get(`/api/blogs?page=${page}`);

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Failed to fetch blogs",
        });
      }

      return {
        blogs: res.data || [],
        pagination: res.pagination || {},
      };
    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
      });
    }
  }
);

export const fetchBlogBySlug = createAsyncThunk(
  "blog/fetchBlogBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const res = await API.get(`/api/blogs/${slug}`);

      if (!res?.success) {
        return rejectWithValue({
          message: res?.message || "Failed to fetch blog",
        });
      }

      // ✅ success
      return res.data; 
    } catch (error) {
      return rejectWithValue({
        message: error?.message || "Something went wrong",
      });
    }
  }
);