export interface RestaurantData {
    _id: string;
    restaurantName: string;
    desc: string;
    address: string;
    image: string;
  }
  
  export const fetchRestaurants  = async (): Promise<RestaurantData[]> => {
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
  