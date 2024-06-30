// src/pages/Restaurants.tsx
import React, { useEffect, useState } from 'react';

interface Restaurant {
  id: string;
  name: string;
  description: string;
}

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Restaurants in Passau</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
