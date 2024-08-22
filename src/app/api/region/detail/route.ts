import { api } from "@/services/api";

export async function GET(req: Request) {
  const res = await api.get("data.json").json<NationType[]>();

  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name")?.trim().toLowerCase();

  if (!name || name === "") {
    return new Response("데이터 없음", {
      status: 400,
    });
  }

  const result = res.find((data) => data.name.toLowerCase().trim() === name);

  return Response.json(result);
}
