import { api, configHeaders } from "../api";

export const ListRestaurants = async () => {
  try {
    const response = await api.get(`/restaurants`, configHeaders);
    return response.data;
  } catch (error) {
    throw error;
  }
};
