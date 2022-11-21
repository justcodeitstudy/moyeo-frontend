import { useMutation } from "@tanstack/react-query";
import { deleteAuth } from "../api/auth";

export const useDeleteAuth = () => {
  return useMutation(() => deleteAuth());
};
