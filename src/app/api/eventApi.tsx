import api from "./axiosIntance";

export const fetchEvents = async ({ page, pageSize }: { page: number, pageSize: number }) => {
  try {
    console.log(`/api/events?page=${page}&pageSize=${pageSize}`);
    const response = await api.get(
      `/api/events?page=${page}&pageSize=${pageSize}`,
    );
    console.log("API Response:", response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Fetch failed even after refresh attempt:", error);
    return [];
  }
};

export const createEvent = async () => {
  try {
  } catch (err) {
    console.error("Fetch failed even after refresh attempt:", err);
    return [];
  }
};
