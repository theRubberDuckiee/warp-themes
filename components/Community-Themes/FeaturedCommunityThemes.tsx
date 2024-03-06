import { coolNightThemeData, cyberpinkThemeData, draculaThemeData, gruvboxDarkThemeData, linuxLaunchThemeData, retrowaveThemeData, seashellThemeData } from "constants/themeConstants";
import ThemeCard from "./ThemeCard";
import { FeaturedThemeData } from "interface";
import React from 'react';

export default function FeaturedCommunityThemes() {
  const featuredThemes: FeaturedThemeData[] = [
    gruvboxDarkThemeData,
    linuxLaunchThemeData,
    coolNightThemeData,
    seashellThemeData,
    cyberpinkThemeData,
    retrowaveThemeData,
    draculaThemeData,
  ];

  return (
    <div className='flex flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
            {featuredThemes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  theme={item.themeData}
                  imgSrc={item.imgSrc}
                />
              </div>
            ))}
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
