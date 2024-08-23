import { NationService } from "@/services/nation-service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useNationLDetailQuery() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const { data } = useQuery({
    queryKey: ["nation/list", { name }],
    queryFn: () => NationService.GetNationDetail({ name }),
  });

  return data;
}
