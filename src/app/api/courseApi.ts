import axios from "axios";

export const courseApi = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) => {
  try {
    const response = await axios.get(`/api/courses`, {
      params: { page, pageSize },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return { items: [], total: 0 };
  }
};
