import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/shopping-cart.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import styles from "./MainProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";

export default function MainProductDetails(props) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  function handleClickIncrement(productId) {
    if (productId === productdetails.id) {
      setCount(count + 1);
      dispatch(counterActions.increment(1));
    }
  }
  function handleClickDecrement(productId) {
    if (productId === productdetails.id) {
      if (count > 0) {
        setCount(count - 1);
        dispatch(counterActions.decrement(1));
      }
    }
  }
  useEffect(() => {
    if (count > 0) {
      toast.success(
        `${count} x "${productdetails.title}" has been added to your cart.`,
        {
          position: "bottom-right",
          theme: "colored",
          hideProgressBar: true,
          icon: false,
        }
      );
    }
  }, [count]);

  const productdetails = props.productdetails;
  console.log(productdetails);

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.upperpart}>
          <div className={styles.productName}>
            <strong>{productdetails.title}</strong>
          </div>
          <div className={styles.descContainer}>
            <div className={styles.productBrand}>Brand:</div>
            <div> Welch's</div>
            <div className={styles.separator}></div>
            <div className={styles.productBrand}>1 review</div>
            <div className={styles.separator}></div>
            <div className={styles.productBrand}>SKU: </div>
            <div>ZU49VOR</div>
          </div>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.imagesection}>
            <div className={styles.imageContainer}>
              <img src={productdetails.image} alt="product-image"></img>
            </div>
          </div>
          <div className={styles.dessection}>
            <div className={styles.price}>${productdetails.price}</div>
            <div className={styles.instock}>IN STOCK</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, porro nesciunt placeat earum ipsa odit nobis tempora
              dicta, cum sed, alias facere ullam vero.
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.countOfProducts}
                onClick={() => handleClickDecrement(productdetails.id)}
              >
                -
              </button>
              <p>{count}</p>
              <button
                className={styles.countOfProducts}
                onClick={() => handleClickIncrement(productdetails.id)}
              >
                +
              </button>
              <button className={styles.addToCartBtn}>Add to cart</button>
            </div>
            <div className={styles.wishlistBtnContainer}>
              <button className={styles.wishlistBtn}>
                <FontAwesomeIcon icon={faHeart} />
                <span>ADD TO WISHLIST</span>
              </button>
              <button className={styles.compareBtn}>
                <FontAwesomeIcon icon={faCodeCompare} />
                <span>COMPARE</span>
              </button>
            </div>
            <div className={styles.desc}>
              <div className={styles.descItem}>
                <FontAwesomeIcon className={styles.tick} icon={faCheck} />
                <p>Type: Organic</p>
              </div>
              <div className={styles.descItem}>
                <FontAwesomeIcon className={styles.tick} icon={faCheck} />
                <p>MFG: Jun 4,2021</p>
              </div>
              <div className={styles.descItem}>
                <FontAwesomeIcon className={styles.tick} icon={faCheck} />
                <p>LIFE: 30 days</p>
              </div>
            </div>
            <hr></hr>
            <div className={styles.extrainfo}>
              <p className={styles.extrainfo__para}>
                Category:
                <span> {productdetails.category}</span>
              </p>
              <p className={styles.extrainfo__para}>
                Tags:
                <span> electronics, natural, organic</span>
              </p>
            </div>
          </div>
          <div className={styles.infosection}>
            <div className={styles.warning}>
              Covid-19 Info: We keep delivering.
            </div>
            <div className={styles.benefits}>
              <p>
                <FontAwesomeIcon icon={faTruckFast} />
                <span>Free Shipping apply to all orders over $100</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCow} />
                <span>Guranteed 100% Organic from natural farms</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
                <span>1 Day Returns if you change your mind</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className={styles.toast} />
    </>
  );
}
