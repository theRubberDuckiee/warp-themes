import { FeaturedThemeData } from "interface";

export const gruvboxDarkTheme = {
    'accent': '#458588',
    'background': '#282828',
    'details': 'darker',
    'foreground': '#ebdbb2',
    'terminal_colors': {
        'bright': {
            'black': '#928374',
            'blue': '#83a598',
            'cyan': '#8ec07c',
            'green': '#b8bb26',
            'magenta': '#d3869b',
            'red': '#fb4934',
            'white': '#ebdbb2',
            'yellow': '#fabd2f'
        },
        'normal': {
            'black': '#282828',
            'blue': '#458588',
            'cyan': '#689d6a',
            'green': '#98971a',
            'magenta': '#b16286',
            'red': '#cc241d',
            'white': '#a89984',
            'yellow': '#d79921'
        }
    }
};

export const coolNightTheme = {
    'accent': '#38ff9c',
    'background': '#010b17',
    'foreground': '#ebddf4',
    'details': 'darker',
    'terminal_colors': {
        'normal': {
            'black': '#0b3b61',
            'red': '#ff3a3a',
            'green': '#52ffcf',
            'yellow': '#fff383',
            'blue': '#1376f8',
            'magenta': '#c792ea',
            'cyan': '#ff5dd4',
            'white': '#15fca2'
        },
        'bright': {
            'black': '#62686c',
            'red': '#ff54b0',
            'green': '#73ffd8',
            'yellow': '#fcf4ad',
            'blue': '#378dfe',
            'magenta': '#ae81ff',
            'cyan': '#ff69d7',
            'white': '#5ffbbe'
        }
    }
};

export const cyberPinkTheme = {
    'accent': '#38ff9c',
    'background': '#010b17',
    'foreground': '#ebddf4',
    'details': 'darker',
    'terminal_colors': {
        'normal': {
            'black': '#0b3b61',
            'red': '#ff3a3a',
            'green': '#52ffcf',
            'yellow': '#fff383',
            'blue': '#1376f8',
            'magenta': '#c792ea',
            'cyan': '#ff5dd4',
            'white': '#15fca2'
        },
        'bright': {
            'black': '#62686c',
            'red': '#ff54b0',
            'green': '#73ffd8',
            'yellow': '#fcf4ad',
            'blue': '#378dfe',
            'magenta': '#ae81ff',
            'cyan': '#ff69d7',
            'white': '#5ffbbe'
        }
    }
};

export const draculaTheme = {
    'accent': '#bd93f9',
    'background': '#282a36',
    'details': 'darker',
    'foreground': '#f8f8f2',
    'terminal_colors': {
      'bright': {
        'black': '#555555',
        'blue': '#caa9fa',
        'cyan': '#8be9fd',
        'green': '#50fa7b',
        'magenta': '#ff79c6',
        'red': '#ff5555',
        'white': '#ffffff',
        'yellow': '#f1fa8c'
      },
      'normal': {
        'black': '#000000',
        'blue': '#bd93f9',
        'cyan': '#8be9fd',
        'green': '#50fa7b',
        'magenta': '#ff79c6',
        'red': '#ff5555',
        'white': '#bbbbbb',
        'yellow': '#f1fa8c',
      }
    }
  };

export const linuxLaunchTheme = {
    'background': '#1b0e17',
    'accent': '#96ce45',
    'foreground': '#ffffff',
    'background_image': {
        'path': 'LinuxLaunch.png',
        'opacity': 30
    },
    'details': 'darker',
    'terminal_colors': {
        'normal': {
            'black': '#616161',
            'red': '#ff8272',
            'green': '#b4fa72',
            'yellow': '#fefdc2',
            'blue': '#a5d5fe',
            'magenta': '#ff8ffd',
            'cyan': '#d0d1fe',
            'white': '#f1f1f1'
        },
        'bright': {
            'black': '#8e8e8e',
            'red': '#ffc4bd',
            'green': '#d6fcb9',
            'yellow': '#fefdd5',
            'blue': '#c1e3fe',
            'magenta': '#ffb1fe',
            'cyan': '#e5e6fe',
            'white': '#feffff'
        }
    },
};

export const retroWaveTheme = {
    'accent': {
        'left': '#fc28a8',
        'right': '#f5e949'
    },
    'details': 'darker',
    'background': '#0c0a20',
    'foreground': '#7984D1',
    'background_image': {
        'path': 'retrowave-pyramids.png',
        'opacity': 30
    },
    'terminal_colors': {
        'bright': {
            'blue': '#42c6ff',
            'green': '#cbfc44',
            'magenta': '#ff2afc',
            'black': '#435056',
            'red': '#ff2e97',
            'yellow': '#ffd400',
            'cyan': '#39fff6',
            'white': '#ffffff'
        },
        'normal': {
            'blue': '#1ea8fc',
            'yellow': '#f7b83d',
            'black': '#283034',
            'magenta': '#A875FF',
            'green': '#a7da1e',
            'red': '#ff0081',
            'cyan': '#16f1fc',
            'white': '#f9faff'
        }
    }
};

export const seaShellTheme = {
    'accent': '#255a62',
    'background': '#061923',
    'details': 'darker',
    'foreground': '#e5c49e',
    'terminal_colors': {
        'bright': {
            'black': '#545d65',
            'blue': '#0bc7e3',
            'cyan': '#97b9c0',
            'green': '#739da8',
            'magenta': '#c6e8f1',
            'red': '#dd998a',
            'white': '#ffe9d7',
            'yellow': '#fedaae'
        },
        'normal': {
            'black': '#1d485f',
            'blue': '#255a62',
            'cyan': '#5fb1c2',
            'green': '#008eab',
            'magenta': '#77dbf4',
            'red': '#db662d',
            'white': '#e5c49e',
            'yellow': '#feaf3c'
        }
    }
};

export const gruvboxDarkThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/Gruvbox/GruvboxDark.png',
    themeData: {
        username:"Jess Wang",
        content: gruvboxDarkTheme,
        name: 'Gruvbox Dark',
    }
  }


export const linuxLaunchThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/LinuxLaunch/LinuxLaunch.png',
    themeData: {
        username:"The Warp Team",
        content: linuxLaunchTheme,
        name: 'Linux Launch',
        backgroundImageSrc: '/PlainBackground/LinuxLaunch.png'
    }
  }

export const coolNightThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/CoolNight/CoolNight.png',
    themeData: {
        username:"Josean Martinez",
        content: coolNightTheme,
        name: 'Cool Night',
    }
  }

export const seashellThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/Seashell/Seashell.png',
    themeData: {
      username:"Jess Wang",
      content: seaShellTheme,
      name: 'Seashell',
    }
  }

export const cyberpinkThemeData: FeaturedThemeData =     {
    imgSrc: '/FeaturedThemes/Cyberpink/Cyberpink.png',
    themeData: {
        username:"Jess Wang",
        backgroundImageSrc: '/PlainBackground/CyberPink.png',
        content: cyberPinkTheme,
        name: 'Cyberpink',
    }
  }

export const retrowaveThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/Retrowave/RetroWave.png',
    themeData: {
        username: "Jess Wang",
        backgroundImageSrc: '/PlainBackground/RetroWave.png',
        content: retroWaveTheme,
        name: 'Retrowave',
    }
  }

export const draculaThemeData: FeaturedThemeData = {
    imgSrc: '/FeaturedThemes/Dracula/Dracula.png',
    themeData: {
        username:"Jess Wang",
        content: draculaTheme,
        name: 'Dracula',
    }
  }