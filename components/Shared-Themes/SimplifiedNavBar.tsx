import { WarpAppBlockDivider } from "@components/Warp/Block";
import WarpAppNavbarSystemButtons from "@components/Warp/Navbar/SystemButton";
import WarpAppNavbarTab from "@components/Warp/Navbar/Tab";

interface Props {
    theme: any;
}

function SimplifiedNavBar(props: Props) {
	return (
		<div className='flex-co relative flex'>
			<div className='z-20 flex flex-row items-center'>
				<div className='flex h-full items-start justify-center p-2'>
					<WarpAppNavbarSystemButtons type='close' />
					<WarpAppNavbarSystemButtons type='min' />
					<WarpAppNavbarSystemButtons type='max' />
				</div>
				<div className='flex flex-row'>
					<WarpAppNavbarTab title='~/Documents' active />
				</div>
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export default SimplifiedNavBar;
