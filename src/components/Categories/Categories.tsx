import {FC} from "react";
import {Link} from "react-router-dom";
import styles from "@/assets/styles/Categories.module.css";
import type {ProductType} from "@/types";

interface CategoriesProps {
  title: string,
  products: ProductType[]
  amount: number
}

export const Categories: FC<CategoriesProps> = ({title, products = [], amount}) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>

      <div className={styles.list}>
        {list.map(({id, name, image}) => (
          <Link to={`/categories/${id}`} key={id} className={styles.item}>
            <div
              className={styles.image}
              style={{backgroundImage: `url(${image})`}}
            />
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
