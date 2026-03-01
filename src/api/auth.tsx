import { IAuth } from "@/types/authType";
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API_URL;

export const loginProvider = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${api}/api/auth/login`, data);
  return response.data;
};

export const registerProvider = async (data: IAuth) => {
  const response = await axios.post(`${api}/api/auth/register`, data);
  return response.data;
};
