import { HexColorPicker } from 'react-colorful';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
	name: string,
	color: string,
	setColor:  Dispatch<SetStateAction<string>>
}

function ColorInput(props: Props) {

	return (
		<div className='my-4 flex flex-row items-center justify-evenly bg-white text-center'>
			<div className='flex flex-col'>
				<div className='flex h-auto w-32 flex-col rounded-xl border drop-shadow-sm'>
					<HexColorPicker color={props.color} onChange={props.setColor} />
					<div className='mt-2 text-left px-1'>
						<label className='whitespace-nowrap text-slate-600 px-1'>{props.name}</label> <br />
						<input
							type='text'
							className='mb-3 bg-inherit font-medium outline-none rounded-md hover:bg-slate-200 focus:bg-slate-300 w-20 px-1 transition ease-in-out duration-300'
							value={props.color}
							spellCheck={false}
							onChange={(e) => {
								props.setColor(e.target.value)}}
							aria-label={props.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColorInput;
