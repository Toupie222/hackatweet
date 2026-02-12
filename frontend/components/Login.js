import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.body}>
      <img src="bg.png" alt="Image de fond" className={styles.imgLogin}/>
      <div className={styles.left_side}>
        <img src="twitter.png" alt="Logo" className={styles.logo}/>
        <h1 className={styles.titre}>See what's<br />happening</h1>
        <h3 className={styles.sous_titre}>Join Hackatweet today.</h3>
        <button className={styles.signup}>Sign up</button>
        <p className={styles.msg}>Already have an account?</p>
        <button className={styles.signin}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
