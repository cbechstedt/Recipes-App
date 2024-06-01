import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getUserFavorites = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/favorites`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    throw error;
  }
};

export const addFavorite = async (userId, favorite) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${userId}/favorites`, favorite);
    return response.data;
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
};

export const removeFavorite = async (userId, favoriteId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}/favorites/${favoriteId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};

export const getAllUsersFavorites = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all users' favorites:", error);
    throw error;
  }
};
