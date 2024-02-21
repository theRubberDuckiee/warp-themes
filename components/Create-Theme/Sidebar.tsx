import { useState, useEffect, Fragment } from 'react';
import { useAppContext } from '@lib/AppContext';

import ColorInput from './ColorInput';
import { Tab } from '@headlessui/react';
import ThemeInput from './ThemeInput';

function AppSidebar() {
	const [context, setContext] = useAppContext();

	const styles = [
		'w-full rounded-md outline-none bg-gray-100',
		'w-full rounded-md bg-white py-2 font-semibold text-gray-200 bg-black drop-shadow-sm border border-gray-400 outline-none',
	];

	return (
		<div className='px-4 pt-20 h-full overflow-y-scroll w-fit bg-base-100 text-base-content z-40'>
			<ThemeInput
				themeValue={context.name}
				themeOnChange={(n) => setContext({ ...context, name: n })}
				detailsValue={context.content.details}
				detailsOnChange={(d) => setContext({ ...context, details: d })}
				usernameValue={context.username}
				usernameOnChange={(u) => setContext({ ...context, username: u })}
			/>
			<h2 className='text-lg font-medium text-gray-900'>General Colors</h2>
            <div className='mb-4 flex flex-row space-x-6'>
                <ColorInput
                    name='Accent'
                    color={context.content.accent}
                    setColor={(c) => setContext({ ...context, content: { ...context.content, accent: c } })}
                />
                <ColorInput
                    name='Background'
                    color={context.content.background}
                    setColor={(c) => setContext({ ...context, content: { ...context.content, background: c } })}
                />
                <ColorInput
                    name='Foreground'
                    color={context.content.foreground}
                    setColor={(c) => setContext({ ...context, content: { ...context.content, foreground: c } })}
                />
            </div>
			<h2 className='text-lg font-medium text-gray-900'>Terminal Colors</h2>
			<Tab.Group>
				<Tab.List className='flex flex-row justify-between space-x-4 rounded-lg py-4 text-lg'>
					<Tab as={Fragment}>
						{({ selected }) => {
							return <button className={selected ? styles[1] : styles[0]}>Normal</button>;
						}}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => {
							return <button className={selected ? styles[1] : styles[0]}>Bright</button>;
						}}
					</Tab>
					<hr />
				</Tab.List>
				<Tab.Panels className='rounded-md py '>
					<Tab.Panel>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Black'
								color={context.content.terminal_colors.normal.black}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, black: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Red'
								color={context.content.terminal_colors.normal.red}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, red: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Green'
								color={context.content.terminal_colors.normal.green}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, green: c },
										},
									},
									})
								}
							/>
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Yellow'
								color={context.content.terminal_colors.normal.yellow}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, yellow: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Blue'
								color={context.content.terminal_colors.normal.blue}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, blue: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Magenta'
								color={context.content.terminal_colors.normal.magenta}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, magenta: c },
										},
									},
									})
								}
							/>
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Cyan'
								color={context.content.terminal_colors.normal.cyan}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, cyan: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='White'
								color={context.content.terminal_colors.normal.white}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											normal: { ...context.content.terminal_colors.normal, white: c },
										},
										},
									})
								}
							/>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Bright Black'
								color={context.content.terminal_colors.bright.black}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, black: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Bright Red'
								color={context.content.terminal_colors.bright.red}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, red: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Bright Green'
								color={context.content.terminal_colors.bright.green}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, green: c },
										},
									},
									})
								}
							/>
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Bright Yellow'
								color={context.content.terminal_colors.bright.yellow}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, yellow: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Bright Blue'
								color={context.content.terminal_colors.bright.blue}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, blue: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Bright Magenta'
								color={context.content.terminal_colors.bright.magenta}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, magenta: c },
										},
									},
									})
								}
							/>
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput
								name='Bright Cyan'
								color={context.content.terminal_colors.bright.cyan}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, cyan: c },
										},
									},
									})
								}
							/>
							<ColorInput
								name='Bright White'
								color={context.content.terminal_colors.bright.white}
								setColor={(c) =>
									setContext({
										...context,
										content: {
                                            ...context.content,
										terminal_colors: {
											...context.content.terminal_colors,
											bright: { ...context.content.terminal_colors.bright, white: c },
										},
									},
									})
								}
							/>
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

export default AppSidebar;
