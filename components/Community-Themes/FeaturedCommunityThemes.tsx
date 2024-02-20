import { coolNightTheme, coolNightThemeData, cyberPinkTheme, cyberpinkThemeData, draculaTheme, draculaThemeData, gruvboxDarkTheme, gruvboxDarkThemeData, linuxLaunchTheme, linuxLaunchThemeData, retroWaveTheme, retrowaveThemeData, seaShellTheme, seashellThemeData } from "appConstants";
import ThemeCard from "./ThemeCard";

// Define the type of require to include context
declare const require: {
  context(url: string, recursive: boolean, pattern: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};


export default function FeaturedCommunityThemes() {
  const featuredThemes = [
    gruvboxDarkThemeData,
    linuxLaunchThemeData,
    coolNightThemeData,
    seashellThemeData,
    cyberpinkThemeData,
    retrowaveThemeData,
    draculaThemeData,
  ];

  return (
    <div className='flex h-screen flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
            {featuredThemes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  image={item.imgSrc}
                  theme={item.theme} // Adjusted to access nested content property
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

