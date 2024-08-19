import { api } from "@/services/api";

export async function GET() {
  const res = await api.get("data.json").json<RegionType[]>();

  return Response.json(res);
}
