export interface RestaurantData {
  _id: string;
  restaurantName: string;
  desc: string;
  address: string;
  image: string;
}

export interface AddRestaurantData {
  restaurantName: string;
  desc: string;
  address: string;
  image: string;
}

export const addRestaurant = async (data: AddRestaurantData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/restaurant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchRestaurants = async (): Promise<RestaurantData[]> => {
  const response = await fetch('http://localhost:3000/api/restaurant', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as RestaurantData[];
};

export const fetchRestaurantById = async (id: string): Promise<RestaurantData> => {
  const response = await fetch(`http://localhost:3000/api/restaurant/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as RestaurantData;
};

export const updateRestaurant = async (id: string, data: AddRestaurantData): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/restaurant/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};