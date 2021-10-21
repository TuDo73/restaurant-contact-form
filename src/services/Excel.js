import Api from "@/services/Api";

export default {
  async getExcel() {
    const url = `${global_api}/customer/excel`;

    try {
      const accessToken = sessionStorage.getItem("tokenCovidTracking");
      const excelResp = await Api(accessToken).get(`${url}`, {
        responseType: "blob",
      });
      return excelResp.data;
    } catch (error) {
      console.log("error:", error.response);
      return error.response;
    }
  },

  async getExcelByDate(date) {
    const url = `${global_api}/customer/excel?created_at=${date}`;

    try {
      const accessToken = sessionStorage.getItem("tokenCovidTracking");
      const excelResp = await Api(accessToken).get(`${url}`, {
        responseType: "blob",
      });
      return excelResp.data;
    } catch (error) {
      console.log("error:", error.response);
      return error.response;
    }
  },
};
