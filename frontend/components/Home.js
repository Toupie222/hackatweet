import styles from '../styles/Home.module.css';
import Trends from './Trends';
import Feed from './Feed';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTweets,setTweets } from '../reducers/tweets';

function Home() {
  const [word, setWord] = useState('');
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://localhost:3000/tweets/getTweets")
            .then(res => res.json())
            .then(data => {console.log(data); dispatch(setTweets(data.tweets))});
  }, []);

  const CreateTweet = () => {

    const newTweet = {
      token : user.token,
      content: word,
      nbLike: 0,
      date: new Date(),
    }

    fetch("http://localhost:3000/tweets/createTweet", {
      method: "POST",
      body: new URLSearchParams(newTweet)
    })
    .then(response => response.json())
    .then(data => {
      if (data.result)
      {
        dispatch(addTweets(newTweet));
        setWord("")
      }
    });
  }

  return (
    <div className={styles.body}>
      <div className={styles.left_side}>
        <img src="twitter.png" alt="Logo" className={styles.logo}/>
        <div>
          <div className={styles.person}>
            <img src="pdp.png" alt="Photo de profil" className={styles.pdp}/>
            <div>
              <p className={styles.name}>John</p>
              <p className={styles.pseudo}>@JohnCena</p>
            </div>
          </div>
          <br />
          <button className={styles.logout}>Logout</button>
        </div>
      </div>

      <div className={styles.center_side}>
        <div className={styles.home_container}>
          <h2 className={styles.titre}>
            Home
          </h2>
          <div className={styles.home_content}>
            <input
              type="text"
              placeholder="What's up?"
              className={styles.input_home}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              maxLength={280}
            />
            <div className={styles.bouton_et_text_home}>
              <p className={styles.compteur}>{word.length}/280</p>
              <button onClick={CreateTweet} className={styles.bouton_tweet}>Tweet</button>
            </div>
          </div>
        </div>
        <Feed />
      </div>

      <div>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
