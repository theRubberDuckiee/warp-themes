import { ReactNode, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import AppDialogAbout from '../Dialogs/About';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/outline';

interface Props {
	Navbar: ReactNode;
	Sidebar: ReactNode;
	WarpApp: ReactNode;
}

function AppLayout(props: Props) {
	const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

	useEffect(() => {
		window.onbeforeunload = function () {
			return true;
		};

		const toastId = toast.custom((t) => (
			<Transition
				show={t.visible}
				enter='transition-opacity duration-75'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity duration-150'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
			>
				<div className='bg-white px-6 py-4 shadow-md rounded-md'>
					<p>
						Welcome to <span className='font-medium'>Warp-Themes</span>! 👋 <br />
						<i>Warp-Themes</i> is a theme builder for{' '}
						<a href='https://warp.dev' target='_blank' className='text-blue-500 hover:text-blue-700'>
							Warp
						</a>
						.
					</p>
					<div className='flex gap-2 mt-1'>
						<label
							className='btn flex-grow btn-ghost text-primary modal-button'
							onClick={() => {
								setIsAboutDialogOpen(true);
								toast.dismiss(toastId);
							}}
						>
							Learn more
						</label>
						<button onClick={() => toast.dismiss(toastId)} className='btn btn-ghost flex-grow text-red-500'>
							Dismiss
						</button>
					</div>
				</div>
			</Transition>
		));
		setTimeout(() => {
			const companionToast = toast.custom((t) => (
				<Transition
					show={t.visible}
					enter='transition-opacity duration-75'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='bg-white px-6 py-4 shadow-md rounded-md text-right'>
						<p>
							We also got a VS-Code extension called <span className='font-semibold'>Warp-Companion</span>{' '}
							🧙🏻‍♂️
							<br />
							It <i>synchronizes</i> your VS-Code theme with Warp ✨
						</p>
						<div className='flex mt-1'>
							<Link href='/companion' passHref>
								<a target='_blank' className='btn flex-grow btn-ghost text-primary gap-2'>
									Try it out now <ExternalLinkIcon className='w-4 h-4' />
								</a>
							</Link>
							<button
								onClick={() => toast.dismiss(companionToast)}
								className='btn btn-ghost flex-grow text-red-500'
							>
								Dismiss
							</button>
						</div>
					</div>
				</Transition>
			));
		}, 10000);
	}, []);

	return (
		<div className='flex h-screen flex-col bg-slate-100 sm:bg-white overflow-y-hidden'>
			<AppDialogAbout _open={isAboutDialogOpen} _onClose={() => setIsAboutDialogOpen(false)} />
			<div className='w-full border-b z-20 hidden sm:block'>{props.Navbar}</div>
			<div className='flex h-full flex-row z-10'>
				<div className='w-auto border-r hidden sm:block'>{props.Sidebar}</div>
				<div className='w-full flex flex-col pt-20 scale-50 sm:scale-100 justify-center items-center flex-grow bg-slate-100'>
					{props.WarpApp}
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
			<Toaster
				containerClassName='z-20 hidden sm:block'
				position='bottom-right'
				toastOptions={{ duration: 10000 }}
			/>
		</div>
	);
}

export default AppLayout;
