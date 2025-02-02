import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import data from "./data.json";
export default function Footer() {
  const [categories, setCategories] = useState([]);
  const [productsOfCategories, setproductsOfCategories] = useState([]);

  const fetchProducts = async () => {
    console.log("Fetching function called");
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const result = await response.json();
      setproductsOfCategories(result);
      console.log("result is:", result);
    } catch (error) {
      console.log("Error came in fetching the product", error);
    }
  };

  const fetchProductsnew = async () => {
    console.log("Fetching function called");
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      setCategories(result);
      console.log("result is:", result);
    } catch (error) {
      console.log("Error came in fetching the product", error);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchProductsnew();
  }, []);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_content}>
            {data.footerdescriptions.map((item) => (
              <p className={styles[item.class]}>{item.item}</p>
            ))}

            <div className={styles.email}>
              <i></i>
              <input
                className={styles.email_input}
                type="email"
                placeholder="Your email address"
              ></input>
              <button className={styles.email_subscribe}>Subscribe</button>
            </div>
          </div>

          <div className={styles.footer_img}>
            <img src="./coupon.webp" alt="coupon" />
          </div>
        </div>
      </div>
      <div className={styles.footer_links}>
        <nav className={styles.footer_nav}>
          <span>Everyday fresh product </span>
          <span className={styles.separator}></span>
          <span>Free delivery for order over $70 </span>
          <span className={styles.separator}></span>
          <span>Daily Mega Discounts </span>
          <span className={styles.separator}></span>
          <span>Best price on the market</span>
        </nav>

        <div className={styles.horizontal}></div>

        <div className={styles.footerCategories}>
          {categories.map((category, index) => {
            return (
              <>
                <div className={styles.categories} key={index}>
                  {category}
                  <div>
                    {productsOfCategories.map((productOfCategories) => {
                      return (
                        <>
                          <div className={styles.productsOfCategories}>
                            <p>{productOfCategories.title}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.footermargin}>
        <div className={styles.contact}>
          <div className={styles.icon_container}>
            <img src="call.png" alt="calling"></img>
          </div>
          <div className={styles.contactdetails}>
            <p className={styles.contactdetails__number}>8 800 555-55</p>
            <p className={styles.contactdetails__timings}>
              Working 8:00 - 22:00
            </p>
          </div>
          <div className={styles.connect}>
            <p className={styles.connect__download}>Download App on Mobile: </p>
            <p className={styles.contactdetails__timings}>
              15% discount on your first purchase
            </p>
          </div>
          <img
            className={styles.sourceimg1}
            src="google-play.png"
            alt="google-play"
          ></img>
          <img
            className={styles.sourceimg}
            src="applestore.png"
            alt="apple-store"
          ></img>
        </div>
        <div className={styles.horizontal2}></div>
        <div className={styles.copyright}>
          <p className={styles.para1}>
            Copyright 2024 © Bacola WordPress Theme. All rights reserved.
            Powered by KlbTheme.
          </p>
          <p className={styles.para2}>Privacy Policy</p>
          <p className={styles.para3}>Terms and Conditions</p>
          <p className={styles.para4}>Cookie</p>
        </div>
      </div>
    </>
  );
}
