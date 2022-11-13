import client from "api";
import { AxiosResponse } from "axios";
import { EditProfileReqDTO, MyProfileResDTO, ProfileResDTO } from "models/user";

/**
 * 내 프로필 조회 API
 */
export const getUserMe = (): Promise<AxiosResponse<MyProfileResDTO>> => {
  return client.get(`/users/me`);
};

/**
 * 내 프로필 수정 API
 */
export const patchUserMe = (payload: EditProfileReqDTO) => {
  return client.patch(`/users/me`, payload);
};

/**
 * 타인의 프로필 보기 API
 */
export const getUserDetail = (
  userId: string,
): Promise<AxiosResponse<ProfileResDTO>> => {
  return client.get(`/users/${userId}`);
};
