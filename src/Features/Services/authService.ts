import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

interface RegisterPayload {
  firstname: string;
  username: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await axios.post(`${API_URL}/register`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
