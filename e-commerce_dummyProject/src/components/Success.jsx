import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Success.module.css";

export default function Success() {
  const navigate = useNavigate();

  function handleClickReturnToHomepage() {
    navigate("/home");
  }

  return (
    <>
      <div className={styles.mainConatiner}>
        <div className={styles.mainConatiner__headingContent}>
          <FontAwesomeIcon
            className={styles.successIcon}
            icon={faCircleCheck}
          />
          <h2>Payment Successful</h2>
          <p>Thank you for your purchase!</p>
        </div>
        <div className={styles.mainConatiner__orderDetails}>
          <p>
            <div>Amount Paid:</div>
            <span>Random for now</span>
          </p>
          <p>
            <div>Date & Time:</div>
            <span>Random for now</span>
          </p>
          <p>
            <div>Reference Number:</div>
            <span>Random for now</span>
          </p>
        </div>
        <div className={styles.returnToHomepage}>
          <button
            onClick={handleClickReturnToHomepage}
            className={styles.returnToHomepage__btn}
          >
            <p>Return to Homepage</p>
          </button>
        </div>
      </div>
    </>
  );
}
