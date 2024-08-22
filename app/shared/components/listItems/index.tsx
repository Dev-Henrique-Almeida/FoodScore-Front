import React from "react";
import { useRouter } from "next/navigation";
import styles from "./listItems.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IListData } from "@/app/shared/@types";
import useRatings from "../../hooks/Rating/useRatings";
import CardList from "./cardList";

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

  const ratings = useRatings(items, itemType);

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement>,
    id: string | undefined
  ) => {
    if (id) {
      router.push(`/${itemType}/${id}`);
    }
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
            <CardList
              item={item}
              rating={ratings[item.id]}
              onClick={handleCardClick}
              itemType={itemType}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ListItems;
