import { useAppContext } from '@lib/AppContext';
import WarpAppPrompt from './Prompt';
import WarpAppCommand_Neofetch from './Neofetch';
import WarpAppNavbar from './Navbar/Navbar';
import React from 'react';

function WarpApp() {
	const [context] = useAppContext();

	return (
		<div
			className='h-fit min-w-fit select-none rounded-md leading-5 drop-shadow-lg lg:max-w-3xl'
			style={{ backgroundColor: context.themeData.content.background, color: context.themeData.content.foreground }}
		>
			<WarpAppNavbar />
			<WarpAppCommand_Neofetch />
			<WarpAppPrompt />
		</div>
	);
}

export default WarpApp;
