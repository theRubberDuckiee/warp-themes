import React, { Dispatch, SetStateAction } from 'react';
import ThemeCard from './ThemeCard';
import { ThemeData } from 'interface/interface';

interface Props {
  setUploadedThemesCount: Dispatch<SetStateAction<number>>,
  themes: ThemeData[],
  loading: boolean
}

export default function AllCommunityThemes(props: Props) {
  return (
    <div className='flex h-screen flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
          {props.loading ? (
            <p>Loading...</p>
          ) : (
            props.themes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  theme={item}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .grid {
            grid-gap: 8px; // Decrease grid gap for smaller screens
          }
        }
      `}</style>
    </div>
  );
}
