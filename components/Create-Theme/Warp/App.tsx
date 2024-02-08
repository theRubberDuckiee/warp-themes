import { useAppContext } from '@lib/AppContext';
import WarpAppPrompt from './Prompt';
import WarpAppCommand_Neofetch from './Neofetch';
import WarpAppNavbar from './Navbar/Navbar';

function WarpApp() {
	const [context, _setContext] = useAppContext();

	return (
		<div
			className='h-fit min-w-fit select-none rounded-md leading-5 drop-shadow-lg lg:max-w-3xl'
			style={{ backgroundColor: context.background.color, color: context.foreground }}
		>
			<WarpAppNavbar />
			<WarpAppCommand_Neofetch />
			<WarpAppPrompt />
		</div>
	);
}

export default WarpApp;
