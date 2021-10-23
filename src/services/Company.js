import Api from "@/services/Api";

export default {
  async addCompany(data) {
    const url = `${global_api}/company/add`;

    try {
      const accessToken = sessionStorage.getItem("tokenCovidTracking");
      const companyRes = await Api(accessToken).post(`${url}`, data);
      return companyRes;
    } catch (error) {
      return error.response;
    }
  },

  async getCompany() {
    const url = `${global_api}/company/get`;

    try {
      const companyRes = await Api().get(`${url}`);
      return companyRes.data.data;
    } catch (error) {
      return error.response;
    }
  },
};
