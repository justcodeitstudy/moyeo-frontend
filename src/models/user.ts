import { GetSkillRes } from "./skill";

export interface MyProfileResDTO {
  email: string;
  picture: string;
  nickname: string;
  introduction: string;
  skillIds: GetSkillRes[];
}

export interface EditProfileReqDTO {
  nickname: string;
  introduction: string;
  skillIds: number[];
}

export interface ProfileResDTO {
  picture: string;
  nickname: string;
  introduction: string;
  skillIds: GetSkillRes[];
}
