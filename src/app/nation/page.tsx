"use client";
import useNationListQuery from "@/hooks/use-nation-list-query";
import NationList from "./_components/nation-list";
import NationSearchFilter from "./_components/nation-search-filter";

export default function Nation() {
  const nationList = useNationListQuery();

  return (
    <>
      <NationSearchFilter />
      {nationList && <NationList {...nationList} />}
    </>
  );
}
