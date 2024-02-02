import { useState, useEffect } from 'react';
import SimplifiedBlock from "@components/Shared-Themes/SimplifiedBlock";
import SimplifiedNavBar from "@components/Shared-Themes/SimplifiedNavBar";
import SimplifiedPrompt from "@components/Shared-Themes/SimplifiedPrompt";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../pages/api/create";
import AppLayout from '@components/App/Layout';
import AppNavbar from '@components/App/Navbar/Navbar';

export default function CommunityThemes() {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const themesCollectionRef = collection(db, 'themes');
        const querySnapshot = await getDocs(themesCollectionRef);

        if (querySnapshot.size === 0) {
          console.log('Themes collection does not exist or is empty.');
        } else {
          console.log(querySnapshot)
          console.log('Themes collection exists and has documents:');
          const themesData = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data)
            themesData.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setThemes(themesData);
        }
      } catch (error) {
        console.error('Error fetching themes:', error);
      } finally {
        console.log('fetchData completed');
        setLoading(false);
      }
    }

    fetchData(); // Call the fetchData function

  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='flex h-screen flex-col bg-slate-100 sm:bg-white overflow-y-hidden'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
          {loading ? (
            <p>Loading...</p>
          ) : (
            themes.map((item, index) => (
              <div
                key={index}
                className='min-w-fit select-none rounded-md leading-5 drop-shadow-lg lg:max-w-3xl'
                style={{ backgroundColor: item.data.content.background, color: item.data.content.foreground }}
              >
                <SimplifiedNavBar theme={item} />
                <SimplifiedBlock theme={item} />
                <SimplifiedPrompt theme={item} />
              </div>
            ))
          )}
        </div>
      </div>
  );
}