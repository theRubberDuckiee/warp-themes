import { ReactNode } from 'react';

interface Props {
	command: string;
	execution_time: string;
	children: ReactNode | string;
}

function WarpAppBlockDivider() {
    return (
        <div className='absolute bottom-0 z-10 w-full pt-0.5'>
            <hr className='w-full bg-white' />
        </div>
    );
}

function WarpAppBlock(props: Props) {
	const { command, execution_time, children } = props;

	return (
		<div className='relative pt-3 pb-4 font-jetbrainsmononerdfont'>
			<div className='pl-4 text-left'>
				<p className='text-xs font-bold opacity-60'>~/Documents ({execution_time})</p>
				<p className='pb-1 text-base font-extrabold'>{command}</p>
				{children}
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export { WarpAppBlock, WarpAppBlockDivider };
export default WarpAppBlock;
