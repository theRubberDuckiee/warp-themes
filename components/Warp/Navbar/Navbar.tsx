import { WarpAppBlockDivider } from '../Block';
import WarpAppNavbarSystemButtons from './SystemButton';
import WarpAppNavbarTab from './Tab';

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
					<WarpAppNavbarTab title='~/warp-themes/companion' />
				</div>
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export default WarpAppNavbar;
