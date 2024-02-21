import YAML from 'json-to-pretty-yaml';
import hexRgb from 'hex-rgb';
import ReactGA from 'react-ga';
import { coolNightTheme, coolNightThemeData, cyberPinkTheme, cyberpinkThemeData, draculaTheme, draculaThemeData, gruvboxDarkTheme, gruvboxDarkThemeData, linuxLaunchTheme, linuxLaunchThemeData, retroWaveTheme, retrowaveThemeData, seaShellTheme, seashellThemeData } from 'appConstants';
import { Theme } from 'interface';

export const initGA = () => {
	ReactGA.initialize('G-S02J90JMSB');
  };

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};

export function getWarpThemeByName(name) {
	switch (name) {
		case "Gruvbox Dark":
		  return gruvboxDarkThemeData
		case "Cool Night":
		  return coolNightThemeData
		case "Cyberpink":
			return cyberpinkThemeData
		case "Dracula":
			return draculaThemeData
		case "Linux Launch":
			return linuxLaunchThemeData
		case "Retrowave":
			return retrowaveThemeData
		case "Seashell":
			return seashellThemeData
		default:
		  break
	  }
}

export function getWarpImgByName(name) {
	switch (name) {
		case "Gruvbox Dark":
		  return [
			'/FeaturedThemes/Gruvbox/GruvboxDark.png',
			'/FeaturedThemes/Gruvbox/GruvboxDark02.png',
			'/FeaturedThemes/Gruvbox/GruvboxDark03.png',
			'/FeaturedThemes/Gruvbox/GruvboxDark04.png',
			'/FeaturedThemes/Gruvbox/GruvboxDark05.png',
			'/FeaturedThemes/Gruvbox/GruvboxDark06.png',
		]
		case "Cool Night":
		  return [
			'/FeaturedThemes/CoolNight/CoolNight.png',
			'/FeaturedThemes/CoolNight/CoolNight02.png',
			'/FeaturedThemes/CoolNight/CoolNight03.png',
			'/FeaturedThemes/CoolNight/CoolNight04.png',
			'/FeaturedThemes/CoolNight/CoolNight05.png',
			'/FeaturedThemes/CoolNight/CoolNight06.png',
			'/FeaturedThemes/CoolNight/CoolNight07.png',
			'/FeaturedThemes/CoolNight/CoolNight08.png',
		]
		case "Cyberpink":
			return [
				'/FeaturedThemes/Cyberpink/Cyberpink.png',
				'/FeaturedThemes/Cyberpink/Cyberpink02.png',
				'/FeaturedThemes/Cyberpink/Cyberpink03.png',
				'/FeaturedThemes/Cyberpink/Cyberpink04.png',
				'/FeaturedThemes/Cyberpink/Cyberpink05.png',
			]
		case "Dracula":
			return [
				'/FeaturedThemes/Dracula/Dracula.png',
				'/FeaturedThemes/Dracula/Dracula02.png',
				'/FeaturedThemes/Dracula/Dracula03.png',
				'/FeaturedThemes/Dracula/Dracula04.png',
				'/FeaturedThemes/Dracula/Dracula05.png',
			]
		case "Linux Launch":
			return ['/FeaturedThemes/LinuxLaunch/LinuxLaunch.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch03.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch04.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch05.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch06.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch07.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch08.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch09.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch10.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch11.png',
					'/FeaturedThemes/LinuxLaunch/LinuxLaunch12.png',
		]
		case "Retrowave":
			return [
				'/FeaturedThemes/Retrowave/RetroWave.png',
				'/FeaturedThemes/Retrowave/RetroWave02.png',
				'/FeaturedThemes/Retrowave/RetroWave03.png',
				'/FeaturedThemes/Retrowave/RetroWave04.png',
				'/FeaturedThemes/Retrowave/RetroWave05.png',
			]
		case "Seashell":
			return [
				'/FeaturedThemes/Seashell/Seashell.png',
				'/FeaturedThemes/Seashell/Seashell02.png',
				'/FeaturedThemes/Seashell/Seashell03.png',
				'/FeaturedThemes/Seashell/Seashell04.png',
				'/FeaturedThemes/Seashell/Seashell05.png',
				'/FeaturedThemes/Seashell/Seashell06.png',
				'/FeaturedThemes/Seashell/Seashell07.png',
				'/FeaturedThemes/Seashell/Seashell08.png',
			]
		default:
		  break
	  }
}

export function getWarpTheme(theme: Theme) {
    const themeYaml = YAML.stringify({
        accent: theme.accent,
        background: theme.background?.color ?? theme.background,
        foreground: theme.foreground,
		background_image: {
			path: theme.background_image.path,
			opacity: theme.background_image.opacity,
		},
        details: theme.details,
        terminal_colors: {
            normal: {
                black: theme.terminal_colors.normal.black,
                red: theme.terminal_colors.normal.red,
                green: theme.terminal_colors.normal.green,
                yellow: theme.terminal_colors.normal.yellow,
                blue: theme.terminal_colors.normal.blue,
                magenta: theme.terminal_colors.normal.magenta,
                cyan: theme.terminal_colors.normal.cyan,
                white: theme.terminal_colors.normal.white,
            },
            bright: {
                black: theme.terminal_colors.bright.black,
                red: theme.terminal_colors.bright.red,
                green: theme.terminal_colors.bright.green,
                yellow: theme.terminal_colors.bright.yellow,
                blue: theme.terminal_colors.bright.blue,
                magenta: theme.terminal_colors.bright.magenta,
                cyan: theme.terminal_colors.bright.cyan,
                white: theme.terminal_colors.bright.white,
            },
        },
    });
    return themeYaml
}

