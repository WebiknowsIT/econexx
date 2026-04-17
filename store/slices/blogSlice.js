import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogBySlug, fetchBlogs,subscribeNews } from "../action/blogActions";

// ============================
// ✅ INITIAL STATE
// ============================
const initialState = {
  loading: false,
  blogs: [],
  blogDetail: null,
  pagination: null,
  banner: null, 

  // ✅ NEW
  subscribeLoading: false,
  subscribeSuccess: false,
  subscribeError: null,

  error: null,
};

// ============================
// ✅ SLICE
// ============================
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    resetBlogState: (state) => {
      state.loading = false;
      state.blogs = [];
      state.pagination = null;
      state.blogDetail = null;
      state.banner = null;
      state.error = null;
    },
    resetSubscribeState: (state) => {
      state.subscribeLoading = false;
      state.subscribeSuccess = false;
      state.subscribeError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= FETCH BLOGS =================
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;

        let blogs = action.payload.blogs || [];

        // ✅ Sort latest first
        blogs = blogs.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        );

        state.blogs = blogs;
        state.pagination = action.payload.pagination;
        state.banner = action.payload.banner;
      })

      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Error fetching blogs";
      })

      // ================= FETCH BLOG DETAIL =================
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
      })

      .addCase(subscribeNews.pending, (state) => {
        state.subscribeLoading = true;
        state.subscribeError = null;
        state.subscribeSuccess = false;
      })

      .addCase(subscribeNews.fulfilled, (state) => {
        state.subscribeLoading = false;
        state.subscribeSuccess = true;
      })

      .addCase(subscribeNews.rejected, (state, action) => {
        state.subscribeLoading = false;
        state.subscribeError =
          action.payload?.message || "Subscription failed";
      });

  },
});

export const { resetBlogState, resetSubscribeState } = blogSlice.actions;
export default blogSlice.reducer;