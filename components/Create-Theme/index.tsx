import { ReactNode, useState } from 'react';
import Download from './Download';
import React from 'react';
import AppDialogITermColors from '@components/ITerm2';
import WarpYaml from '@components/WarpYaml';

interface Props {
	Navbar: ReactNode;
	Sidebar: ReactNode;
	WarpApp: ReactNode;
}

function CreateThemeLayout(props: Props) {
	const [iTerm2IsOpen, setIsITerm2Open] = useState(false)
	const [isYamlOpen, setIsYamlOpen] = useState(false)
	return (
		<div className='flex h-screen flex-col bg-slate-100 sm:bg-white overflow-y-hidden'>
			<div className='w-full border-b z-20 hidden sm:block'>{props.Navbar}</div>
			<div className='flex h-full flex-row z-10'>
				<div className='w-auto border-r hidden sm:block'>{props.Sidebar}</div>
				<div className='w-full flex flex-col pt-20 scale-50 sm:scale-100 justify-center items-center flex-grow bg-slate-100'>
					<div className='w-full flex justify-center mb-8'>
						{props.WarpApp}
					</div>
					<Download/>
					<button onClick={() => setIsITerm2Open(true)} className='btn btn-primary gap-2 mt-8'>
						Upload ITerm2 Theme
					</button>
					<button onClick={() => setIsYamlOpen(true)} className='btn btn-primary gap-2 mt-8'>
						Upload Warp Theme
					</button>
					<AppDialogITermColors _open={iTerm2IsOpen} _onClose={() => setIsITerm2Open(false)} />
					<WarpYaml _open={isYamlOpen} _onClose={() => setIsYamlOpen(false)} />
					<div className='alert alert-warning shadow-lg landscape:hidden lg:hidden scale-150 sm:scale-100 mt-12'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current flex-shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
								/>
							</svg>
							<span>Warning: Please rotate your device!</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateThemeLayout;
