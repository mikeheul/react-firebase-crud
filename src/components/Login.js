import React, { useState } from 'react';
import { auth } from '../utils/firebase.config';
import { useRef } from 'react';

const Login = () => {

    const loginEmail = useRef();
    const loginPassword = useRef(); 
    const [error, setError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await auth.signInWithEmailAndPassword(
                loginEmail.current.value, 
                loginPassword.current.value
            )
            console.log(user)
        } catch (error) {
            console.log(error.message);
            setError(true)
        }
    }

    return (
        <div className="login-container">
        <div className="login">
            <h3>Se connecter</h3>
            <form onSubmit={e => handleLogin(e)}>
                <input type="email" placeholder="Email..." ref={loginEmail}/>
                <input type="password" placeholder="Password..." ref={loginPassword}/>
                <input type="submit" value="Se connecter" />
                <span>{error && "Le mail ou le mot de passe ne correspondent pas "}</span>
            </form>
        </div>

        </div>
    );
};

export default Login;