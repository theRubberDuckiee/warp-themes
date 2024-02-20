import { useAppContext } from '@lib/AppContext';

interface Props {
    theme: any;
}

function SimplifiedPrompt(props: Props) {

	return (
		<div className=' pl-4 pt-3 pb-4 font-jetbrainsmononerdfont'>
			<p className='text-left text-sm font-semibold' style={{ color: props.theme.content.terminal_colors.normal.magenta }}>
				~/warp-themes
				<span style={{ color: props.theme.content.terminal_colors.normal.green }}>
					{' '}
					git:(<span style={{ color: props.theme.content.terminal_colors.normal.yellow }}>main</span>)
				</span>
			</p>
			<p className='pt-2 pb-2 text-sm'>
			</p>
		</div>
	);
}

export default SimplifiedPrompt;
