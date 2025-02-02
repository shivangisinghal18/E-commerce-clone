import Styles from "./ProductHeading.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function ProductHeading(props) {
  const productdetails = props.productdetails;
  return (
    <>
      <div className={Styles.headingmaincontainer}>
        <div className={Styles.titles}>
          <div>
            Home{" "}
            <span className={Styles.sidearrows}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>{" "}
            {}
          </div>
          <div>
            {productdetails.category}
            <span className={Styles.sidearrows}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            {}
          </div>
          <span className={Styles.name}>{productdetails.title}</span>
        </div>

        <div className={Styles.icons}>
          <FontAwesomeIcon icon={faChevronRight} />
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </div>
    </>
  );
}
