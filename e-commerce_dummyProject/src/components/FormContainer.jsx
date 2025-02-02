import { useState } from "react";
import styles from "./FormContainer.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function FormContainer() {
  const navigate = useNavigate();
  const [sliderBtnSelected, setSliderBtnSelected] = useState("login");

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
    setSliderBtnSelected("register");
  };
  const previous = () => {
    sliderRef.slickPrev();
    setSliderBtnSelected("login");
  };

  const settings = {
    dots: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    infinite: false,
    autoplay: false,
    draggable: false,
    arrows: false,
  };

  const notify = () =>
    toast.success("Registration Successful!", {
      position: "top-center",
    });

  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  const [errorMessage4, setErrorMessage4] = useState("");
  const [errorMessage5, setErrorMessage5] = useState("");
  const [errorMessage6, setErrorMessage6] = useState("");

  const [checkClicked, setCheckClicked] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  function handleCheckClick() {
    setCheckClicked((clicked) => !clicked);
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let disabledsubmit = true;
  if (
    firstName.length > 0 &&
    lastName.length > 0 &&
    mobile.length > 0 &&
    email.length > 0 &&
    password.length > 0
  ) {
    disabledsubmit = false;
  }

  const validatename = (name) => {
    const nameRegex = /^[A-Za-z]{2,}$/;
    return nameRegex.test(name);
  };

  const validatenumber = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (
      validatename(firstName) &&
      validatename(lastName) &&
      validatenumber(mobile) &&
      validateEmail(email) &&
      validatePassword(password) &&
      checkClicked &&
      timesClicked === 0
    ) {
      notify();
      setTimesClicked(() => 1);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
    if (validatename(firstName) === false) {
      setErrorMessage1(
        "Name should contain only letters and minimum of 2 letters"
      );
    }
    if (validatename(lastName) === false) {
      setErrorMessage2(
        "Name should contain only letters and minimum of 2 letters"
      );
    }
    if (validatenumber(mobile) === false) {
      setErrorMessage3("Phone number should contain only 10 digits.");
    }
    if (validateEmail(email) === false) {
      setErrorMessage4(
        <>
          <p>Email address should contain "@"</p>
          <p>There should be a "." after "@"</p>
        </>
      );
    }
    if (validatePassword(password) === false) {
      setErrorMessage5(
        <>
          <p>Password should be atleast 8 characters long.</p>
          <p>It should contain atleast one special character : "!@#$%^&*"</p>
        </>
      );
    }
    if (checkClicked === false) {
      setErrorMessage6("Tick the checkbox.");
    }
  }

  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <div style={{ textAlign: "center" }}>
          <button
            className={
              sliderBtnSelected === "login"
                ? styles.sliderbtns
                : styles.sliderInactiveBtn
            }
            onClick={previous}
          >
            <h2>LOGIN</h2>
          </button>
          <button
            className={
              sliderBtnSelected === "register"
                ? styles.sliderbtns
                : styles.sliderInactiveBtn
            }
            onClick={next}
          >
            <h2>REGISTER</h2>
          </button>
        </div>

        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div>
            <form
              className={styles.formContainer__contentContainer}
              onSubmit={handleSubmit}
            >
              <label className={styles.label} for="email">
                Username or email address *
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label className={styles.label} for="password">
                Password *
              </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <span>
                <input
                  type="checkbox"
                  onClick={handleCheckClick}
                  required
                ></input>
                <span>Remember me</span>
              </span>
              {errorMessage6 !== "" ? (
                <p className={styles.errormessage}>{errorMessage6}</p>
              ) : null}

              <button
                className={
                  disabledsubmit
                    ? styles.registerActive
                    : styles.formContainer__submit
                }
                type="submit"
                disabled={disabledsubmit}
              >
                Login
              </button>
            </form>
          </div>

          <div>
            <form
              className={styles.formContainer__contentContainer}
              onSubmit={handleSubmit}
            >
              <label className={styles.label} for="firstName">
                First Name *
              </label>
              <input
                className={styles.input}
                id="firstName"
                type="text"
                required
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              {errorMessage1 !== "" ? (
                <p className={styles.errormessage}>{errorMessage1}</p>
              ) : null}
              <label className={styles.label} for="lastName">
                Last Name *
              </label>
              <input
                className={styles.input}
                id="lastName"
                type="text"
                required
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              {errorMessage2 ? (
                <p className={styles.errormessage}>{errorMessage2}</p>
              ) : null}
              <label className={styles.label} for="phoneNumber">
                Phone Number *
              </label>
              <input
                className={styles.input}
                id="phoneNumber"
                type="number"
                required
                onChange={(e) => setMobile(e.target.value)}
              ></input>
              {errorMessage3 ? (
                <p className={styles.errormessage}>{errorMessage3}</p>
              ) : null}
              <label className={styles.label} for="email">
                Email *
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {errorMessage4 ? (
                <p className={styles.errormessage}>{errorMessage4}</p>
              ) : null}
              <label className={styles.label} for="password">
                Password *
              </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {errorMessage5 ? (
                <p className={styles.errormessage}>{errorMessage5}</p>
              ) : null}
              <span>
                <input
                  type="checkbox"
                  onClick={handleCheckClick}
                  required
                ></input>
                <span>I agree to terms and conditions.</span>
              </span>
              {errorMessage6 ? (
                <p className={styles.errormessage}>{errorMessage6}</p>
              ) : null}

              <button
                className={
                  disabledsubmit
                    ? styles.registerActive
                    : styles.formContainer__submit
                }
                type="submit"
                disabled={disabledsubmit}
              >
                Register
              </button>
            </form>
          </div>
        </Slider>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
