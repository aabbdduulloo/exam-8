import axios from "axios";
import { getAccessToken } from "@/helpers/auth-helpeers";
const API_URL = process.env.API_URL;
const http = axios.create({
  baseURL: "https://app.olimjanov.uz/v1",
});

http.interceptors.request.use(config => {
  let access_token = getAccessToken();
  if (access_token) {
    config.headers["Authorization"] = access_token;
  }
  return config;
});
export default http;
