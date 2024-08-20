import React from "react";
import { IRestaurantData } from "@/app/shared/@types";

interface RestaurantsProps {
  restaurants: IRestaurantData[];
}

const Restaurants: React.FC<RestaurantsProps> = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
          <p>{restaurant.phone}</p>
          {restaurant.image && (
            <img src={restaurant.image} alt={restaurant.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
