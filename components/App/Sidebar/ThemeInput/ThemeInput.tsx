import { ColorSwatchIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

import { useAppContext } from '@lib/AppContext';

import SidebarTitle from '../Title';

interface Props {
	themeValue: string;
	themeOnChange: (themeName: string) => void;
	detailsValue: string;
	detailsOnChange: (details: string) => void;
}

function SidebarThemeInput(props: Props) {
	const [_c, _s] = useAppContext();
	const { themeValue, themeOnChange, detailsValue, detailsOnChange } = props;

	return (
		<div className='mb-4 flex flex-col'>
			<SidebarTitle>Theme Name</SidebarTitle>
			<div className='flex h-auto w-full flex-row items-center justify-between rounded-md bg-slate-100'>
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

				<div className='tooltip' data-tip={detailsValue.slice(0, -2)}>
					<button
						className={`flex h-auto justify-center rounded-r-md border-y border-r p-2 shadow-inner ${
							detailsValue == 'lighter'
								? 'border-yellow-300 bg-yellow-400 text-yellow-900 shadow-yellow-300'
								: 'border-slate-700 bg-slate-900 text-blue-50 shadow-slate-700'
						}`}
						onClick={() => {
							if (detailsValue == 'lighter') {
								detailsOnChange('darker');
								return;
							}
							detailsOnChange('lighter');
						}}
						aria-label={`${detailsValue.slice(0, -2)} theme`}
					>
						{detailsValue == 'lighter' ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SidebarThemeInput;
