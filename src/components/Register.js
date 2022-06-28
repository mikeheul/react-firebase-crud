import React, { useRef, useState } from 'react';
import { auth } from "../utils/firebase.config"

const Register = () => {

    const registerEmail = useRef();
    const registerPassword = useRef(); 
    const [displayName, setDisplayName] = useState();

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value
            ).then(async (userAuth) => {
                await userAuth.user.updateProfile({
                    displayName
                })
                console.log(userAuth);
                window.location.reload();
            });
        } catch (error) {
            console.log(error.message)
        }
        console.log(registerEmail.current.value, registerPassword.current.value);
    }

    return (
        <div className='signup-container'>
            <div className="signup">
                <h3>Register</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input 
                        type="text" 
                        placeholder="Pseudo" 
                        required
                        onChange={(e) => setDisplayName(e.target.value)} />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        ref={registerEmail} />
                    <input 
                        type="password" 
                        placeholder="Mot de passe" 
                        required 
                        ref={registerPassword} />
                    <input 
                        type="submit" 
                        value="Valider l'inscription" />
                </form>
            </div>

        </div>
    );
};

export default Register;