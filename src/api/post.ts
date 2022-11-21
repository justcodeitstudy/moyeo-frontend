import client from "./index";
import { Content, GetPostRequest, GetPostResponse } from "../models/post";
import { paramsSerializer } from "../utils/paramsSerializer";
import { AxiosResponse } from "axios";

export const getPost = async (
  params: GetPostRequest,
): Promise<GetPostResponse> => {
  const { data } = await client.get(`/post`, {
    params,
    paramsSerializer: (paramObj) => {
      return paramsSerializer(paramObj);
    },
  });
  return {
    ...data,
    pageParam: params.page,
  };
};

export const getPostMe = (): Promise<AxiosResponse<Content[]>> => {
  return client.get(`/post/me`);
};
