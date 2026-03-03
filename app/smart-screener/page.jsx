"use client";

import PageHeader from "../../components/PageHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useScreenerFilters } from "./useScreenerFilters";
import ScreenerFiltersBar from "./ScreenerFiltersBar";
import ActiveFilters from "./ActiveFilters";
import AddFiltersDrawer from "./AddFiltersDrawer";
import ScreensPresets from "./ScreensPresets";
import CompanySearch from "./CompanySearch";
import ScreenerResults from "./ScreenerResults";
import Button from "../../components/ui/Button";
import { Download } from "lucide-react";

export default function Screener() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const {
    filters,
    visibleFilters,
    activeFilters,
    drawerOpen,
    setDrawerOpen,
    updateFilter,
    applyFilters,
    addExtraFilter,
    removeRangeFilter,
    resetFilters,
    applyPreset,
  } = useScreenerFilters();

  return (
    <main>
      <PageHeader
        backgroundImage="images/banners.jpg"
        overlay="bg-black/50"
        title="Unlisted Stock Screener"
        description="Get Early Access to Tomorrow's Industry Leaders—Before Their IPO"
        primaryText="Learn More"
        onPrimaryClick={() => router.push("/media-coverage")}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <ScreenerFiltersBar
          filters={filters}
          visibleFilters={visibleFilters}
          onChange={updateFilter}
          onRemoveRange={removeRangeFilter}
          onApply={applyFilters}
          onReset={resetFilters}
          onAddMore={() => setDrawerOpen(true)}
        />

        <ScreensPresets onRunPreset={applyPreset} />
        <CompanySearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <ActiveFilters
          filters={activeFilters}
          onRemove={removeRangeFilter}
        />

        <AddFiltersDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onAddFilter={addExtraFilter}
        />

        <div className="text-right mt-8 mb-5">
          <Button variant="outline">
            <Download size={16} className="me-3" />  Export to Excel
          </Button>
       </div>

        <ScreenerResults />
      
      </section>
    </main>
  );
}
