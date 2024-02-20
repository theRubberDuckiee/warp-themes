// pages/themes/[themeId].tsx

import ThemePage from '@components/ThemePage/themePage';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db } from 'pages/api/create';
import { useEffect, useState } from 'react';

const ThemeIdPage = () => {
  const router = useRouter();
  const { themeId } = router.query;
  const [themeData, setThemeData] = useState(null);

  useEffect(() => {
    async function fetchTheme() {
        try {
            // Get a reference to the 'themes' collection
            const themesCollectionRef = collection(db, 'themes');
            
            // Create a document reference for the specified theme ID
            const themeDocRef = doc(themesCollectionRef, themeId as string);
            
            // Get the document snapshot for the specified theme ID
            const themeDocSnap = await getDoc(themeDocRef);
            console.log(themeDocSnap)
            console.log(themeDocSnap.data())
    
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
      <ThemePage/>
    </div>
  );
};

export default ThemeIdPage;
