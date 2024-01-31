import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import { DownloadIcon } from '@heroicons/react/outline';
import WarpAppNavbarSystemButtons from '@components/Warp/Navbar/SystemButton';
import { Dialog, Transition } from '@headlessui/react';
import YAML from 'json-to-pretty-yaml';
import toast from 'react-hot-toast';

function AppDialogDownload() {
	const [context, _] = useAppContext();
	const [isOpen, setIsOpen] = useState(false);
	const [tId, setTId] = useState(null);

	async function prepareDownload() {
		toast.custom(
			(t) => (
				<Transition
					show={t.visible}
					enter='transition-opacity duration-75'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='bg-white px-6 py-4 shadow-md rounded-md animate-pulse'>
						<p>Preparing download...</p>
					</div>
				</Transition>
			),
			{
				duration: 3000,
			}
		);

		try {
			const json = await (
				await fetch('/api/create', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: context.name,
						content: {
							accent: context.accent.color,
							background: context.background.color,
							foreground: context.foreground,
							details: context.details,
							terminal_colors: context.terminal_colors,
						},
					}),
				})
			).json();

			setTId(json.tId);
		} catch (_) {
			setTId(`h/${hashTheme()}`);
		}

		// finally open the modal
		setIsOpen(true);
	}

	function hashTheme() {
		const name = context.name;
		const theme = YAML.stringify({
			accent: context.accent.color,
			background: context.background.color,
			foreground: context.foreground,
			details: context.details,
			terminal_colors: {
				normal: {
					black: context.terminal_colors.normal.black,
					red: context.terminal_colors.normal.red,
					green: context.terminal_colors.normal.green,
					yellow: context.terminal_colors.normal.yellow,
					blue: context.terminal_colors.normal.blue,
					magenta: context.terminal_colors.normal.magenta,
					cyan: context.terminal_colors.normal.cyan,
					white: context.terminal_colors.normal.white,
				},
				bright: {
					black: context.terminal_colors.bright.black,
					red: context.terminal_colors.bright.red,
					green: context.terminal_colors.bright.green,
					yellow: context.terminal_colors.bright.yellow,
					blue: context.terminal_colors.bright.blue,
					magenta: context.terminal_colors.bright.magenta,
					cyan: context.terminal_colors.bright.cyan,
					white: context.terminal_colors.bright.white,
				},
			},
		});
		return Buffer.from(`${name};${theme}`).toString('base64');
	}

	function downloadTheme() {
		const theme = YAML.stringify({
			accent: context.accent.color,
			background: context.background.color,
			foreground: context.foreground,
			details: context.details,
			terminal_colors: {
				normal: {
					black: context.terminal_colors.normal.black,
					red: context.terminal_colors.normal.red,
					green: context.terminal_colors.normal.green,
					yellow: context.terminal_colors.normal.yellow,
					blue: context.terminal_colors.normal.blue,
					magenta: context.terminal_colors.normal.magenta,
					cyan: context.terminal_colors.normal.cyan,
					white: context.terminal_colors.normal.white,
				},
				bright: {
					black: context.terminal_colors.bright.black,
					red: context.terminal_colors.bright.red,
					green: context.terminal_colors.bright.green,
					yellow: context.terminal_colors.bright.yellow,
					blue: context.terminal_colors.bright.blue,
					magenta: context.terminal_colors.bright.magenta,
					cyan: context.terminal_colors.bright.cyan,
					white: context.terminal_colors.bright.white,
				},
			},
		});
		const objectURL = window.URL.createObjectURL(new Blob([theme], { type: 'application/yaml' }));
		const downloadLink = document.createElement('a');
		downloadLink.href = objectURL;
		downloadLink.download = `${context.name}.yaml`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();
		window.URL.revokeObjectURL(objectURL);
	}

	return (
		<>
			<button onClick={prepareDownload} className='btn btn-primary gap-2'>
				<DownloadIcon className='w-6 h-6' />
				Download
			</button>

			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='absolute z-30'>
				<div className='fixed inset-0 bg-black/20 backdrop-blur-sm' aria-hidden='true'></div>

				<div className='fixed inset-0 flex items-center justify-center p-4'>
					<Dialog.Panel className='mx-auto max-w-5xl w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
						<Dialog.Title className='text-3xl font-semibold mb-4'>Download</Dialog.Title>

						<div>
							<span className='badge'>Recommended</span>
							<h2 className='text-2xl font-medium'>Automatic Installation</h2>
							<div className='bg-black overflow-x-scroll whitespace-nowrap text-white px-2 py-3 select-all rounded-md shadow-md my-4'>
								<div className='flex flex-row items-center mb-3'>
									<div className='flex h-full items-start justify-center'>
										<WarpAppNavbarSystemButtons type='close' />
										<WarpAppNavbarSystemButtons type='min' />
										<WarpAppNavbarSystemButtons type='max' />
									</div>
								</div>
								<code className='pr-3 pl-1'>
									<span
										style={{ color: context.terminal_colors.normal.magenta }}
										className='font-semibold'
									>
										curl
									</span>{' '}
									<span style={{ color: context.terminal_colors.bright.black }}>-s -N</span>{' '}
									<span style={{ color: context.terminal_colors.normal.blue }}>
										'https://warp-themes.com/d/{tId}'
									</span>{' '}
									<span style={{ color: context.terminal_colors.bright.black }}>|</span>{' '}
									<span style={{ color: context.terminal_colors.normal.magenta }}>bash</span>
								</code>
							</div>
							<div className='w-full flex flex-row justify-evenly'>
								<label
									className='btn bg-black btn-wide swap text-lg'
									role='button'
									onClick={() => {
										navigator.clipboard.writeText(
											`curl -s -N 'https://warp-themes.com/d/${tId}' | bash`
										);
										setTimeout(() => {
											//@ts-ignore
											document.getElementById('copied-curl-code').checked = false;
										}, 1500);
									}}
								>
									<input type='checkbox' id='copied-curl-code' />
									<div className='swap-on'>✅ Copied</div>
									<div className='swap-off'>📋 Copy</div>
								</label>
								<a className='btn btn-outline btn-wide text-lg' href={`https://warp-themes.com/d/${tId}`} target="_blank">🔍 Inspect Source</a>
							</div>
						</div>
						<div className='divider'>OR</div>
						<div className='text-gray-700'>
							<h2 className='text-2xl font-medium mb-3'>Manual Installation</h2>
							<h3 className='text-xl py-3'>Instructions</h3>
							<ol className='list-decimal ml-4'>
								<li>Download the file</li>
								<li>
									Place the theme file into{' '}
									<code className='text-sm bg-black text-white px-2 rounded'>~/.warp/themes/</code>
								</li>
								<li>Restart Warp</li>
								<li>
									Open the Command Palette (<kbd className='kbd kbd-sm'>⌘</kbd> +{' '}
									<kbd className='kbd kbd-sm'>P</kbd>) and search for <i>Open Theme Picker</i>
								</li>
								<li>Enjoy your new theme ✨</li>
							</ol>
							<button
								onClick={downloadTheme}
								className='btn mt-2 w-full btn-ghost flex items-center gap-2'
							>
								<DownloadIcon className='w-6 h-6' />
								Download file
							</button>
						</div>

						<div className='divider'></div>
						<p className='text-xs text-gray-500 text-center'>
							{tId && !tId.startsWith('h/') ? (
								<>
									<span className='text-gray-600'>🧙🏻‍♂️ Tip: </span> Visit{' '}
									<a
										href={`https://warp-themes.com/d/${tId}?raw=true`}
										target='_blank'
										className='text-blue-500'
									>
										https://warp-themes.com/d/{tId}
										<span className='font-medium text-blue-700'>?raw=true</span>
									</a>
									, to view the raw YAML file
								</>
							) : (
								<>
									<span className='text-red-600'>⚠️ Note: </span> We're currently experiencing some
									issues with our database provider. That's why we currently aren't able to provide
									our services in full functionality. <br />
									We apologize for the inconvenience.
								</>
							)}
						</p>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export default AppDialogDownload;
