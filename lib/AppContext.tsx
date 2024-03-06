import { Theme, ThemeData, AppInterface } from 'interface/interface';
import { createContext, useContext, useState } from 'react';
import React from 'react';

const defaultTheme: Theme = {
	accent: '#00c2ff',
	background: '#000000',
	foreground: '#ffffff',
	details: 'darker',
	terminal_colors: {
		normal: {
			black: '#616161',
			red: '#ff8272',
			green: '#b4fa72',
			yellow: '#fefdc2',
			blue: '#a5d5fe',
			magenta: '#ff8ffd',
			cyan: '#d0d1fe',
			white: '#f1f1f1',
		},
		bright: {
			black: '#8e8e8e',
			red: '#ffc4bd',
			green: '#d6fcb9',
			yellow: '#fefdd5',
			blue: '#c1e3fe',
			magenta: '#ffb1fe',
			cyan: '#e5e6fe',
			white: '#feffff',
		},
	},
}

const defaultContext: AppInterface = {
	themeData: {
		name: 'warp_dark',
		content: defaultTheme,
		themeUser: null,
		counter: 0,
	},
	user: null,
};

const AppContext = createContext<any>(defaultContext);

function AppWrapper({ children }) {
	const [context, setContext] = useState(defaultContext);

	return <AppContext.Provider value={[context, setContext]}>{children}</AppContext.Provider>;
}

function useAppContext() {
	return useContext(AppContext);
}

export { useAppContext };
export default AppWrapper;
