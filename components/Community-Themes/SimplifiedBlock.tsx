import React from 'react';
import SimplifiedNeofetch from './SimplifiedNeofetch';
import { ThemeData } from 'interface';

interface Props {
    theme: ThemeData;
}

function WarpAppCommand_Neofetch(props: Props) {
	return (
		<div className='flex flex-row items-center' >
			<SimplifiedNeofetch theme={props.theme}/>
		</div>
	);
}

export default WarpAppCommand_Neofetch;
