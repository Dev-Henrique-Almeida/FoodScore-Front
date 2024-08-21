import { api, configHeaders } from "../api";

import { AxiosError } from "axios";

export const ListRestaurants = async () => {
  try {
    const response = await api.get(`/restaurants`, configHeaders);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 404) {
        return [];
      }
    }
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
