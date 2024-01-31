import { createContext, useContext, useState } from 'react';

const defaultContext = {
	name: 'warp_dark',
	accent: {
		useGradient: false,
		gradient: {
			from: '',
			to: '',
		},
		color: '#00c2ff',
	},
	background: {
		useGradient: false,
		gradient: {
			from: '',
			to: '',
		},
		color: '#000000',
	},
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
	openSettingsDialog: false,
	openAboutDialog: false,
	openiTermDialog: false,
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
