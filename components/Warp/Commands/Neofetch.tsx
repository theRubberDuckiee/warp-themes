import { useAppContext } from '@lib/AppContext';

import WarpAppBlock from '@components/Warp/Block';

function WarpAppCommand_Neofetch() {
	const [context, _] = useAppContext();

	return (
		<WarpAppBlock command='neofetch' execution_time='0.016s'>
			<div className='flex flex-row items-center'>
				<pre className='mr-12'>
					<span style={{ color: context.terminal_colors.normal.green }}>
						&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&apos;c.
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;,xNMM.
						<br />
						&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.OMMMMo
						<br />
						&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;OMMM0,
						<br />
						&emsp;&emsp;&emsp;.;loddo:&apos; loolloddol;.
						<br />
						&emsp;&emsp;cKMMMMMMMMMMNWMMMMMMMMMM0:
					</span>
					<span style={{ color: context.terminal_colors.normal.yellow }}>
						<br />
						&emsp;.KMMMMMMMMMMMMMMMMMMMMMMMWd.
						<br />
						&emsp;XMMMMMMMMMMMMMMMMMMMMMMMX.
					</span>
					<span style={{ color: context.terminal_colors.normal.red }}>
						<br />
						;MMMMMMMMMMMMMMMMMMMMMMMM:
						<br />
						:MMMMMMMMMMMMMMMMMMMMMMMM:
						<br />
						.MMMMMMMMMMMMMMMMMMMMMMMMX.
						<br />
						&emsp;kMMMMMMMMMMMMMMMMMMMMMMMWd.
					</span>
					<span style={{ color: context.terminal_colors.normal.magenta }}>
						<br />
						&nbsp;.XMMMMMMMMMMMMMMMMMMMMMMMMk
						<br />
						&nbsp;&nbsp;.XMMMMMMMMMMMMMMMMMMMMMMK.
					</span>
					<span style={{ color: context.terminal_colors.normal.blue }}>
						<br />
						&emsp;&emsp;&emsp;kMMMMMMMMMMMMMMMMMMMMd
						<br />
						&nbsp;&emsp;&emsp;&emsp;;KMMMMMMWXXWMMMMMMMk.
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;.cooc,. .,coo:.
					</span>
				</pre>
				<div>
					<p>
						<b style={{ color: context.terminal_colors.normal.green }}>root</b>@
						<b style={{ color: context.terminal_colors.normal.green }}>warp-themes</b>
					</p>
					<p>--------------------</p>
					<p>
						<b style={{ color: context.terminal_colors.normal.yellow }}>Host</b>: warp-themes.com
					</p>
					<p>
						<b style={{ color: context.terminal_colors.normal.yellow }}>Uptime</b>: 12 hours, 8
						mins&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					</p>
					<p>
						<b style={{ color: context.terminal_colors.normal.yellow }}>Shell</b>: zsh
					</p>
					<p>
						<b style={{ color: context.terminal_colors.normal.yellow }}>Terminal</b>: WarpTerminal
					</p>
					<br />
					<div className='flex flex-row'>
						{Object.keys(context.terminal_colors.normal).map((color) => (
							<div
								key={`normal-${color}`}
								className='h-1 w-1 p-3'
								style={{ backgroundColor: context.terminal_colors.normal[color] }}
							></div>
						))}
					</div>
					<div className='flex flex-row'>
						{Object.keys(context.terminal_colors.bright).map((color) => (
							<div
								key={`bright-${color}`}
								className='h-1 w-1 p-3'
								style={{ backgroundColor: context.terminal_colors.bright[color] }}
							></div>
						))}
					</div>
				</div>
			</div>
		</WarpAppBlock>
	);
}

export default WarpAppCommand_Neofetch;
