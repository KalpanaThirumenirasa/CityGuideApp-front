// touristPlaceService.ts

export interface TouristPlaceData {
  _id: string;
  touristplaceName: string;
  desc: string;
  address: string;
  image: string;
}

export interface AddTouristPlaceData {
  touristplaceName: string;
  desc: string;
  address: string;
  image: string;
}

export const addTouristPlace = async (data: AddTouristPlaceData): Promise<any> => {
  const response = await fetch('http://localhost:3000/api/touristplace', {
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

export const fetchTouristPlaces = async (): Promise<TouristPlaceData[]> => {
  const response = await fetch('http://localhost:3000/api/touristplace', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as TouristPlaceData[];
};

export const fetchTouristPlaceById = async (id: string): Promise<TouristPlaceData> => {
  const response = await fetch(`http://localhost:3000/api/touristplace/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as TouristPlaceData;
};

export const updateTouristPlace = async (id: string, data: AddTouristPlaceData): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/touristplace/${id}`, {
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