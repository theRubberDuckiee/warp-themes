import { useAppContext } from '@lib/AppContext';
import WarpAppCommand_Neofetch from './Commands';
import WarpAppNavbar from './Navbar';
import WarpAppPrompt from './Prompt';

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
