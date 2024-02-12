import { coolNightTheme, cyberPinkTheme, draculaTheme, gruvboxDarkTheme, linuxLaunchTheme, retroWaveTheme, seaShellTheme } from "appConstants";
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
    {
      imgSrc: '/FeaturedThemes/GruvboxDark.png',
      theme: {
        data: {
          content: gruvboxDarkTheme,
          name: 'Gruvbox Dark',
        }
      }
    },
    {
      imgSrc: '/FeaturedThemes/LinuxLaunch.png',
      theme: {
        data: {
          content: linuxLaunchTheme,
          name: 'Linux Launch',
        }
      }
    },
    {
      imgSrc: '/FeaturedThemes/CoolNight.png',
      theme: {
        data: {
          content: coolNightTheme,
          name: 'Cool Night',
        }
      }
    },
    {

      imgSrc: '/FeaturedThemes/Seashell.png',
      theme: {
        data: {
          content: seaShellTheme,
          name: 'Seashell',
        }
      }
    },
    {
      imgSrc: '/FeaturedThemes/Cyberpink.png',
      theme: {
        data: {
          backgroundImageSrc: '/PlainBackground/CyberPink.png',
          content: cyberPinkTheme,
          name: 'Cyberpink',
        }
      }
    },
    {
      imgSrc: '/FeaturedThemes/RetroWave.png',
      theme: {
        data: {
          backgroundImageSrc: '/PlainBackground/RetroWave.png',
          content: retroWaveTheme,
          name: 'Retrowave',
        }
      }
    },
    {
      name: 'Dracula',
      imgSrc: '/FeaturedThemes/Dracula.png',
      theme: {
        data: {
          content: draculaTheme,
          name: 'Dracula',
        }
      }
    },
  ]
  // const importAll = (r) => r.keys().map(r);
  // const images = importAll(require.context('./FeaturedThemes', false, /\.(png|jpe?g|svg)$/));

  
  // // Prepare the list of featured themes with image sources
  // const featuredThemes = images.map((imgSrc, index) => ({
  //   name: `Theme ${index + 1}`,
  //   imgSrc: imgSrc.default, // Assuming default export of images
  // }));


  return (
    <div className='flex h-screen flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
            {featuredThemes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  image={item.imgSrc}
                  theme={item.theme}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
