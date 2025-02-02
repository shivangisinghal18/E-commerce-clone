import styles from "./Bannersabovefooter1.module.css";

export default function Bannersabovefooter1({image, discount, title, description}){
    return(
        <>
        <div className={styles.bannerContainer}>
            <div className={styles.imagecontainer}>
            <img src={image} alt="background-image"></img>
            </div>
            <div className={styles.bannercontent}>
            <p className={styles.discount}>{discount}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <button className={styles.shopnowbtn}>Shop now</button>
            </div>
        </div>
        </>
    )
}