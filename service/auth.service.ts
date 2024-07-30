import http from "@/api/interseptors";
import { saveAccessToken } from "@/helpers/auth-helpeers";
import { IAuth } from "@/types/auth";
export const login = async (data: IAuth) => {
  try {
    const response = await http.post("/auth/login", data);
    if (response.status === 200) {
      saveAccessToken(response?.data?.access_token);
    }
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
