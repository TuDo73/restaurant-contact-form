import Api from "@/services/Api";

export default {
  async login(username, password) {
    const url = `${global_api}/login?username=${username}&password=${password}`;

    sessionStorage.setItem("tokenCovidTracking", null);
    try {
      const loginResp = await Api().get(`${url}`);
      sessionStorage.setItem("tokenCovidTracking", loginResp.data.token);
    } catch (error) {
      return error.response;
    }
  },
};
