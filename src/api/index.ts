import axios from "axios";
import { CustomCookies } from "../utils/cookies";
const SERVER_BASE = process.env.NEXT_PUBLIC_SERVER_HOME;

const client = axios.create({
  baseURL: SERVER_BASE,
});

client.interceptors.request.use(
  async (config) => {
    const accessToken = CustomCookies.getCookies("accessToken");

    if (accessToken) {
      config.headers = {
        "X-MOYEO-AUTH-TOKEN": `${accessToken}`,
      };
    } else {
      config.headers = {};
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
