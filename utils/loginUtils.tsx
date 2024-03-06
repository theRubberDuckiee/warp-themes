import { TwitterAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export const signInWithTwitter = async () => {
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

    const provider = new TwitterAuthProvider(); // Use TwitterAuthProvider directly
    try {
        await signInWithPopup(auth, provider); // Use signInWithPopup function with auth

    } catch (error) {
        console.error('Error signing in with Twitter:', error);
    }
}