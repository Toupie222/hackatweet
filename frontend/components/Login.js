import styles from "../styles/Login.module.css";
import Popup from 'reactjs-popup';

function Login() {
  return (
    <div className={styles.body}>
      <img src="bg.png" alt="Image de fond" className={styles.imgLogin}/>
      <div className={styles.left_side}>
        <img src="twitter.png" alt="Logo" className={styles.logo}/>
        <h1 className={styles.titre}>See what's<br />happening</h1>
        <h3 className={styles.sous_titre}>Join Hackatweet today.</h3>
        <Popup
            trigger={<button className={styles.signup}>Sign up</button>}
            modal
            position="center center"
            closeOnDocumentClick={false}
            arrow={false}
            className = {styles.Popup}
        >
            {(close) => (
                <div className={styles.container}>
                    <span style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                        <button onClick={close} className={styles.bouton_popup}>×</button>
                    </span>
                    <div className={styles.popup}>
                            <br />
                        <img src="twitter.png" alt="Logo" className={styles.logo}/>
                        <h4 className={styles.text_popup}>Create your Hackatweet account</h4>
                        <input className={styles.input} placeholder = "Firstname"/>
                        <input className={styles.input} placeholder = "Username"/>
                        <input className={styles.input} type="password" placeholder = "Password"/>
                        <button className={styles.signup_popup}>Sign up</button>
                    </div>
                </div>
            )}
        </Popup>
        <p className={styles.msg}>Already have an account?</p>
        <Popup
            trigger={<button className={styles.signin}>Sign in</button>}
            modal
            position="center center"
            closeOnDocumentClick={false}
            arrow={false}
            className = {styles.Popup}
        >
            {(close) => (
                <div className={styles.container}>
                    <span style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                        <button onClick={close} className={styles.bouton_popup}>×</button>
                    </span>
                    <div className={styles.popup}>
                            <br />
                        <img src="twitter.png" alt="Logo" className={styles.logo}/>
                        <h4 className={styles.text_popup}>Connect to Hackatweet</h4>
                        <input className={styles.input} placeholder = "Username"/>
                        <input className={styles.input} type="password" placeholder = "Password"/>
                        <button className={styles.signup_popup}>Sign in</button>
                    </div>
                </div>
            )}
        </Popup>
      </div>
    </div>
  );
}

export default Login;
