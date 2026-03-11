import { IAuth } from "@/types/authType";
import api from "./axiosIntance";

export const loginProvider = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post(`/api/auth/login`, data);
  return response.data;
};

export const registerProvider = async (data: IAuth) => {
  const response = await api.post(`/api/auth/register`, data);
  return response.data;
};