import client from "./index";
import {
  Content,
  GetPostRequest,
  GetPostRequestWithId,
  GetPostResponse,
  PostRequest,
} from "../models/post";
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

export const getPostWithId = (
  id: number,
): Promise<AxiosResponse<GetPostRequestWithId>> => {
  return client.get(`/post/${id}`);
};

export const postPost = (data: PostRequest) => {
  return client.post("/post", data);
};
