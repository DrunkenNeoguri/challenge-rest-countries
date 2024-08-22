"use client";
import useNationLDetailQuery from "@/hooks/use-nation-detail-query";
import DetailSection from "./_components/detail-section";

export default function NationDetail() {
  const data = useNationLDetailQuery();

  if (!data) {
    return;
  }

  return <DetailSection {...data} />;
}
