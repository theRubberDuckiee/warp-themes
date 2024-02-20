import YAML from 'json-to-pretty-yaml';
import hexRgb from 'hex-rgb';
import ReactGA from 'react-ga';

export const initGA = () => {
	ReactGA.initialize('G-S02J90JMSB');
  };

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};

export function getWarpTheme(theme) {
    const themeYaml = YAML.stringify({
        accent: theme.accent,
        background: theme.background,
        foreground: theme.foreground,
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