import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productwiseCount, counterActions } from "../store/shopping-cart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cartt.cartitems);
  const productCounts = useSelector((state) =>
    cartitems.reduce((counts, item) => {
      counts[item.productid] =
        state.productWiseCount.product[item.productid] || 0;
      return counts;
    }, {})
  );

  const makePayment = async () => {
    try {
      const response = await fetch(
        "http://localhost:4242/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartitems }),
        }
      );

      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  let total = cartitems.reduce((subtotal, item) => {
    subtotal += productCounts[item.productid] * item.productprice;
    return subtotal;
  }, 0);

  let progressedPercentage = (total / 1000) * 100;

  function handleIncrementClick(productId) {
    dispatch(productwiseCount.increment(productId));
    dispatch(counterActions.increment(1));
  }

  function handleDecrementClick(productId) {
    cartitems.map((item) => {
      if (productId === item.productid) {
        if (productCounts[productId] > 0) {
          dispatch(counterActions.decrement(1));
          dispatch(productwiseCount.decrement(productId));
        }
      }
    });
  }

  console.log("cartitems: ", cartitems);

  const MAX_MOBILE_WIDTH = 600;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width > MAX_MOBILE_WIDTH;

  return (
    <>
      <Header />
      <hr></hr>
      <div className={styles.heading}>
        <p>HOME</p>
        <p className={styles.heading__para_color_grey}>&gt;</p>
        <p className={styles.heading__para_color_grey}>CART</p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.temp}>
          <div className={styles.addItem}>
            {progressedPercentage < 100 ? (
              <p>Add price to cart and get free shipping!</p>
            ) : (
              <p>Your order qualifies for free shipping!</p>
            )}
            <div className={styles.addItem__progressBar}>
              <div
                className={styles.addItem__progressed}
                style={
                  progressedPercentage < 100
                    ? {
                        width: `${progressedPercentage}%`,
                        backgroundColor: `#ED174A`,
                      }
                    : { width: `100%`, backgroundColor: `#00B853` }
                }
              ></div>
            </div>
            <div className={styles.progressBar}></div>
          </div>

          <div className={styles.itemsInCart}>
            <table className={styles.Table}>
              <tr className={styles.titleRow}>
                <td className={styles.titleRow__firstCol}>Product</td>
                {isMobile ? (
                  <td className={styles.titleRow__cols}>Price</td>
                ) : null}
                <td className={styles.titleRow__cols}>Quantity</td>
                {isMobile ? (
                  <td className={styles.titleRow__cols}>Subtotal</td>
                ) : null}
              </tr>
              {cartitems.map((item, index) => (
                <tr key={index} className={styles.itemsRow}>
                  <td className={styles.productImageContainer}>
                    <img src={item.productimage} alt="product_image"></img>
                    <p> {item.producttitle}</p>
                  </td>
                  {isMobile ? (
                    <td className={styles.price}>${item.productprice}</td>
                  ) : null}
                  <td>
                    <div className={styles.quantity}>
                      <button
                        className={styles.countOfProducts}
                        onClick={() => handleDecrementClick(item.productid)}
                      >
                        -
                      </button>
                      <p>{productCounts[item.productid]}</p>
                      <button
                        className={styles.countOfProducts}
                        onClick={() => handleIncrementClick(item.productid)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  {isMobile ? (
                    <td>
                      ${productCounts[item.productid] * item.productprice}
                    </td>
                  ) : null}
                </tr>
              ))}
            </table>
          </div>
        </div>

        <div className={styles.pricebox}>
          <div className={styles.pricebox__heading}>CART TOTALS</div>

          <div className={styles.priceboxitem}>
            <div>Subtotal</div>
            <div>${total}</div>
          </div>
          <div className={styles.priceboxitem}>
            <div>Shipping</div>
            <div className={styles.shippingDetails}>
              <div className={styles.localPickup}>
                <p>
                  {progressedPercentage < 100 ? (
                    <>
                      Flat Rate: <span className={styles.flatRate}>$5.00</span>
                    </>
                  ) : (
                    <>Free Shipping</>
                  )}
                </p>
                <span>
                  <input
                    className={styles.input}
                    type="radio"
                    defaultChecked
                  ></input>
                </span>
              </div>
              <div className={styles.localPickup}>
                <p>Local pickup</p>
                <span>
                  <input className={styles.input} type="radio"></input>
                </span>
              </div>
              <div>Shipping to al</div>
              <div>Change address</div>
            </div>
          </div>
          <div className={styles.priceboxitem}>
            <div>Total</div>
            {progressedPercentage < 100 ? (
              <div>${total + 5}</div>
            ) : (
              <div>${total}</div>
            )}
          </div>
          <div className={styles.checkoutbuttonbox}>
            <button
              onClick={makePayment}
              type="submit"
              className={styles.checkoutbutton}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
