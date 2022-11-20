import { AxiosResponse } from "axios";
import client from "./index";
import { GetSkillRes } from "../models/skill";

export const getSkill = (): Promise<AxiosResponse<GetSkillRes[]>> => {
  return client.get(`/skill`);
};
