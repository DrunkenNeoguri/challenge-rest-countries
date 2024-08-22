import { NationService } from "@/services/nation-service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useNationLDetailQuery() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const { data } = useQuery<NationType>({
    queryKey: ["nation/list"],
    queryFn: () => NationService.GetNationDetail({ name }),
  });

  return data;
}
