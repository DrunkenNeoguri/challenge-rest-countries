import { api } from "@/services/api";

export async function GET(req: Request) {
  const res = await api.get("data.json").json<NationType[]>();

  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword")?.trim().toLowerCase();
  const region = searchParams.get("region")?.trim();

  const result = res.filter((data) => {
    if (keyword === "" && region === "") return true;

    const checkKeyword = keyword
      ? data.name.toLowerCase().includes(keyword)
      : true;

    const checkRegion = region ? data.region.includes(region) : true;

    return checkKeyword && checkRegion;
  });

  return Response.json(result);
}

// export async function POST(req: Request) {
//   const res = await api.get("data.json").json<NationType[]>();
//   const formData = await req.formData();

//   const keyword = formData.get("keyword")?.toString().toLowerCase();
//   const region = formData.get("region")?.toString();

//   const result = res.filter((data) => {
//     if (!keyword && !region) return true;

//     const checkKeyword = keyword
//       ? data.name.toLowerCase().includes(keyword)
//       : true;

//     const checkRegion = region ? data.region.includes(region) : true;

//     return checkKeyword && checkRegion;
//   });
//   return Response.json(result);
// }
