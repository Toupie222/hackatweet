import Popup from 'reactjs-popup';
import styles from "../styles/Signin.module.css";

function Signin() {
    return (
        <Popup
            trigger={<button className={styles.signin}>Sign in</button>}
            modal
            position="center center"
            closeOnDocumentClick={false}
            arrow={false}
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
                        <button className={styles.signin_popup}>Sign in</button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Signin;