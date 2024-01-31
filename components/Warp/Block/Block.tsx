import { ReactNode } from 'react';

interface Props {
	command: string;
	execution_time: string;
	children: ReactNode | string;
}

function WarpAppBlockDivider() {
	return <div className='absolute bottom-0 z-10 w-full bg-gray-500/30 pt-0.5 mix-blend-difference '></div>;
}

function WarpAppBlock(props: Props) {
	const { command, execution_time, children } = props;

	return (
		<div className='relative pt-3 pb-4 font-mono'>
			<div className='pl-4'>
				<p className='text-xs font-thin opacity-60'>~/warp-themes ({execution_time})</p>
				<p className='pb-1 text-base font-bold'>{command}</p>
				{children}
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export { WarpAppBlock, WarpAppBlockDivider };
export default WarpAppBlock;
