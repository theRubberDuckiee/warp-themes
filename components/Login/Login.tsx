import { initializeApp } from 'firebase/app';
import { TwitterAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react';
import axios from 'axios'; // Use axios or another HTTP client to make API requests

const LoginButton = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBzZfDNCqyrwUW8DvWSnEBn-Q-6mIzxADQ",
        authDomain: "warp-themes-cf724.firebaseapp.com",
        projectId: "warp-themes-cf724",
        storageBucket: "warp-themes-cf724.appspot.com",
        messagingSenderId: "227546572873",
        appId: "1:227546572873:web:4251b2470105d315223798",
        measurementId: "G-YY8ELH4ZN6"
      };

    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp); // Initialize auth

    const signInWithTwitter = async () => {
        const provider = new TwitterAuthProvider(); // Use TwitterAuthProvider directly
        try {
            await signInWithPopup(auth, provider); // Use signInWithPopup function with auth

        } catch (error) {
            console.error('Error signing in with Twitter:', error);
        }
    };

    return (
        <button className='btn btn-ghost' onClick={signInWithTwitter}>Sign in</button>
    );
};

export default LoginButton;