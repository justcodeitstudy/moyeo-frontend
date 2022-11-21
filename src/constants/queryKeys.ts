import { ParsedUrlQuery } from "querystring";

export const userKeys = {
  getUserMe: ["getUserMe"],
  getUser: (userId: string) => ["getUser", userId],
};

export const postKeys = {
  post: ["post"],
  postMe: ["postMe"],
  postWithQuery: (query: ParsedUrlQuery) => ["post", query],
};

export const skillKeys = {
  skill: ["skill"],
};

export const scrapsKeys = {
  scraps: ["scraps"],
};
