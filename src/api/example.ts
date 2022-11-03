import axios from "axios";

/**
 * 예제 API
 */
export const exampleApi = () => {
  return axios.get(
    `https://api.sampleapis.com/codingresources/codingResources`,
  );
};
