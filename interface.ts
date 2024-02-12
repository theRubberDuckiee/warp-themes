// Define the interface
export interface Theme {
    foreground: string,
    background: string,
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
