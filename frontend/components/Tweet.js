import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import styles from "../styles/Tweet.module.css"

function Tweet(props) {
    const [liked, setLiked] = useState(false);
    const [nbOfLike, setNbOfLike] = useState(props.nbLike)

    const like = () => {
        setLiked(!liked)
        if (!liked)
        {
            setNbOfLike(nbOfLike + 1);
        }
        else
        {
            setNbOfLike(nbOfLike - 1)
        }
    }

    const pattern = /(#[a-zA-Z0-9_]+)/g;

    const message = props.content.split(pattern).map((part) => {
        if (part.match(pattern)) {
            return (
                <span className={styles.hashtag}>
                    {part}
                </span>
            );
        }
        return part;
    });

    return(
        <div className={styles.tweet}>
            <div className={styles.identifiant}>
                <img src="pdp.png" alt="Photo de profil" className={styles.pdp}/>
                <p className={styles.userinfo}><span className={styles.username}>{props.username}</span> @{props.mail} • {props.date}</p>
            </div>
            <p className={styles.tweet_content}>{message}</p>
            <div className={styles.like}>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                        color: liked ? "red" : "white",
                        cursor: "pointer",
                        fontSize: "24px"
                    }}
                    onClick={like}
                />
                <p className={styles.nbLike}>{nbOfLike}</p>
            </div>
        </div>
    );
}

export default Tweet;