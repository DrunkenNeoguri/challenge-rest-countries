import ky from "ky";

export const api = ky.create({ prefixUrl: "http://localhost:3000/" });

export const clientAPI = api.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/api`,
}));
