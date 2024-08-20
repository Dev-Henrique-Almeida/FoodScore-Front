"use client";
import { useState } from "react";
import Search from "@/app/shared/components/search";
import styles from "./home.module.scss";
import RestaurantContainer from "@/app/shared/components/restaurant/restaurantContainer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.topLevel}>
      <Search onSearchChange={setSearchTerm} />
      <div className={styles.container}>
        <RestaurantContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
}
