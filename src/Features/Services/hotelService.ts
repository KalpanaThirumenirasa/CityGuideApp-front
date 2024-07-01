export interface HotelData {
    _id: string;
    hotelName: string;
    desc: string;
    address: string;
    image: string;
  }
  
  export const fetchHotels  = async (): Promise<HotelData[]> => {
    const response = await fetch('http://localhost:3000/api/hotel', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data as HotelData[];
  };
  