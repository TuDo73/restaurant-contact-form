import Api from "@/services/Api";

export default {
  async getCustomers() {
    const url = `${global_api}/customer/get`;

    try {
      const accessToken = sessionStorage.getItem("tokenCovidTracking");
      const getCustomerResp = await Api(accessToken).get(`${url}`);
      return getCustomerResp.data;
    } catch (error) {
      console.log("error:", error.response);
      return error.response;
    }
  },

  async getCustomerByDate(date) {
    const url = `${global_api}/customer/get?created_at=${date}`;

    try {
      const accessToken = sessionStorage.getItem("tokenCovidTracking");
      const getCustomerResp = await Api(accessToken).get(`${url}`);
      return getCustomerResp.data;
    } catch (error) {
      console.log("error:", error.response);
      return error.response;
    }
  },

  async createCustomer(customer) {
    const url = `${global_api}/customer/add`;

    try {
      const createCustomerResp = await Api().post(`${url}`, customer);
      return createCustomerResp;
    } catch (error) {
      console.log("error:", error.response);
      return error.response;
    }
  },
};
