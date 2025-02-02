import styles from "./Bannersabovefooter2.module.css";

export default function Bannersabovefooter2({image, category, title, date}){
    return(
        <>
        <div className={styles.bannerContainer}>
            <div className={styles.imagecontainer}>
            <img src={image} alt="background-image"></img>
            </div>
            <div className={styles.bannercontent}>
            <p className={styles.category}>{category}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>
                <span className={styles.description__date}>{date}</span>
                 <span className={styles.description__comments}>3 comments </span>
                 <span className={styles.description__by}>by</span>
                 <span className={styles.description__name}> Bacola</span></p>
            </div>
        </div>
        </>
    )
}