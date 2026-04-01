"use client";
import { useState, useEffect, useMemo } from "react";
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

  const { unlistedShares, pagination, listStatus } = useSelector((state) => state.unlistedShares);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
  });

  // ✅ Fetch data when page changes
  useEffect(() => {
    dispatch(fetchUnlistedShares({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (pagination?.current_page) {
      setCurrentPage(pagination.current_page);
    }
  }, [pagination]);

  // ✅ API data
  const sharesData = unlistedShares || [];

  console.log("sharesData", unlistedShares);


  // ✅ Search filter (frontend)
  const filteredShares = useMemo(() => {
    console.log("sharesData:", sharesData);
    console.log("search value:", filters.search);

    if (!Array.isArray(sharesData) || sharesData.length === 0) {
      return [];
    }

    const searchValue = (filters.search || "").trim().toLowerCase();

    if (!searchValue) {
      return sharesData; // ✅ should return 10 items
    }

    return sharesData.filter((s) => {
      const shareName = s.share_name?.toLowerCase() || "";
      const companyName = s.company_name?.toLowerCase() || "";

      return (
        shareName.includes(searchValue) ||
        companyName.includes(searchValue)
      );
    });
  }, [sharesData, filters.search]);

  console.log("search value:", filters.search);
  console.log("filteredShares", filteredShares);



  if (listStatus == 'loading') return <PageLoader />;

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Unlisted Shares" },
        ]}
        tag="Marketplace"
        title="Unlisted"
        highlight="Shares"
        description="Browse pre-IPO and unlisted opportunities across India’s fastest growing sectors."
      />

      <QuickFilterBar />

      <div className="max-w-7xl bg-white mx-auto px-6 lg:px-16 py-8 flex gap-8">
        <div className="flex-1">

          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 pb-4">
            <p className="text-sm">
              <span className="font-semibold">
                {pagination?.total || 0}
              </span>{" "}
              companies found
            </p>

            <Input
              type="text"
              placeholder="Company name..."
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
              className="!pr-8"
              icon={<Search size={16} />}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredShares.map((share) => (
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

          {/* Pagination */}
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