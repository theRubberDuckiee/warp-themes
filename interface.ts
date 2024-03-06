// Define the interface
export interface Theme {
    foreground: string,
    background: any,
    background_image?: {
        path: string,
        opacity: number,
    }
    accent: string,
    details: string,
    terminal_colors: {
        bright: {
            black: string,
            blue: string,
            cyan: string,
            green: string,
            magenta: string,
            red: string,
            white: string,
            yellow: string
        },
        normal: {
            black: string,
            blue: string,
            cyan: string,
            green: string,
            magenta: string,
            red: string,
            white: string,
            yellow: string
        }
    }
}

export interface ThemeData {
    name: string,
    content: Theme,
    themeUser: User,
    counter: number,
    backgroundImageSrc?: string
    tId?: string
}

export interface AppInterface {
    themeData: ThemeData,
    user: User,
}

export interface FeaturedThemeData {
    themeData: ThemeData,
    imgSrc: string
}

export interface User {
    displayName: string,
    photoURL: string,
    uid: string,
    description: string,
}