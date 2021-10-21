import axios from "axios";

export default (accessToken = "") => {
  let headers = {
    "Content-Type": "application/json",
  };

  if (accessToken.length) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return axios.create({
    baseURL: `${global_api}`,
    headers,
  });
};
