import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';

const LogoutButton = () => {
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

    const signOutUser = async () => {
        try {
            await signOut(auth); // Call the signOut method with auth
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <>
            <button className='btn btn-ghost' onClick={signOutUser}>Sign Out</button>
        </>
    );
};

export default LogoutButton;