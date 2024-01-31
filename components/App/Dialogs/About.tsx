import { useState } from 'react';
import { ExternalLinkIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';

interface Props {
	_open: boolean;
	_onClose: (val: boolean) => void;
}

function AppDialogAbout(props: Props) {
	return (
		<>
			<Dialog open={props._open} onClose={props._onClose} className='absolute z-30'>
				<div className='fixed inset-0 bg-black/20 backdrop-blur-sm' aria-hidden='true'></div>

				<div className='fixed inset-0 flex items-center justify-center p-4'>
					<Dialog.Panel className='mx-auto  w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
						<Dialog.Title className='text-3xl font-semibold mb-4'>About</Dialog.Title>
						<p className='mb-2'>
							<span className='text-primary font-medium'>Warp-Themes</span> is a visual theme builder for the{' '}
							<a href='https://warp.dev/' target='_blank' className='text-blue-500 focus:outline-none'>
								Warp
							</a>{' '}
							Terminal.
						</p>
						<h4 className='text-xl font-semibold'>Features</h4>
						<ul className='list-disc list-inside'>
							<li>
								<span className='font-medium'>Visually</span> create your theme
							</li>
							<li>
								<span className='font-medium'>Automatic Installation</span> process provided out of the box
							</li>
							<li className='mb-2'>
								Make <span className='font-medium'>iTerm Color Schemes</span> compatible with Warp
							</li>
						</ul>
						<h4 className='text-xl font-semibold mb-1'>VS-Code Extension</h4>
						<p className='mb-2'>
							We also offer a small extension for VS-Code called{' '}
							<a
								href='https://github.com/haackt/warp-companion'
								target='_blank'
								className='text-blue-500 focus:outline-none'
							>
								Warp-Companion
							</a>
							. <br />
							It synchronizes your VS-Code Theme with Warp.
						</p>
						<h4 className='text-xl font-semibold mb-1'>Useful links</h4>
						<ul className='text-gray-600'>
							<li className='hover:text-gray-900'>
								<a
									href='https://www.warp.dev/'
									target='_blank'
									className='flex items-center flex-row space-x-2'
									rel='noopener noreferrer'
								>
									<span>Warp - The terminal for the 21st century</span>
									<ExternalLinkIcon className='w-4 h-4' />
								</a>
							</li>
							<li className='hover:text-gray-900'>
								<a
									href='https://docs.warp.dev/features/themes'
									target='_blank'
									className='flex items-center flex-row space-x-2'
									rel='noopener noreferrer'
								>
									<span>Themes - Warp Documentation</span>
									<ExternalLinkIcon className='w-4 h-4' />
								</a>
							</li>
							<li className='hover:text-gray-900'>
								<a
									href='https://github.com/haackt/warp-companion'
									target='_blank'
									className='flex items-center flex-row space-x-2'
									rel='noopener noreferrer'
								>
									<span>Warp-Companion - VS-Code Extension</span>
									<ExternalLinkIcon className='w-4 h-4' />
								</a>
							</li>
						</ul>
						<div className='divider'></div>
						<p className='text-xs text-center text-gray-700'>
							Built with Next.js, hosted on Vercel <br />
							&copy; 2022 Torben Haack
						</p>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export default AppDialogAbout;
