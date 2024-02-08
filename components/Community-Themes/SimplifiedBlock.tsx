import { useAppContext } from '@lib/AppContext';

import WarpAppBlock from '@components/Create-Theme/Warp/Block';

interface Props {
    theme: any;
}

function WarpAppCommand_Neofetch(props: Props) {
	return (
		<WarpAppBlock command='neofetch' execution_time='0.016s'>
			<div className='flex flex-row items-center'>
                hi
			</div>
		</WarpAppBlock>
	);
}

export default WarpAppCommand_Neofetch;
