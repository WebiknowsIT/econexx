"use client";

import "@/styles/unlisted.css";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeaderDark";
import ShareCard from "./components/ShareCard";
import QuickFilterBar from "./components/QuickFilterBar";
import SidebarFilters from "./components/SidebarFilters";
import Toolbar from "./components/Toolbar";

import {SHARES} from "../../../utils/data";

export default function UnlistedMarketplace() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState([]);
  const [quickFilter, setQuickFilter] = useState("All");
  const [sortValue, setSortValue] = useState("default");
  const [view, setView] = useState("grid");
  const [watchlist, setWatchlist] = useState([]);
  const [filters, setFilters] = useState({
  search: "",
  sectors: [],
  stages: [],
  returnFilter: "all",
  exclusive: false,
  available: false,
});

const toggleWatch = (id) => {
setWatchlist((prev) =>
    prev.includes(id)
    ? prev.filter((item) => item !== id)
    : [...prev, id]
);
};

const clearFilters = () => {
  setFilters({
    search: "",
    sectors: [],
    stages: [],
    returnFilter: "all",
    exclusive: false,
    available: false,
  });
};

  const filteredShares = useMemo(() => {
    let result = [...SHARES];

    if (search) {
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.sector.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sector.length > 0) {
      result = result.filter((s) => sector.includes(s.sector));
    }

    if (sortValue === "price-asc")
      result.sort((a, b) => a.price - b.price);

    if (sortValue === "price-desc")
      result.sort((a, b) => b.price - a.price);

    if (sortValue === "return-desc")
      result.sort((a, b) => b.return6m - a.return6m);

    return result;
  }, [search, sector, sortValue]);

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
        stats={[
          { value: "200+", label: "Companies" },
          { value: "12K+", label: "Investors" },
          { value: "₹480Cr", label: "Traded" },
        ]}
      />

      <QuickFilterBar
            active={quickFilter}
            onChange={(val) => {
                setQuickFilter(val);
                setPage(1);
            }}
            />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex gap-8">

        {/* Sidebar */}
        <SidebarFilters
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        />

        {/* Main Content */}
        <div className="flex-1">

            <Toolbar
                totalCount={filteredShares.length}
                sortValue={sortValue}
                setSortValue={setSortValue}
                view={view}
                setView={setView}
                onOpenDrawer={() => setIsDrawerOpen(true)}
            />

          

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredShares.map((share) => (
              <ShareCard
                    key={share.id}
                    s={share}
                    view={view}
                    watchlist={watchlist}
                    toggleWatch={toggleWatch}
                />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}