import { WarpAppBlockDivider } from '../Block';
import WarpAppNavbarTab from '../Tab';
import WarpAppNavbarSystemButtons from './SystemButton';
import React from 'react';

function WarpAppNavbar() {
	return (
		<div className='flex-co relative flex'>
			<div className='z-20 flex flex-row items-center'>
				<div className='flex h-full items-start justify-center p-2'>
					<WarpAppNavbarSystemButtons type='close' />
					<WarpAppNavbarSystemButtons type='min' />
					<WarpAppNavbarSystemButtons type='max' />
				</div>
				<div className='flex flex-row'>
					<WarpAppNavbarTab title='~/warp-themes' active />
				</div>
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export default WarpAppNavbar;
