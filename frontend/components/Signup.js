import Popup from 'reactjs-popup';
import styles from "../styles/Signup.module.css";


function Signup() {
    return (
        <Popup
            trigger={<button className={styles.signup}>Sign up</button>}
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
                        <h4 className={styles.text_popup}>Create your Hackatweet account</h4>
                        <input className={styles.input} placeholder = "Firstname"/>
                        <input className={styles.input} placeholder = "Username"/>
                        <input className={styles.input} type="password" placeholder = "Password"/>
                        <button className={styles.signup_popup}>Sign up</button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Signup;
