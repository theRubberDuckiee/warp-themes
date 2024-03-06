import { ColorSwatchIcon, CubeIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
	themeValue: string;
	themeOnChange: (themeName: string) => void;
	usernameValue: string;
	usernameOnChange: (username: string) => void;
}

function SidebarThemeInput({themeValue, themeOnChange, usernameValue, usernameOnChange}: Props) {
	return (
		<div className='mt-4 mb-8 flex flex-col'>
			<h2 className='mb-2 text-lg font-medium text-gray-900'>Theme Name</h2>
			<div className='flex mb-6 h-12 w-full flex-row items-center justify-between rounded-md bg-slate-100'>
				<div className='flex h-full items-center justify-center rounded-l-md px-2'>
					<ColorSwatchIcon className='h-6 w-6 text-gray-500' />
				</div>

				<input
					type='text'
					className='h-full w-full bg-inherit outline-none placeholder:text-slate-500'
					placeholder='your_theme_name'
					aria-label='Theme Name'
					spellCheck={false}
					value={themeValue}
					onChange={(e) =>
						e.target.value.length <= 30
							? themeOnChange(e.target.value.replaceAll(' ', '_').replaceAll(/\W/g, ''))
							: null
					}
				/>
			</div>
			<h2 className='mb-2 text-lg font-medium text-gray-900'>Your display name</h2>
			<div className='flex h-12 w-full flex-row items-center justify-between rounded-md bg-slate-100'>
				<div className='flex h-full items-center justify-center rounded-l-md px-2'>
					<CubeIcon className='h-6 w-6 text-gray-500' />
				</div>

				<input
					type='text'
					className='h-full w-full bg-inherit outline-none placeholder:text-slate-500'
					placeholder='Zach Lloyd'
					aria-label='Username'
					spellCheck={false}
					value={usernameValue}
					onChange={(e) =>
						e.target.value.length <= 30
							? usernameOnChange(e.target.value.replaceAll(' ', '_').replaceAll(/\W/g, ''))
							: null
					}
				/>
			</div>
		</div>
	);
}

export default SidebarThemeInput;
