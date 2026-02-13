import styles from "../styles/Feed.module.css"
import Tweet from "./Tweet"
import { useEffect, useState } from "react";


function Feed() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3000/tweets/getTweets")
        .then(res => res.json())
        .then(data => {console.log(data); setTweets(data.tweets)});
    });

    function getTimeDifference(dateString) {
        const now = new Date();
        const pastDate = new Date(dateString);

        const diffInMs = now - pastDate;

        const diffInSeconds = Math.floor(diffInMs / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} secondes`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);

        return `${diffInHours} hours`;
}



    return (
        <div className={styles.feed}>
            {tweets.map((tweet) => (
                <Tweet
                    firstname={tweet.firstname}
                    username={tweet.username}
                    content={tweet.content}
                    nbLike={tweet.nbLike}
                    date={getTimeDifference(tweet.date)}
                />
            ))}
        </div>
    );
}
export default Feed;