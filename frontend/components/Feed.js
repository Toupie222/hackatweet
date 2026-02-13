import styles from "../styles/Feed.module.css"
import Tweet from "./Tweet"

function Feed() {
    return(
        <div className={styles.feed}>
            <Tweet username="Antoine" mail="@AntoineLeProf" date="5" content="Welcome to #hackatweet test #first"/>
        </div>
    );
}

export default Feed;