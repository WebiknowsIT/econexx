import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogBySlug, fetchBlogs } from "../action/blogActions";

const initialState = {
  loading: false,
  blogs: [],
  blogDetail: null,
  pagination: null,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    resetBlogState: (state) => {
      state.loading = false;
      state.blogs = [];
      state.pagination = null;
      currentPage: 1,
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ================= FETCH BLOGS =================
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;

        let blogs = action.payload.blogs || [];

        blogs = blogs.filter((b) => b.is_active);

        blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        state.blogs = blogs;
        state.pagination = action.payload.pagination;
      })

      // DETAIL
      .addCase(fetchBlogBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.blogDetail = null;
      })
      .addCase(fetchBlogBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetail = action.payload;
      })
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Error fetching blog";
      });
  },
});

export const { resetBlogState } = blogSlice.actions;
export default blogSlice.reducer;