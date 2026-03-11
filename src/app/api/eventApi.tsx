import api from "./axiosIntance";

export const fetchEvents = async () => {
  try {
    const response = await api.get(`/api/events`);
    console.log("API Response:", response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Fetch failed even after refresh attempt:", error);
    return [];
  }
};
