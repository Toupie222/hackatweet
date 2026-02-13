import Popup from 'reactjs-popup';
import styles from "../styles/Signin.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation'

function Signin() {

    const router = useRouter()
    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    function handleClick()
    {
        fetch(`http://localhost:3000/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    /*
                    dispatch(login({username:signInUsername, token:data.token}));
                    setSignInUsername('');
                    setSignInPassword('');
                    */
                   router.push('/acceuil')
                }
            });
    }

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
                        <input className={styles.input} placeholder = "Username" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}/>
                        <input className={styles.input} type="password" placeholder = "Password" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
                        <button className={styles.signin_popup} onClick={() => handleClick()}>Sign in</button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Signin;