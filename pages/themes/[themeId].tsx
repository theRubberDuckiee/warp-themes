import ThemePage from '@components/Theme-Page';
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';

const ThemeIdPage = () => {
  const router = useRouter();
  const { themeId } = router.query;
  const [themeData, setThemeData] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyBzZfDNCqyrwUW8DvWSnEBn-Q-6mIzxADQ",
    authDomain: "warp-themes-cf724.firebaseapp.com",
    projectId: "warp-themes-cf724",
    storageBucket: "warp-themes-cf724.appspot.com",
    messagingSenderId: "227546572873",
    appId: "1:227546572873:web:4251b2470105d315223798",
    measurementId: "G-YY8ELH4ZN6"
    };
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  useEffect(() => {
    async function fetchTheme() {
        try {
            // Get a reference to the 'themes' collection
            const themesCollectionRef = collection(db, 'themes');
            
            // Create a document reference for the specified theme ID
            const themeDocRef = doc(themesCollectionRef, themeId as string);
            
            // Get the document snapshot for the specified theme ID
            const themeDocSnap = await getDoc(themeDocRef);
            
            // Check if the document exists
            if (themeDocSnap.exists()) {
                // Return the data of the theme document
                setThemeData(themeDocSnap.data())
            } else {
                // Return null if the document does not exist
                return null;
            }
      } catch (error) {
        console.error('Error fetching theme:', error);
      }
    }

    fetchTheme();
  }, [themeId]);

  if (!themeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ThemePage themeData={themeData}/>
    </div>
  );
};

export default ThemeIdPage;
