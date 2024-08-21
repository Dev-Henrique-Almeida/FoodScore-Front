import React from "react";
import { useRouter } from "next/navigation";
import { IRestaurantData } from "@/app/shared/@types";
import styles from "./restaurantList.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface RestaurantListProps {
  restaurants: IRestaurantData[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  const router = useRouter();

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    id: string | undefined
  ) => {
    if (id) {
      router.push(`/restaurant/${id}`);
    }
  };

  if (restaurants.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>;
  }

  return (
    <div className={styles.restaurantListContainer}>
      <h2 className={styles.title}>
        Relacionado aos restaurantes vistos por você
      </h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        centerMode
        centerSlidePercentage={30} 
        swipeable
        emulateTouch
        dynamicHeight={false}
        selectedItem={0}
        interval={3000}
        transitionTime={500}
        autoPlay={false}
        stopOnHover
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={styles.arrowNext}
              onClick={onClickHandler}
              title={label}
            >
              ▶
            </div>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div
              className={styles.arrowPrev}
              onClick={onClickHandler}
              title={label}
            >
              ◁
            </div>
          )
        }
      >
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className={styles.restaurantCardWrapper}
          >
            <div
              className={styles.restaurantCard}
              onClick={(event) => handleCardClick(event, restaurant.id)}
            >
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
            <div>
              <p>teste</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RestaurantList;
