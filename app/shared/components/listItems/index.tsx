import React from "react";
import { useRouter } from "next/navigation";
import { IDishData, IRestaurantData, IListData } from "@/app/shared/@types";
import styles from "./listItems.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ListItemsProps<T extends IListData> {
  items: T[];
  itemType: "restaurant" | "dish";
}

const ListItems = <T extends IListData>({
  items,
  itemType,
}: ListItemsProps<T>) => {
  const router = useRouter();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");

  const slidesToShow = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    id: string | undefined
  ) => {
    if (id) {
      router.push(`/${itemType}/${id}`);
    }
  };

  const isRestaurant = (item: IListData): item is IRestaurantData => {
    return itemType === "restaurant";
  };

  const isDish = (item: IListData): item is IDishData => {
    return itemType === "dish";
  };

  if (items.length === 0) {
    return (
      <p>
        Nenhum {itemType === "restaurant" ? "restaurante" : "prato"} encontrado.
      </p>
    );
  }

  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>
        Relacionado aos {itemType === "restaurant" ? "restaurantes" : "pratos"}{" "}
        vistos por você
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
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.cardWrapper}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <div
              className={styles.card}
              onClick={(event) => handleCardClick(event, item.id)}
            >
              <img
                src={item.image || "/restaurant_default.jpg"}
                alt={item.name}
                title={
                  item.image ? "" : "Imagem padrão: Nenhuma foto disponível."
                }
              />
              <div className={styles.info}>
                <h3>{item.name}</h3>
                {isRestaurant(item) && <p>{item.address}</p>}
                {isRestaurant(item) && <p>{item.phone}</p>}
                {isDish(item) && <p>{`Preço: R$ ${item.price}`}</p>}
                <div className={styles.rating}>
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

export default ListItems;
