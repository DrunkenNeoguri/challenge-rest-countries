import { clientAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export default function useGetRegionListQuery() {
  const { data, isLoading, refetch } = useQuery<RegionType[], unknown>({
    queryKey: ["region/list"],
    queryFn: async () => {
      const response = await clientAPI.get("region");
      return response.json();
    },
  });
  return { data, isLoading, refetch };
}
