import { Url } from "url";

export interface RegisterData {
  firstname: string;
  username: string;
  password: string;
}

export const register = async (data: RegisterData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
console.log(response)
  return response.json();
};

export interface HotelData {
  hotelName: string;
  desc: string;
  address: string;
  image: string;
}

export const hotel = async (data: HotelData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/admin/hotel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
console.log(response)
  return response.json();
};


export interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
console.log(response)
  return response.json();
};