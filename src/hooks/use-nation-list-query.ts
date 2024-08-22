import { NationService } from "@/services/nation-service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useNationListQuery() {
  const [regionList, setRegionList] = useState<NationType[]>();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") ?? undefined;
  const region = (searchParams.get("region") as RegionType) ?? undefined;

  const { refetch } = useQuery<NationType[]>({
    queryKey: ["nation/list"],
    queryFn: () => NationService.GetRegionList({ keyword, region }),
    onSuccess: (data) => {
      setRegionList(data);
    },
  });

  useEffect(() => {
    refetch();
  }, [searchParams, refetch]);

  return regionList;
}
