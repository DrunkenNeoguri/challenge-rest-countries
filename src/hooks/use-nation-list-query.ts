import { NationService } from "@/services/nation-service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useNationListQuery() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? undefined;
  const region = (searchParams.get("region") as RegionType) ?? undefined;

  const { data: nationList } = useQuery({
    queryKey: ["nation/list", { keyword, region }],
    queryFn: async () => await NationService.GetNationList({ keyword, region }),
  });

  return nationList;
}
