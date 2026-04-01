import api from "@/helpers/axiosIntance";
import { IEducation } from "@/types/educationType";
import { profileType } from "@/types/profileType";

export const getSavedProfiles = async (userId: number) => {
  try {
    const res = await api.get(`/api/profile/saved/${userId}`);
    return res.data;
  } catch (err) {
    console.log(err)
  }
};

export const saveProfile = async (userId: number, data: IEducation) => {
  try {
    const res = await api.post(`/api/profile/save/${userId}`, data);
    return res.data;
  } catch (err) {
    console.error("Failed to save profile", err);
  }
};

export const postProfile = async (payload: profileType) => {
  try {
    const res = await api.post("/api/profile", payload);
    console.log('ressss', res.data)
    return res.data;
  } catch (err) {
    console.error("POST /profile failed. Error details:", err);
  }
};

export const updateProfile = async (
  userId: number | string,
  updatedData: unknown,
) => {
  try {
    const res = await api.put(`/api/profile/${userId}`, updatedData);
    return res.data;
  } catch (err) {
    console.error("Failed to update profile", err);
    throw err;
  }
};
