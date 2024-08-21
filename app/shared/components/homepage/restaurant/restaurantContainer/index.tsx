import { IRestaurantData } from "@/app/shared/@types";
import { ListRestaurants } from "@/app/shared/service";
import { useEffect, useState } from "react";
import Restaurants from "../RestaurantList";

interface RestaurantContainerProps {
  searchTerm: string;
}

const RestaurantContainer: React.FC<RestaurantContainerProps> = ({
  searchTerm,
}) => {
  const [restaurants, setRestaurants] = useState<IRestaurantData[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const fetchedRestaurants = await ListRestaurants();
        const sortedRestaurants = fetchedRestaurants.sort(
          (a: IRestaurantData, b: IRestaurantData) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
        setRestaurants(sortedRestaurants);
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return <Restaurants restaurants={restaurants} />;
};

export default RestaurantContainer;
