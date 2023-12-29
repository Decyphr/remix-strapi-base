import axios from "axios";

const strapi = axios.create({
  baseURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
});

export default strapi;
