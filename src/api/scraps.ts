import { AxiosResponse } from "axios";
import client from "./index";
import { Content } from "../models/post";

export const getScraps = (): Promise<AxiosResponse<Content[]>> => {
  return client.get(`/scraps`);
};

export const postScraps = (postId: string): Promise<AxiosResponse> => {
  return client.post(`/scraps/${postId}`);
};

export const deleteScraps = (postId: string): Promise<AxiosResponse> => {
  return client.delete(`/scraps/${postId}`);
};
