import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState, useEffect } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import MainProductDetails from "./MainProductDetails.jsx";
import ProductHeading from "./ProductHeading.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [productdetails, setProductdetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      console.log("Fetching function called");
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        console.log(result);
        setProductdetails(result);
      } catch (error) {
        console.log("Error came in fetching the product", error);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <>
      <Header />
      {productdetails ? (
        <div className={styles.ProductDetailsSection}>
          <ProductHeading productdetails={productdetails} />
          <MainProductDetails productdetails={productdetails} />
          <section className={styles.descriptionSection}>
            <div className={styles.headingContainer}>
              <h3>DESCRIPTION</h3>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              et voluptate iste aperiam nisi laudantium ab reiciendis culpa,
              esse soluta quis perspiciatis saepe magni omnis, laboriosam
              deleniti, harum expedita totam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Culpa amet nesciunt recusandae
              doloribus similique consectetur eveniet quia inventore odio! Sint
              dicta corporis facilis magnam quia facere, consectetur illum vitae
              ratione?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Odio laudantium odit exercitationem doloribus vel, ratione libero
              reprehenderit aliquam repellendus ad quaerat non quas fuga tempore
              sed natus sit porro voluptate.
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consequatur eum a vel deserunt reprehenderit, quae molestias
              dolorem pariatur quaerat corporis quasi maxime nulla consectetur
              unde! Animi, veritatis enim. Perferendis? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Facere dolores reprehenderit,
              perspiciatis architecto id amet at aliquam qui aut quia odit
              aperiam suscipit ut reiciendis sapiente, nihil eum sint ipsa.
            </p>
          </section>
        </div>
      ) : null}

      <Footer />
    </>
  );
}
