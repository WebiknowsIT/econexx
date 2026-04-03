"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnlistedShares } from "@/store/action/unlistedShareActions";

import { Search } from "lucide-react";
import PageLoader from "@/components/PageLoader";
import PageHeader from "@/components/PageHeaderDark";
import QuickFilterBar from "./components/QuickFilterBar";
import Input from "@/components/ui/Input/Input";
import Pagination from "@/components/Pagination";
import StockCard from "@/components/StockCard";

export default function UnlistedMarketplace() {
  const dispatch = useDispatch();

  const {
    unlistedShares,
    pagination,
    listStatus,
    categories,
    unlistedBanner, 
  } = useSelector((state) => state.unlistedShares);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({search: "",category: "",});

  // ✅ Fetch API (with filters)
useEffect(() => {

  if (filters.search && filters.search.length < 3) {
    return; 
  }

  dispatch(
    fetchUnlistedShares({
      page: currentPage,
      q: filters.search,
      sector_id: filters.category,
    })
  );
}, [dispatch, currentPage, filters.search, filters.category]);

  // ✅ Sync page from API
  useEffect(() => {
    if (pagination?.current_page) {
      setCurrentPage(pagination.current_page);
    }
  }, [pagination]);

  if (listStatus === "loading") return <PageLoader />;

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Unlisted Shares" },
        ]}
        tag="Marketplace"
        title={unlistedBanner?.title || 'Unlisted Shares'}
        //highlight=""
        description={unlistedBanner?.subtitle || 'Browse pre-IPO and unlisted opportunities across India’s fastest growing sectors.'}
      />
      <QuickFilterBar
        categories={categories}
        selectedCategory={filters.category}
        onSelectCategory={(id) => {
          setFilters((prev) => ({
            ...prev,
            category: id,
          }));
          setCurrentPage(1);
        }}
      />

      <div className="max-w-7xl bg-white mx-auto px-6 lg:px-16 py-8 flex gap-8">
        <div className="flex-1">

          {/* 🔝 Top Bar */}
          <div className="flex items-center justify-between gap-4 pb-4">
            <p className="text-sm">
              <span className="font-semibold">
                {pagination?.total || 0}
              </span>{" "}
              companies found
            </p>

            {/* 🔍 SEARCH */}
            <div>
              <Input
                type="text"
                placeholder="Company name..."
                value={filters.search}
                onChange={(e) => {
                  const value = e.target.value;
                  setFilters((prev) => ({
                    ...prev,
                    search: value,
                  }));
                  setCurrentPage(1);
                }}
                className="!pr-8"
                icon={<Search size={16} />}
              />
              {filters.search.length > 0 && filters.search.length < 3 && (
                <p className="text-xs text-gray-400 mt-1">
                  Type at least 3 characters to search
                </p>
              )}
            </div>
            
          </div>
          

          {/* 📦 Cards */}
          {unlistedShares.length === 0 ? (
            <p className="text-center py-10 text-gray-500">
              No shares found
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {unlistedShares.map((share) => (
                <StockCard
                  key={share.id}
                  id={share.id}
                  title={share.share_name}
                  category={share.company_sector}
                  price={share.sell_price}
                  change={`${share.pe_ratio || 0}%`}
                  duration="15D"
                  badge={share.share_type}
                  logo="/images/stocks/nse.png"
                />
              ))}
            </div>
          )}

          {/* 📄 Pagination */}
          <Pagination
            currentPage={pagination.current_page}
            totalPages={pagination.last_page}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}