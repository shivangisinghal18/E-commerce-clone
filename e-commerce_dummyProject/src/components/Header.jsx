import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";
import styles from "./Header.module.css";

export default function Header() {
  const count = useSelector((state) => state.count.counter);
  const navigate = useNavigate();
  function navigateToCart() {
    navigate("/cart");
  }

  const [hoverid, setHoverid] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [enterid, setEnterid] = useState(0);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  function handleHamburgerClick() {
    setHamburgerClicked((clicked) => !clicked);
  }

  function handleClick() {
    setClicked((clicking) => !clicking);
  }

  function handleEntered(id) {
    setEnterid(1);
  }

  function handleMouseEnter(id) {
    setHoverid(id);
  }
  function handleListItemClicked(id) {
    setEnterid(id);
  }

  return (
    <>
      <div
        className={
          hamburgerClicked === true ? styles.active : styles.hamburgermenu
        }
      >
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src="./bacola-logo.webp" alt="logo"></img>
          </div>
          <div onClick={handleHamburgerClick}>
            <FontAwesomeIcon
              className={styles.closebtnicon}
              icon={faCircleXmark}
            />
          </div>
        </div>

        <div className={styles.locationbtnham}>
          <label for="location">
            <p className={styles.locationdesc}>Your Location</p>
            <p className={styles.locationselect}>Select a Location</p>
          </label>
          <select id="location" className={styles.location}></select>
        </div>

        <div>
          <div className={styles.allcatbtnContainer}>
            {" "}
            <button onClick={handleClick} className={styles.allcatbtn}>
              {" "}
              ALL CATEGORIES
            </button>
          </div>

          {clicked ? (
            <div className={styles.homelistham}>
              {data?.categoryList?.map((listItem) => (
                <>
                  <p onClick={() => handleListItemClicked(listItem.id)}>
                    {listItem.name}
                    {enterid === listItem.id &&
                    (listItem.id === "1" || listItem.id === "4") ? (
                      <>
                        <span className={styles.gt}>&gt;</span>
                        <div className={styles.homelistham__listinsideist}>
                          {data?.categoryListInsideList?.map((listItem) => (
                            <p>{listItem.name}</p>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </p>
                </>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.allCategories__nav}>
          <p className={styles.sitenav}>Site Navigation</p>
          <hr></hr>

          <div className={styles.home}>
            <div className={styles.dropdowns}>
              <span onClick={() => handleMouseEnter(1)}>HOME</span>
              <span>
                <FontAwesomeIcon
                  onClick={() => handleMouseEnter(0)}
                  classname={styles.dropdownicon}
                  icon={faCircleChevronDown}
                />
              </span>
            </div>
          </div>
          {hoverid === 1 ? (
            <>
              <div
                onMouseLeave={() => handleMouseEnter(0)}
                onMouseEnter={() => handleEntered(1)}
                className={styles.homelistham}
              >
                {data?.homeList?.map((listItem) => (
                  <p>{listItem.name}</p>
                ))}
              </div>
            </>
          ) : null}

          <hr></hr>

          <div className={[styles.menus, styles.shop].join(" ")}>
            <div className={styles.dropdowns}>
              <span onClick={() => handleMouseEnter(2)}>SHOP</span>
              <span>
                <FontAwesomeIcon
                  onClick={() => handleMouseEnter(0)}
                  classname={styles.dropdownicon}
                  icon={faCircleChevronDown}
                />
              </span>
            </div>
          </div>

          {hoverid === 2 ? (
            <>
              <div className={styles.homelistham}>
                <div className={styles.shoplist_content}>
                  {data?.shops.map((listItem) => (
                    <>
                      <h3 onClick={() => handleListItemClicked(listItem.id)}>
                        {listItem.name}
                      </h3>
                      {enterid === listItem.id ? (
                        <>
                          <div className={styles.homelistham}>
                            {data?.shopList?.map((listItem) => (
                              <p>{listItem.name}</p>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          <hr></hr>
          <div className={styles.menus}>MEATS & SEAFOOD</div>
          <hr></hr>
          <div className={styles.menus}>BAKERY</div>
          <hr></hr>
          <div className={styles.menus}>BEVERAGES</div>
          <hr></hr>
          <div className={styles.menus}>BLOG</div>
          <hr></hr>
          <div className={styles.menus}>CONTACT</div>
          <hr></hr>
        </div>
      </div>

      <header className={styles.header}>
        <div
          onClick={handleHamburgerClick}
          className={
            hamburgerClicked === true ? styles.overlayactive : styles.overlay
          }
        ></div>

        <div className={styles.disclaimer}>
          <p>
            {" "}
            Due to the <strong>COVID 19</strong> epidemic, orders may be
            processed with a slight delay{" "}
          </p>
        </div>
        <nav className={styles.navbar}>
          <span className={styles.navbar__navigation}>
            <span>About Us </span>
            <span>My Account </span>
            <span>Wishlist </span>
            <span>Order Tracking</span>
          </span>
          <span className={styles.navbar__info}>
            <span>100% Secure delivery without contacting the courier</span>
            <span className={styles.separator}>|</span>
            <span>Need help? Call Us: + 0020 500</span>
            <span className={styles.separator}>|</span>
            <span>English </span>
            <span>USD</span>
          </span>
        </nav>
        <hr></hr>

        <div className={styles.aboutStore}>
          <div className={styles.hamburgericon} onClick={handleHamburgerClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={styles.logo}>
            <img src="./bacola-logo.webp" alt="logo"></img>
            <p>Online Grocery Shopping Center</p>
          </div>
          <div className={styles.locationbtn}>
            <label for="location">
              <p className={styles.locationdesc}>Your Location</p>
              <p className={styles.locationselect}>Select a Location</p>
            </label>
            <select id="location" className={styles.location}></select>
          </div>

          <div className={styles.searchinputcontainer}>
            <input
              className={styles.searchinput}
              type="text"
              placeholder="Search for product"
            ></input>
            <div className={styles.searchiconcontainer}>
              <img src="icons8-search-30.png" alt="searchicon"></img>
            </div>
          </div>

          <div className={styles.icons}>
            <span>
              <FontAwesomeIcon className={styles.user} icon={faCircleUser} />
            </span>
            <span>
              <p className={styles.icon}>$0.00</p>
            </span>
            <span onClick={navigateToCart} className={styles.iconlast}>
              <div className={styles.count}>{count}</div>
              <FontAwesomeIcon
                className={styles.iconlast__icon}
                icon={faBagShopping}
              />
            </span>
          </div>
        </div>

        <div className={styles.allCategories}>
          <div onClick={handleClick}>
            {clicked ? (
              <div className={styles.allCategories__list}>
                <p
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseEnter(0)}
                >
                  {hoverid === 3 ? (
                    <div className={styles.allCategories__listinsideist}>
                      {data?.categoryListInsideList?.map((listItem) => (
                        <p>{listItem.name}</p>
                      ))}
                    </div>
                  ) : null}
                  Fruits & Vegetables <span className={styles.gt}>&gt;</span>
                </p>
                <p>Meats & Seafood</p>
                <p>Breakfast & Dairy</p>
                <p
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseEnter(0)}
                >
                  {hoverid === 4 ? (
                    <div className={styles.allCategories__listinsideist}>
                      {data?.categoryListInsideList?.map((listItem) => (
                        <p> {listItem.name}</p>
                      ))}
                    </div>
                  ) : null}
                  Beverages <span className={styles.gt}>&gt;</span>
                </p>
                <p>Breads and bakery</p>
                <p>Frozen Foods</p>
                <p>Biscuits & Snacks</p>
                <p>Grocery & Staples</p>
                <hr></hr>
                <p>Value of the Day</p>
                <p>Top 100 Offers</p>
                <p>New Arrivals</p>
              </div>
            ) : null}

            <div>
              {" "}
              <button className={styles.allcatbtn}> ALL CATEGORIES</button>
            </div>
            <div>
              {" "}
              <button className={styles.productsnum}>TOTAL 63 PRODUCTS</button>
            </div>
          </div>

          <div className={styles.allCategories__nav}>
            <div
              className={styles.home}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              {hoverid === 1 ? (
                <>
                  <div
                    onMouseLeave={() => handleMouseEnter(0)}
                    onMouseEnter={() => handleEntered(1)}
                    className={styles.homelist}
                  >
                    {data?.homeList?.map((listItem) => (
                      <p>{listItem.name}</p>
                    ))}
                  </div>
                </>
              ) : null}
              <p>HOME</p>
            </div>

            <div
              className={[styles.menus, styles.shop].join(" ")}
              onMouseEnter={() => handleMouseEnter(2)}
            >
              {hoverid === 2 ? (
                <>
                  <div
                    onMouseLeave={() => handleMouseEnter(0)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    className={styles.shoplist}
                  >
                    <div className={styles.shoplist_content}>
                      {data?.shopList?.map((listItem) => (
                        <>
                          <h3>{listItem.heading}</h3>
                          <p>{listItem.name}</p>
                        </>
                      ))}
                    </div>
                    <div className={styles.shoplist_content}>
                      {data?.shopList?.map((listItem) => (
                        <>
                          <h3>{listItem.heading}</h3>
                          <p>{listItem.name}</p>
                        </>
                      ))}
                    </div>
                    <div className={styles.shoplist_content}>
                      {data?.shopList?.map((listItem) => (
                        <>
                          <h3>{listItem.heading}</h3>
                          <p>{listItem.name}</p>
                        </>
                      ))}
                    </div>
                    <div className={styles.shoplist_content}>
                      {data?.shopList?.map((listItem) => (
                        <>
                          <h3>{listItem.heading}</h3>
                          <p>{listItem.name}</p>
                        </>
                      ))}
                    </div>
                    <div className={styles.shoplist_content}>
                      {data?.shopList?.map((listItem) => (
                        <div>
                          <h3>{listItem.heading}</h3>
                          <p>{listItem.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : null}

              <p>SHOP</p>
            </div>
            <div className={styles.menus}>
              <p>MEATS & SEAFOOD</p>
            </div>
            <div className={styles.menus}>
              <p>BAKERY</p>
            </div>
            <div className={styles.menus}>
              <p>BEVERAGES</p>
            </div>
            <div className={styles.menus}>
              <p>BLOG</p>
            </div>
            <div className={styles.menus}>
              <p>CONTACT</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
