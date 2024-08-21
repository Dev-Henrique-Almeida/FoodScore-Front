import React from "react";
import { IRestaurantData } from "@/app/shared/@types";
import styles from "./restaurantList.module.scss";

interface RestaurantListProps {
  restaurants: IRestaurantData[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>;
  }

  return (
    <div className={styles.restaurantListContainer}>
      <h2 className={styles.title}>
        Relacionado aos restaurantes vistos por você
      </h2>
      <div className={styles.restaurantGrid}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.restaurantCard}>
            <img
              src={restaurant.image || "/restaurant_default.jpg"}
              alt={restaurant.name}
              title={
                restaurant.image
                  ? ""
                  : "Imagem padrão: A loja não inseriu uma foto própria."
              }
            />
            <div className={styles.restaurantInfo}>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address}</p>
              <p>{restaurant.phone}</p>
              <div className={styles.restaurantRating}>
                {Array(5)
                  .fill("⭐")
                  .map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                <span className={styles.reviewCount}>100 avaliações</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
