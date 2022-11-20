import client from "./index";
import { GetPostRequest, GetPostResponse } from "../models/post";
import { paramsSerializer } from "../utils/paramsSerializer";

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
