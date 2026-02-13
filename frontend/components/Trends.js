import styles from "../styles/Trends.module.css"


function Trends() {
    return(
        <div className={styles.body}>
            <h2 className={styles.titre}>
                Trends
            </h2>
            <div className={styles.container}>
                <div className={styles.trends}>
                    <p className={styles.trendName}>#hackatweet</p>
                    <p className={styles.nbTrend}>2 Tweets</p>
                </div>
                <div className={styles.trends}>
                    <p className={styles.trendName}>#first</p>
                    <p className={styles.nbTrend}>1 Tweet</p>
                </div>
            </div>
        </div>
    );
}

export default Trends;