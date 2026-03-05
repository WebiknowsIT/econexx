"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  totalItems,
  perPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalItems / perPage);

  if (totalPages <= 1) return null;

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">

      {/* Previous */}
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-btn w-9 h-9 rounded-lg border border-primary-200 flex items-center justify-center text-primary-400 disabled:opacity-30 bg-white"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`page-btn w-9 h-9 rounded-lg border text-sm font-medium ${
              page === currentPage
                ? "active bg-secondary-600 border-secondary-200 text-white"
                : "text-primary-600 bg-white border-primary-200"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-btn w-9 h-9 rounded-lg border border-primary-200 flex items-center justify-center text-primary-400 disabled:opacity-30 bg-white"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}