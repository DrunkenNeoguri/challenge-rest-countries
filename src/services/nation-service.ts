import { clientAPI } from "./api";

export class NationService {
  static async GetNationList(request: {
    keyword?: string;
    region?: RegionType;
  }) {
    const params = { keyword: "", region: "" };
    if (request.keyword) {
      params.keyword = request.keyword;
    }
    if (request.region) {
      params.region = request.region;
    }

    const response = await clientAPI
      .get("nation", {
        searchParams: params,
      })
      .json();

    return response;
  }

  static async GetNationDetail(request: { name: string }) {
    const response = await clientAPI.get("nation/detail", {
      searchParams: { name: request.name },
    });
    return response.json() as Promise<NationType>;
  }

  // static async PostRegionList(request: {
  //   keyword?: string;
  //   region?: RegionType;
  // }) {
  //   const formData = new FormData();
  //   if (request.keyword) {
  //     formData.append("keyword", request.keyword);
  //   }

  //   if (request.region) {
  //     formData.append("region", request.region);
  //   }
  //   const response = await clientAPI.post("nation", { body: formData });
  //   return response.json() as Promise<NationType[]>;
  // }
}
