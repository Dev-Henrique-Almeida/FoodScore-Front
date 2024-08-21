import { api, configHeaders } from "../api";

export const ListRestaurants = async () => {
  try {
    const response = await api.get(`/restaurants`, configHeaders);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRestaurantById = async (id: string) => {
  try {
    const response = await api.get(`/restaurants/${id}`, configHeaders);
    return response.data;
  } catch (error) {
    throw error;
  }
};
