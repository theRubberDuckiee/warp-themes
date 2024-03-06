import { gruvboxDarkThemeData, coolNightThemeData, cyberpinkThemeData, draculaThemeData, linuxLaunchThemeData, retrowaveThemeData, seashellThemeData } from "constants/themeConstants"

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