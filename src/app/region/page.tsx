"use client";
import RegionList from "./_components/region-list";
import RegionSearchFilter from "./_components/region-search-filter";

export default function Region() {
  return (
    <>
      <RegionSearchFilter />
      <RegionList />
    </>
  );
}
