import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import React from "react";
import { setProductsData } from "../store/shopping-cart.jsx";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannersabovefooter1 from "./Bannersabovefooter1";
import Bannersabovefooter2 from "./Bannersabovefooter2";
import ProductCard from "./ProductCard.jsx";
import data from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products() {
  const settings = {
    dots: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    infinite: true,
    autoplay: false,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1194,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1018,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 985,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  const [products, setProducts] = useState([]);
  const [productsNew, setProductsNew] = useState([]);
  const [isHoveringProductId, setIsHoveringProductId] = useState(0);

  const name = useSelector((state) => state.notify.name);

  function notification(newCount) {
    toast.success(`${newCount} x "${name}" has been added to your cart.`, {
      position: "bottom-right",
      theme: "colored",
      hideProgressBar: true,
      icon: false,
    });
  }

  function handleMouseEnter(id) {
    setIsHoveringProductId(id);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching function called");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        dispatch(setProductsData(result));
        const limitedData = result.slice(12, 18);
        const limitedData2 = result.slice(1, 11);
        setProductsNew(limitedData2);
        setProducts(limitedData);
      } catch (error) {
        console.log("Error came in fetching the product", error);
      }
    };

    fetchProducts();
  }, []);

  const singleObject = products.length && products[4];

  return (
    <>
      <div className={styles.products_section}>
        <div className={styles.singleProduct}>
          <p className={styles.deal}>
            Deals of the <strong>week!</strong>
          </p>
          <p className={styles.dealpara}>Remains until the end of the offer</p>
          <img src={singleObject.image} alt="imageofproduct"></img>
          <p className={styles.price}>${singleObject.price}</p>
          <p className={styles.titlesingleproduct}>{singleObject.title}</p>
          <p className={styles.instock}>IN STOCK</p>
          <p>{singleObject.rating?.rate}</p>
          <p className={styles.dealpara2}>
            AVAILABLE:{" "}
            <span className={styles.count}> {singleObject.rating?.count}</span>
          </p>

          <div className={styles.progress_container}>
            <div className={styles.progressbar}></div>
            <div className={styles.progressbar_progressed}></div>
          </div>
        </div>

        <div className={styles.products}>
          {products.map((product) => {
            return (
              <>
                <ProductCard
                  notifyy={notification}
                  productimage={product.image}
                  productid={product.id}
                  producttitle={product.title}
                  productratingrate={product.rating.rate}
                  productprice={product.price}
                />
              </>
            );
          })}
        </div>
      </div>

      <div className={styles.bannerscontainer}>
        {data.bannerimage.map((item) => (
          <>
            <div className={styles.banners}>
              <img
                src={item.image}
                className={styles.banners_img}
                alt="banner"
              ></img>
              <div className={styles.banners__text}>
                <p className={styles.banners__discount}>{item.p1}</p>
                <p className={styles.banners__title}>
                  <strong>{item.p2}</strong>
                </p>
                <p className={styles.banners__aboutdiscount}>{item.p3}</p>
                <button className={styles.banners__shopnowbtn2}>
                  Shop now
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      <section className={styles.bestsellers}>
        <div className={styles.bestsellers__headingcontainer}>
          <div>
            <h3 className={styles.bestsellers__heading}>BEST SELLERS</h3>
            <p className={styles.bestsellers__desc}>
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <button className={styles.bestsellers__viewallbtn}>View All</button>
        </div>

        <div>
          <Slider {...settings} className={styles.bestsellers__carousel}>
            {productsNew.map((productnew) => {
              return (
                <>
                  <div className={styles.bestsellers__productcard}>
                    <div className={styles.image_container}>
                      <img src={productnew.image} alt="img" />
                    </div>
                    <p className={styles.title}>{productnew.category}</p>
                    <p className={styles.instock}>IN STOCK</p>
                    <p className={styles.rating}>{productnew.rating.rate}</p>
                    <p className={styles.price}>${productnew.price}</p>
                    <div className={styles.bestsellers__addtocartbtnContainer}>
                      <button className={styles.bestsellers__addtocartbtn}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>

      <div className={styles.savingpara}>
        <p>
          <strong>SAVE AN EXTRA 5-10% ON EVERY AUTOSHIP ORDER!</strong>
        </p>
      </div>

      <div className={styles.productsNew}>
        {productsNew.map((product) => {
          return (
            <>
              <ProductCard
                notifyy={notification}
                productimage={product.image}
                productid={product.id}
                producttitle={product.title}
                productratingrate={product.rating.rate}
                productprice={product.price}
              />
            </>
          );
        })}
      </div>

      <div className={styles.bannersabovefooter1}>
        <Bannersabovefooter1
          image="bacola-banner-05.webp"
          discount="WEEKEND DISCOUNT 20%"
          title="NATURAL EGGS"
          description="Eat one everyday"
        />
        <Bannersabovefooter1
          image="bacola-banner-06.webp"
          discount="WEEKEND DISCOUNT 40%"
          title="TASTE THE BEST"
          description="Shine the morning"
        />
        <Bannersabovefooter1
          image="bacola-banner-10.jpg"
          discount="WEEKEND DISCOUNT 60%"
          title="DITCH THE JUNK"
          description="Breakfast made better"
        />
      </div>
      <div className={styles.bannersabovefooter2}>
        <Bannersabovefooter2
          image="blog-3.webp"
          category="TIPS & TRICKS"
          title="But I must explain to you how all this mistaken idea"
          date="27 September 2024"
        />
        <Bannersabovefooter2
          image="blog-5.webp"
          category="GROCERY"
          title="The Problem With Typefaces on the Web"
          date="27 September 2024"
        />
        <Bannersabovefooter2
          image="blog-1.webp"
          category="GROCERY"
          title="English Brakfast Tea With Tasty Donut Desserts"
          date="27 September 2024"
        />
      </div>
      <ToastContainer className={styles.toast} />
    </>
  );
}
