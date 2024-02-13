import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import { DownloadIcon } from '@heroicons/react/outline';
import WarpAppNavbarSystemButtons from '@components/Create-Theme/Warp/Navbar/SystemButton';
import { Dialog, Transition } from '@headlessui/react';
import YAML from 'json-to-pretty-yaml';
import toast from 'react-hot-toast';
import { DownloadDialog } from '@components/Create-Theme/DownloadDialog';

function Download() {
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
						username: context.username,
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

	return (
		<>
			<button onClick={prepareDownload} className='btn btn-primary gap-2'>
				<DownloadIcon className='w-6 h-6' />
				Download
			</button>

			<DownloadDialog isOpen={isOpen} setIsOpen={setIsOpen} tId={tId}/>
		</>
	);
}

export default Download;
