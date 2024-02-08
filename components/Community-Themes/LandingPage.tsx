import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AllCommunityThemes from './AllCommunityThemes';
import FeaturedCommunityThemes from './FeaturedCommunityThemes';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'pages/api/create';

export default function LandingPage() {
  const [view, setView] = useState<'featured' | 'all'>('featured');
  const [uploadedThemesCount, setUploadedThemesCount] = useState<number>(0)
  const [loading, setLoading] = useState(true);
  const [themes, setThemes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const themesCollectionRef = collection(db, 'themes');
        const querySnapshot = await getDocs(themesCollectionRef);

        if (querySnapshot.size !== 0) {
          const themesData = [];
          querySnapshot.forEach((doc) => {
            themesData.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setThemes(themesData)
          console.log(themesData)
          setUploadedThemesCount(themesData.length)
        }
      } catch (error) {
        console.error('Error fetching themes:', error);
      } finally {
        console.log('fetchData completed');
        setLoading(false);
      }
    }

    fetchData();

  }, []);

  const navigateToCreateTheme = () => {
    router.push('/create-theme');
  };

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
