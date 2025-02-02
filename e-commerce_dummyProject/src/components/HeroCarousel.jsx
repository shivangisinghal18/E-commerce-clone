import styles from "./HeroCarousel.module.css";
import "./Arrows.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";

export default function HeroCarousel() {
  const settings = {
    dots: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    infinite: true,
    autoplay: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.slider}>
        <Slider {...settings}>
          {data.heroCarousel.map((id) => (
            <div key={id} className={styles.imagecontainer}>
              <img
                className={styles.imagecontainer__image}
                src={id.src}
                alt="slider-background-image"
              ></img>

              <div className={styles.imagecontainer__text}>
                <p className={styles.imagecontainer__text_size_s}>
                  Exclusive offer{" "}
                  <span className={styles.offbtn}>-20% OFF</span>
                </p>
                <h2>A different kind of grocery store</h2>
                <p className={styles.imagecontainer__text_size_s}>
                  Only this week. Don't miss...
                </p>
                <span className={styles.imagecontainer__text_size_s}>
                  from{" "}
                </span>
                <span className={styles.price}>$7.86</span>
                <div>
                  <button className={styles.shopnowbtn}>Shop now</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
