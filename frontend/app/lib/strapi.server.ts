import type { AxiosError } from "axios";
import axios from "axios";

const strapi = axios.create({
  baseURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
});

strapi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if ((error as AxiosError).response?.status === 404) {
      throw new Response(null, { status: 404, statusText: "Not Found" });
    }

    return Promise.reject(error);
  }
);

export default strapi;
