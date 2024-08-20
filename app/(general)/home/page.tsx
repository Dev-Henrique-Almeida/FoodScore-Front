"use client";
import { useState, useEffect } from "react";
import Search from "@/app/shared/components/search";
import styles from "./home.module.scss";
import RestaurantContainer from "@/app/shared/components/restaurant/restaurantContainer";
import { ListRestaurants } from "@/app/shared/service";
import { IRestaurantData } from "@/app/shared/@types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState<IRestaurantData[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const fetchedRestaurants = await ListRestaurants();
      setRestaurants(fetchedRestaurants);
    };

    fetchRestaurants();
  }, []);

  return (
    <div className={styles.topLevel}>
      <Search onSearchChange={setSearchTerm} restaurants={restaurants} />
      <div className={styles.container}>
        <RestaurantContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
}
