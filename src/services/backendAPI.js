import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const register = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, user);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const getUserFavorites = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    throw error;
  }
};

export const addFavorite = async (userId, favorite) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${userId}/favorites`, favorite);
    return response.data;
  } catch (error) {
    console.error('Error adding favorite:', error);
    throw error;
  }
};

export const removeFavorite = async (userId, favoriteId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}/favorites/${favoriteId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing favorite:', error);
    throw error;
  }
};

export const getAllUsersFavorites = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users favorites:', error);
    throw error;
  }
};
