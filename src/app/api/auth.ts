import { IAuth, TokenResponse } from "@/types/authType";
import api from "../../helpers/axiosIntance";

export const loginProvider = async (data: {
  email: string;
  password: string;
}): Promise<TokenResponse> => {
  const response = await api.post<TokenResponse>(`/api/auth/login`, data);
  console.log('user', response.data)
  return response.data;
};

export const registerProvider = async (data: IAuth): Promise<TokenResponse> => {
  const response = await api.post<TokenResponse>(`/api/auth/register`, data);
  return response.data;
};

export const refreshProvider = async (
  refreshToken: string,
): Promise<TokenResponse> => {
  const response = await api.post<TokenResponse>(`/api/auth/refresh`, {
    refreshToken,
  });
  return response.data;
};
