import { coolNightTheme, cyberPinkTheme, draculaTheme, gruvboxDarkTheme, linuxLaunchTheme, retroWaveTheme, seaShellTheme } from "appConstants";
import ThemeCard from "./ThemeCard";
import { FeaturedThemeData } from "interface";

export default function FeaturedCommunityThemes() {
  const featuredThemes: FeaturedThemeData[] = [
    {
      imgSrc: '/FeaturedThemes/GruvboxDark.png',
      themeData: {
          content: gruvboxDarkTheme,
          name: 'Gruvbox Dark',
          username: 'Jess',
      }
    },
    {
      imgSrc: '/FeaturedThemes/LinuxLaunch.png',
      themeData: {
        content: linuxLaunchTheme,
        name: 'Linux Launch',
        username: 'Jess',
      }
    },
    {
      imgSrc: '/FeaturedThemes/CoolNight.png',
      themeData: {
        content: coolNightTheme,
        name: 'Cool Night',
        username: 'Jess',
      }
    },
    {

      imgSrc: '/FeaturedThemes/Seashell.png',
      themeData: {
        content: seaShellTheme,
        name: 'Seashell',
        username: 'Jess',
      }
    },
    {
      imgSrc: '/FeaturedThemes/Cyberpink.png',
      themeData: {
        backgroundImageSrc: '/PlainBackground/CyberPink.png',
        content: cyberPinkTheme,
        name: 'Cyberpink',
        username: 'Jess',
      }
    },
    {
      imgSrc: '/FeaturedThemes/RetroWave.png',
      themeData: {
        content: retroWaveTheme,
        backgroundImageSrc: '/PlainBackground/RetroWave.png',
        name: 'Retrowave',
        username: 'Jess',
      }
    },
    {
      imgSrc: '/FeaturedThemes/Dracula.png',
      themeData: {
        content: draculaTheme,
        name: 'Dracula',
        username: 'Jess',
      }
    },
  ]

  return (
    <div className='flex h-screen flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
            {featuredThemes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  image={item.imgSrc}
                  theme={item.themeData}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
