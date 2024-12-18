// src/services/profileService.ts
import axios from 'axios';
import { profileDto } from '../models/profileDto';

const API_URL = 'https://localhost:7022/users-module/User';

const profileService = {
  // Fetch all users
  getAllUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Update user profile
  updateUserProfile: async (userId: string, profileDto: profileDto) => {
    const response = await axios.put(`${API_URL}/${userId}`, profileDto);
    return response.data;
  },
};

export default profileService;
