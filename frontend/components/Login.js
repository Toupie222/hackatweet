import styles from "../styles/Login.module.css";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  return (
    <div className={styles.body}>
      <img src="bg.png" alt="Image de fond" className={styles.imgLogin}/>
      <div className={styles.left_side}>
        <img src="twitter.png" alt="Logo" className={styles.logo}/>
        <h1 className={styles.titre}>See what's<br />happening</h1>
        <h3 className={styles.sous_titre}>Join Hackatweet today.</h3>
        <Signup />
        <p className={styles.msg}>Already have an account?</p>
        <Signin />
      </div>
    </div>
  );
}

export default Login;
