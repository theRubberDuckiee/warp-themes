import CommunityThemes from '@components/community-themes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function LandingPage() {
  const [view, setView] = useState<'featured' | 'all'>('featured');
  const router = useRouter();

  const navigateToCreateTheme = () => {
    router.push('/create-theme');
  };

  return (
    <div className="text-center p-8 pt-32">
      <h1 className="text-4xl font-bold mb-4">Discover the terminal themes everybody is using</h1>
      <p className="text-lg mb-4">Create your own theme</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full mb-6"
        onClick={navigateToCreateTheme}
      >
        Start here
      </button>
      <p className="text-sm mb-2">X themes uploaded</p>

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

      {/* Slider content based on the selected view */}
      {view === 'featured' ? (
        <>
          <CommunityThemes />
        </>
      ) : (
        <p>All Themes Content Goes Here</p>
      )}
    </div>
  );
}
