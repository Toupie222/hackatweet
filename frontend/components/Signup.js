import Popup from 'reactjs-popup';
import styles from "../styles/Signup.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation'

function Signup() {

    const router = useRouter()
    const [signUpFirstName, setSignUpFirstName] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    function handleClick()
    {
        fetch(`http://localhost:3000/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname:signUpFirstName, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    /*
                    dispatch(login({username:signUpUsername, token:data.token}));
                    setSignInUsername('');
                    setSignInPassword('');
                    */
                   router.push('/acceuil')
                }
            });
    }
    
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
                        <input className={styles.input} placeholder = "Firstname" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
                        <input className={styles.input} placeholder = "Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>
                        <input className={styles.input} type="password" placeholder = "Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                        <button className={styles.signup_popup} onClick={() => handleClick()}>Sign up</button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Signup;
