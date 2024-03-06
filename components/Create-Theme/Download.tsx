import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import { DownloadIcon } from '@heroicons/react/outline';
import YAML from 'json-to-pretty-yaml';
import React from 'react';
import { DownloadTheme } from '@components/Shared/DownloadTheme';

function Download() {
	const [context, setContext] = useAppContext();
	const [isOpen, setIsOpen] = useState(false);
	const [tId, setTId] = useState(null);

	function hashTheme() {
		const name = context.name;
		const theme = YAML.stringify({
			accent: context.themeData.content.accent,
			background: context.themeData.content.background,
			foreground: context.themeData.content.foreground,
			details: context.themeData.content.details,
			terminal_colors: {
				normal: {
					black: context.themeData.content.terminal_colors.normal.black,
					red: context.themeData.content.terminal_colors.normal.red,
					green: context.themeData.content.terminal_colors.normal.green,
					yellow: context.themeData.content.terminal_colors.normal.yellow,
					blue: context.themeData.content.terminal_colors.normal.blue,
					magenta: context.themeData.content.terminal_colors.normal.magenta,
					cyan: context.themeData.content.terminal_colors.normal.cyan,
					white: context.themeData.content.terminal_colors.normal.white,
				},
				bright: {
					black: context.themeData.content.terminal_colors.bright.black,
					red: context.themeData.content.terminal_colors.bright.red,
					green: context.themeData.content.terminal_colors.bright.green,
					yellow: context.themeData.content.terminal_colors.bright.yellow,
					blue: context.themeData.content.terminal_colors.bright.blue,
					magenta: context.themeData.content.terminal_colors.bright.magenta,
					cyan: context.themeData.content.terminal_colors.bright.cyan,
					white: context.themeData.content.terminal_colors.bright.white,
				},
			},
		});
		return Buffer.from(`${name};${theme}`).toString('base64');
	}

	return (
		<>
			<button onClick={() => setIsOpen(true)} className='btn btn-primary gap-2'>
				<DownloadIcon className='w-6 h-6' />
				Download
			</button>

			<DownloadTheme isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}

export default Download;
