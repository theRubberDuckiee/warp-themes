import { Dialog } from '@headlessui/react';
import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
import { ThemeData } from 'interface/interface';
import { Dispatch, SetStateAction, useState } from 'react';
import React from 'react';
import { useAppContext } from "../../lib/AppContext"
import { OperatingSystem, TerminalType, linuxWarpThemeFolder, macWarpThemeFolder } from 'constants/downloadConstants';
import { downloadTheme, getWarpManualDownloadInstructionCustomBackgroundImage, getWarpManualDownloadInstructionNoBackgroundImage, getiTerm2ManualDownloadInstructionCustomBackgroundImage, prepareDownload } from 'utils/downloadThemeUtils';
import { signInWithTwitter } from 'utils/loginUtils';

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    theme?: ThemeData
}

export function DownloadTheme({ isOpen, setIsOpen, theme }: Props) {
    const [context, setContext] = useAppContext();
    
    if (!theme) {
        theme = context.themeData
    }
    const [terminal, setTerminal] = useState(TerminalType.Warp)
    const [doneDownloading, setDoneDownloading] = useState(false)
    const [os, setOs] = useState(OperatingSystem.Linux)
    const themeName = theme.name.replace(/\s/g, "")
    const themePath = os == OperatingSystem.Mac ? macWarpThemeFolder : linuxWarpThemeFolder
    const [doneSharing, setDoneSharing] = useState(false)

    async function shareTheme() {
        // Check if user is signed in
        if (!context.user) {
            await signInWithTwitter()
        }

        // When signed in, create theme
        await prepareDownload(context, setContext)
        setDoneSharing(true)
    }

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='absolute z-30'>
            <div className='fixed inset-0 flex items-center justify-center p-4'>
                    {doneDownloading ?
                    <Dialog.Panel className='mx-auto max-w-2xl w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
                        <Dialog.Title className='text-3xl font-semibold mb-4'>Share your theme with the community!</Dialog.Title>
                        <div className='text-gray-700'>
                        {doneSharing ? 
                        <div className="mt-4 mb-4">
                        Shared!
                        </div>
                        :
                        <div className="mt-4 mb-4">
                        This will ask you to sign in. Once you're signed in, your theme will be uploaded to our website
                        and you can view it on our landing page and share it out with friends.
                        </div>
                        }
                        <button
                            onClick={() => shareTheme()}
                            className='btn mt-2 btn-primary flex items-center gap-2'
                        >
                            Share
                        </button>

                        </div>
                    </Dialog.Panel>
                    :
                    <Dialog.Panel className='mx-auto max-w-5xl w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
                    <Dialog.Title className='text-3xl font-semibold mb-4'>Download</Dialog.Title>
                    <div className='text-gray-700'>
                        <h2 className='text-2xl font-medium mb-3'>Manual Installation</h2>
                        <h3 className='text-xl py-3'>Instructions</h3>
                        {terminal === TerminalType.iTerm2 ? 
                        getiTerm2ManualDownloadInstructionCustomBackgroundImage() :
                        (theme.content.background_image ? 
                            getWarpManualDownloadInstructionCustomBackgroundImage(theme, themeName, themePath) : 
                            getWarpManualDownloadInstructionNoBackgroundImage(theme, themeName, themePath)
                        )
                        }
                        <div className="flex gap-8 mt-4 mb-4">
                            <div className="flex items-center">
                                <label htmlFor="terminalSelect" className="font-medium mr-2">Select Terminal:</label>
                                <div className="relative">
                                    <select
                                        id="terminalSelect"
                                        value={terminal}
                                        onChange={(e) => setTerminal(e.target.value as TerminalType)}
                                        className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 leading-tight focus:outline-none focus:border-blue-500 focus:ring"
                                    >
                                        {Object.values(TerminalType).map((terminalType) => (
                                            <option key={terminalType} value={terminalType}>
                                                {terminalType}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12.586L3.707 6.293a1 1 0 011.414-1.414L10 10.586l4.879-4.879a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-5.5-5.5a1 1 0 111.414-1.414L10 12.586z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="osSelect" className="font-medium mr-2">Select operating system:</label>
                                <div className="relative">
                                    <select
                                        id="osSelect"
                                        value={os}
                                        onChange={(e) => setOs(e.target.value as OperatingSystem)}
                                        className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 leading-tight focus:outline-none focus:border-blue-500 focus:ring"
                                    >
                                        <option value={OperatingSystem.Mac}>Mac</option>
                                        {terminal === TerminalType.Warp && <option value={OperatingSystem.Linux}>Linux</option>}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        {/* Heroicon chevron-down icon */}
                                        <svg
                                            className="h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12.586L3.707 6.293a1 1 0 011.414-1.414L10 10.586l4.879-4.879a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-5.5-5.5a1 1 0 111.414-1.414L10 12.586z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => { downloadTheme(terminal, theme, themeName, setDoneDownloading) }}
                            className='btn mt-2 w-full btn-ghost flex items-center gap-2'
                        >
                            <DownloadIcon className='w-6 h-6' />
                            Download file
                        </button>
                    </div>
                    </Dialog.Panel>
                    }
            </div>
        </Dialog>
    )
}
