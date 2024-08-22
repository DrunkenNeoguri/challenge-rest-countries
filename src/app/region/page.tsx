"use client";
import useNationListQuery from "@/hooks/use-nation-list-query";
import RegionList from "./_components/region-list";
import RegionSearchFilter from "./_components/region-search-filter";

export default function Region() {
  const regionList = useNationListQuery();

  return (
    <>
      <RegionSearchFilter />
      <RegionList regionList={regionList} />
    </>
  );
}
