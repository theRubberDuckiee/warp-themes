import { useRouter } from 'next/router';
import AllCommunityThemes from './AllCommunityThemes';
import FeaturedCommunityThemes from './FeaturedCommunityThemes';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import * as ga from '../../utils/utils';
import { ThemeData } from 'interface/interface';
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';

export default function LandingPage() {
  const [view, setView] = useState<'featured' | 'all'>('featured');
  const [uploadedThemesCount, setUploadedThemesCount] = useState<number>(0)
  const [loading, setLoading] = useState(true);
  const [themes, setThemes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {

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
        const themesCollectionRef = collection(db, 'themes');
        const querySnapshot = await getDocs(themesCollectionRef);

        if (querySnapshot.size !== 0) {
          const themesData: ThemeData[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            const newThemeData = {
              tId: doc.id,
              themeUser: {
                // To make sure this is backwards compatatible with the old schema (username instead of themeUser)
                displayName: data.themeUser?.displayName ?? data.username,
                photoURL: data.themeUser?.photoURL,
                uid: data.themeUser?.uid,
                description: data.themeUser?.description
              },
              content: data.content,
              name: data.name,
              counter: data.counter
            }
            themesData.push(newThemeData);         
          });
          setThemes(themesData)
          setUploadedThemesCount(themesData.length)
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, []);

  const navigateToCreateTheme = () => {
    router.push('/create-theme');
    ga.logPageView(); // Log page view when navigating
  };

  // Attach Google Analytics tracking to route change events
  useEffect(() => {
    const handleRouteChange = () => {
      ga.logPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <div className="text-center p-8 pt-32 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Discover the terminal themes everybody is using</h1>
      <button
        className= "px-4 py-2 mb-2 btn btn-primary"
        onClick={navigateToCreateTheme}
      >
        Create your own theme
      </button>
      <p className="text-sm mb-6 text-gray-100">{uploadedThemesCount} themes uploaded</p>

      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 ${view === 'featured' ? 'font-bold border-b-2 border-blue-500' : ''}`}
          onClick={() => setView('featured')}
        >
          Featured Themes
        </button>
        <button
          className={`${view === 'all' ? 'font-bold border-b-2 border-blue-500' : ''}`}
          onClick={() => setView('all')}
        >
          All Themes
        </button>
      </div>

      {view === 'featured' ? (
        <>
          <FeaturedCommunityThemes/>
        </>
      ) : (
        <AllCommunityThemes setUploadedThemesCount={setUploadedThemesCount} loading={loading} themes={themes}/>
      )}
    </div>
  );
}
