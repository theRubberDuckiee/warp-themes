import ThemeLandingPage from '@components/Theme-Page';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db } from 'pages/api/create';
import { useEffect, useState } from 'react';

const ThemePage = () => {
  const router = useRouter();
  const themeId = router.query.themeId as string; // Explicitly type themeId as string
  const [themeData, setThemeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (themeId) {
        const docRef = doc(db, 'themes', themeId);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setThemeData(data);
          } else {
            console.log('Theme not found');
            // Handle case where theme doesn't exist
          }
        } catch (error) {
          console.error('Error fetching theme data:', error);
          // Handle error
        }
      }
    };

    fetchData();
  }, [themeId]);

  return (
	<ThemeLandingPage themeData={themeData}/>
  );
}

export default ThemePage;
