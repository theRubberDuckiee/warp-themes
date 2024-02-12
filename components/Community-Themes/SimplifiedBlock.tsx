import { useAppContext } from '@lib/AppContext';

import WarpAppBlock from '@components/Create-Theme/Warp/Block';
import SimplifiedNeofetch from './SimplifiedNeofetch';

interface Props {
    theme: any;
}

function WarpAppCommand_Neofetch(props: Props) {
	return (
		<div className='flex flex-row items-center' >
			<SimplifiedNeofetch theme={props.theme}/>
		</div>
	);
}

export default WarpAppCommand_Neofetch;
