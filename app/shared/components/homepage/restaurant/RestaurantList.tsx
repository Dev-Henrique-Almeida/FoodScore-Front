import React from "react";
import { useRouter } from "next/navigation";
import { IRestaurantData } from "@/app/shared/@types";
import styles from "./restaurantList.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";

interface RestaurantListProps {
  restaurants: IRestaurantData[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  const router = useRouter();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");

  const slidesToShow = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

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
        className={styles.carouselContainer}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        swipeable
        emulateTouch
        dynamicHeight={false}
        selectedItem={0}
        interval={3000}
        transitionTime={500}
        autoPlay={false}
        stopOnHover
        centerMode={slidesToShow > 1} 
        centerSlidePercentage={100 / slidesToShow} 
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={styles.arrowNext}
              onClick={onClickHandler}
              title={label}
            >
              ▷
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
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RestaurantList;
