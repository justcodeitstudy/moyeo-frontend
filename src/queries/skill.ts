import { useQuery } from "@tanstack/react-query";
import { skillKeys } from "../constants/queryKeys";
import { getSkill } from "../api/skill";
import { GetSkillRes } from "../models/skill";

export const useGetSkill = (isSelect = false) => {
  return useQuery(skillKeys.skill, getSkill, {
    select: (data): GetSkillRes[] => {
      if (isSelect) {
        return data.data.filter((skill) => skill.orderNum < 7);
      }
      return data.data;
    },
  });
};