export function getiTerm2Theme(theme) {
    const foreground = hexRgb(theme.foreground)
    const background = hexRgb(theme.background ?? theme.background)
    const accent = hexRgb(theme.accent ?? theme.accent)
    const ansiBlack = hexRgb(theme.terminal_colors.normal.black)
    const ansiBlue = hexRgb(theme.terminal_colors.normal.blue)
    const ansiBrightBlack = hexRgb(theme.terminal_colors.bright.black)
    const ansiBrightBlue = hexRgb(theme.terminal_colors.bright.blue)
    const ansiBrightCyan = hexRgb(theme.terminal_colors.bright.cyan)
    const ansiBrightGreen = hexRgb(theme.terminal_colors.bright.green)
    const ansiBrightMagenta = hexRgb(theme.terminal_colors.bright.magenta)
    const ansiBrightRed = hexRgb(theme.terminal_colors.bright.red)
    const ansiBrightWhite = hexRgb(theme.terminal_colors.bright.white)
    const ansiBrightYellow = hexRgb(theme.terminal_colors.bright.yellow)
    const ansiCyan = hexRgb(theme.terminal_colors.normal.cyan)
    const ansiGreen = hexRgb(theme.terminal_colors.normal.green)
    const ansiMagenta = hexRgb(theme.terminal_colors.normal.magenta)
    const ansiRed = hexRgb(theme.terminal_colors.normal.red)
    const ansiWhite = hexRgb(theme.terminal_colors.normal.white)
    const ansiYellow = hexRgb(theme.terminal_colors.normal.yellow)
    const iTerm2Theme = `<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
	<plist version="1.0">
	<dict>
	    <key>Ansi 0 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBlack.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBlack.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBlack.green}</real>
			<key>Red Component</key>
			<real>${ansiBlack.red}</real>
		</dict>
	    <key>Ansi 1 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiRed.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiRed.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiRed.green}</real>
			<key>Red Component</key>
			<real>${ansiRed.red}</real>
		</dict>
		<key>Ansi 10 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightGreen.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightGreen.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightGreen.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightGreen.red}</real>
		</dict>
		<key>Ansi 11 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightYellow.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightYellow.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightYellow.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightYellow.red}</real>
		</dict>
		<key>Ansi 12 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightBlue.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightBlue.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightBlue.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightBlue.red}</real>
		</dict>
		<key>Ansi 13 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightMagenta.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightMagenta.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightMagenta.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightMagenta.red}</real>
		</dict>
		<key>Ansi 14 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightCyan.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightCyan.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightCyan.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightCyan.red}</real>
		</dict>
		<key>Ansi 15 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightWhite.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightWhite.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightWhite.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightWhite.red}</real>
		</dict>
		<key>Ansi 2 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiGreen.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiGreen.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiGreen.green}</real>
			<key>Red Component</key>
			<real>${ansiGreen.red}</real>
		</dict>
		<key>Ansi 3 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiYellow.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiYellow.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiYellow.green}</real>
			<key>Red Component</key>
			<real>${ansiYellow.red}</real>
		</dict>
		<key>Ansi 4 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBlue.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBlue.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBlue.green}</real>
			<key>Red Component</key>
			<real>${ansiBlue.red}</real>
		</dict>
		<key>Ansi 5 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiMagenta.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiMagenta.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiMagenta.green}</real>
			<key>Red Component</key>
			<real>${ansiMagenta.red}</real>
		</dict>
		<key>Ansi 6 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiCyan.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiCyan.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiCyan.green}</real>
			<key>Red Component</key>
			<real>${ansiCyan.red}</real>
		</dict>
		<key>Ansi 7 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiWhite.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiWhite.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiWhite.green}</real>
			<key>Red Component</key>
			<real>${ansiWhite.red}</real>
		</dict>
		<key>Ansi 8 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightBlack.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightBlack.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightBlack.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightBlack.red}</real>
		</dict>
		<key>Ansi 9 Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${ansiBrightRed.alpha}</real>
			<key>Blue Component</key>
			<real>${ansiBrightRed.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${ansiBrightRed.green}</real>
			<key>Red Component</key>
			<real>${ansiBrightRed.red}</real>
		</dict>
		<key>Background Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${background.alpha}</real>
			<key>Blue Component</key>
			<real>${background.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${background.green}</real>
			<key>Red Component</key>
			<real>${background.red}</real>
		</dict>
		<key>Badge Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Bold Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Cursor Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Cursor Guide Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Cursor Text Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Foreground Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${foreground.alpha}</real>
			<key>Blue Component</key>
			<real>${foreground.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${foreground.green}</real>
			<key>Red Component</key>
			<real>${foreground.red}</real>
		</dict>
		<key>Link Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Selected Text Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
		<key>Selection Color</key>
		<dict>
			<key>Alpha Component</key>
			<real>${accent.alpha}</real>
			<key>Blue Component</key>
			<real>${accent.blue}</real>
			<key>Color Space</key>
			<string>sRGB</string>
			<key>Green Component</key>
			<real>${accent.green}</real>
			<key>Red Component</key>
			<real>${accent.red}</real>
		</dict>
</dict>
</plist>`
return iTerm2Theme
}