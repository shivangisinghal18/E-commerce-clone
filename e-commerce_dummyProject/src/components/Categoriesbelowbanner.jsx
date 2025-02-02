import styles from "./Categoriesbelowbanner.module.css";
import { useEffect, useState } from "react";

export default function Categoriesbelowbanner() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      console.log("fetching function called");
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const result = await response.json();
        result && setCategories(result);
      } catch (error) {
        console.group("Error came in fetching category", error);
      }
    };
    fetchCategories();
  }, []);

  const singleObject = categories?.length && categories[0];
  const categoryCards = () => {
    return categories.map((category) => {
      const { image, id, category: categoryType } = category || {};
      return (
        <>
          <div className={styles.category_card}>
            <div className={styles.image_container}>
              <img src={image} alt="category_image"></img>
            </div>
            <div>
              <h3>{categoryType}</h3>
              <p>{id} Items</p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <section className={styles.categories_container}>
        <div className={`${styles.category_card1} ${styles.category_card}`}>
          <img src={singleObject.image} alt="category_image"></img>
          <div>
            <h3 className={styles.category_card1Category}>
              {singleObject.category}
            </h3>
            <p className={styles.category_card1Items}>
              {singleObject.id} Items
            </p>
          </div>
        </div>

        {categoryCards()}
        {categoryCards()}
      </section>
    </>
  );
}
