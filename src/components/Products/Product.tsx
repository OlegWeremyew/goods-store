import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/utils/routes";
import styles from "@/assets/styles/Product.module.css";
import {useAppDispatch} from "@/store";
import {addItemToCard} from "@/store/user/userSlice";

const SIZES: number[] = [4, 4.5, 5];

interface ProductProps {
  title: string
  price: number
  images: string[]
  description: string
}

export const Product: FC<ProductProps> = (item) => {

  const {title, price, images, description} = item

  const dispatch = useAppDispatch();

  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentSize, setCurrentSize] = useState<number>(0);

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = (): void => {
    dispatch(addItemToCard(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{backgroundImage: `url(${currentImage})`}}
        />
        <div className={styles["images-list"]}>
          {images.map((image: string, i: number) => (
            <div
              key={i}
              className={`${styles.image} ${image === currentImage ? styles.imageActive : null}`}
              style={{backgroundImage: `url(${image})`}}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size: number) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={addToCart}
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button type="button" className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};
