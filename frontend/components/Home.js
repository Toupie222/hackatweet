import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <div>
        <img src="twitter.png" alt="Logo" className={styles.logo}/>
        <div>
          <div>
            <img src="pdp.png" alt="Photo de profil" className={styles.pdp}/>
            <div>
              <p>John</p>
              <p>@JohnCena</p>
            </div>
          </div>
          <button>Logout</button>
        </div>
      </div>

      <div>
        <div>
          <h2>
            Home
          </h2>
          <input type="text" />
          
        </div>
        <div></div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
}

export default Home;
