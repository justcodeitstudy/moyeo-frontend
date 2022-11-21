import client from "./index";

export const deleteAuth = () => {
  return client.post(`/oauth/logout`);
};
