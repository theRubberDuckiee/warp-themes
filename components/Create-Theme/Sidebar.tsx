import { useAppContext } from '@lib/AppContext';
import React, { Fragment } from 'react';
import ColorInput from './ColorInput';
import { Tab } from '@headlessui/react';
import ThemeInput from './ThemeInput';

function AppSidebar() {
    const [context, setContext] = useAppContext<AppInterface>();

	const styles = [
		'w-full rounded-md outline-none bg-gray-100',
		'w-full rounded-md bg-white py-2 font-semibold text-gray-200 bg-black drop-shadow-sm border border-gray-400 outline-none',
	];

    return (
        <div className='px-4 pt-20 h-full overflow-y-scroll w-fit bg-base-100 text-base-content z-40'>
            <ThemeInput
                themeValue={context.themeData.name}
                themeOnChange={(n) => setContext({ ...context, themeData: { ...context.themeData, name: n } })}
                usernameValue={context.user?.displayName ?? 'Anon'}
                usernameOnChange={(u) => setContext({ ...context, themeData: { ...context.themeData, themeUser: { ...context.themeData.themeUser, displayName: u } } })}
            />
            <h2 className='text-lg font-medium text-gray-900'>General Colors</h2>
            <div className='mb-4 flex flex-row space-x-6'>
                <ColorInput
                    name='Accent'
                    color={context.themeData.content.accent}
                    setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, accent: c } } })}
                />
                <ColorInput
                    name='Background'
                    color={context.themeData.content.background}
                    setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, background: c } } })}
                />
                <ColorInput
                    name='Foreground'
                    color={context.themeData.content.foreground}
                    setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, foreground: c } } })}
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
                                color={context.themeData.content.terminal_colors.normal.black}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, black: c } } } } })}
                            />
                            <ColorInput
                                name='Red'
                                color={context.themeData.content.terminal_colors.normal.red}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, red: c } } } } })}
                            />
                            <ColorInput
                                name='Green'
                                color={context.themeData.content.terminal_colors.normal.green}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, green: c } } } } })}
                            />
                        </div>
                        <div className='flex flex-row space-x-6'>
                            <ColorInput
                                name='Yellow'
                                color={context.themeData.content.terminal_colors.normal.yellow}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, yellow: c } } } } })}
                            />
                            <ColorInput
                                name='Blue'
                                color={context.themeData.content.terminal_colors.normal.blue}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, blue: c } } } } })}
                            />
                            <ColorInput
                                name='Magenta'
                                color={context.themeData.content.terminal_colors.normal.magenta}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, magenta: c } } } } })}
                            />
                        </div>
                        <div className='flex flex-row space-x-6'>
                            <ColorInput
                                name='Cyan'
                                color={context.themeData.content.terminal_colors.normal.cyan}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, cyan: c } } } } })}
                            />
                            <ColorInput
                                name='White'
                                color={context.themeData.content.terminal_colors.normal.white}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, normal: { ...context.themeData.content.terminal_colors.normal, white: c } } } } })}
                            />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='flex flex-row space-x-6'>
                            <ColorInput
                                name='Bright Black'
                                color={context.themeData.content.terminal_colors.bright.black}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, black: c } } } } })}
                            />
                            <ColorInput
                                name='Bright Red'
                                color={context.themeData.content.terminal_colors.bright.red}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, red: c } } } } })}
                            />
                            <ColorInput
                                name='Bright Green'
                                color={context.themeData.content.terminal_colors.bright.green}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, green: c } } } } })}
                            />
                        </div>
                        <div className='flex flex-row space-x-6'>
                            <ColorInput
                                name='Bright Yellow'
                                color={context.themeData.content.terminal_colors.bright.yellow}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, yellow: c } } } } })}
                            />
                            <ColorInput
                                name='Bright Blue'
                                color={context.themeData.content.terminal_colors.bright.blue}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, blue: c } } } } })}
                            />
                            <ColorInput
                                name='Bright Magenta'
                                color={context.themeData.content.terminal_colors.bright.magenta}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, magenta: c } } } } })}
                            />
                        </div>
                        <div className='flex flex-row space-x-6'>
                            <ColorInput
                                name='Bright Cyan'
                                color={context.themeData.content.terminal_colors.bright.cyan}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, cyan: c } } } } })}
                            />
                            <ColorInput
                                name='Bright White'
                                color={context.themeData.content.terminal_colors.bright.white}
                                setColor={(c) => setContext({ ...context, themeData: { ...context.themeData, content: { ...context.themeData.content, terminal_colors: { ...context.themeData.content.terminal_colors, bright: { ...context.themeData.content.terminal_colors.bright, white: c } } } } })}
                            />
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default AppSidebar;
