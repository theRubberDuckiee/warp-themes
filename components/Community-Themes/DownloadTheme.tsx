import WarpAppNavbarSystemButtons from '@components/Create-Theme/Warp/Navbar/SystemButton';
import { Dialog, Transition } from '@headlessui/react';
import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
import { useAppContext } from '@lib/AppContext';
import { Dispatch, SetStateAction, useState } from 'react';
import YAML from 'json-to-pretty-yaml';
import JSZip from 'jszip';
import { getWarpTheme, getiTerm2Theme } from 'utils';
import { Theme } from 'interface';

enum TerminalType {
    Warp = 'Warp',
    iTerm2 = 'iTerm2',
  }

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    theme: any
    imgSrc?: string
    themeName: string
}

export function DownloadTheme({isOpen, setIsOpen, theme, imgSrc, themeName}: Props) {
    const [terminal, setTerminal] = useState(TerminalType.Warp)
    
    
    function downloadTheme(terminalType: TerminalType) {
        console.log(theme)
        const themeYaml = terminalType === TerminalType.Warp ? getWarpTheme(theme.data.content) : getiTerm2Theme(theme.data.content);
        const applicationType = terminalType === TerminalType.Warp ? 'application/yaml' : 'application/itermcolors';
        const extension = terminalType === TerminalType.Warp ? 'yaml' : 'itermcolors';
        const objectURL = window.URL.createObjectURL(new Blob([themeYaml], { type: applicationType }));
        const downloadLink = document.createElement('a');
        downloadLink.href = objectURL;
        downloadLink.download = `${theme.data.name}.${extension}`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        window.URL.revokeObjectURL(objectURL);
    }

    return (

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='absolute z-30'>
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm' aria-hidden='true'></div>

        <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Dialog.Panel className='mx-auto max-w-5xl w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
                <Dialog.Title className='text-3xl font-semibold mb-4'>Download</Dialog.Title>
                <div className='text-gray-700'>
                    <h2 className='text-2xl font-medium mb-3'>Manual Installation</h2>
                    <h3 className='text-xl py-3'>Instructions</h3>
                    {terminal == TerminalType.iTerm2 ?
                        <ol className='list-decimal ml-4'>
                            <li>Go into iTerm2</li>
                            <li>Press <kbd className='kbd kbd-sm'>⌘</kbd> +{' '}
                                <kbd className='kbd kbd-sm'>i</kbd> and navigate to the Colors tab</li>
                            <li>Click on Load Presets</li>
                            <li>Click on Import</li>
                            <li>Select the .itermcolors file of the scheme you'd like to use.</li>
                            <li>Enjoy your new theme ✨</li>
                        </ol> : 
                        <ol className='list-decimal ml-4'>
                            <li>Download the file</li>
                            <li>
                                Place the theme file into{' '}
                                <code className='text-sm bg-black text-white px-2 rounded'>~/.warp/themes/</code>
                            </li>
                            <li>Restart Warp</li>
                            <li>
                                Open the Command Palette (<kbd className='kbd kbd-sm'>⌘</kbd> +{' '}
                                <kbd className='kbd kbd-sm'>P</kbd>) and search for <i>Open Theme Picker</i>
                            </li>
                            <li>Enjoy your new theme ✨</li>
                        </ol>
                    }
                    <div className="flex items-center gap-4 mt-2">
                        <label htmlFor="appSelect" className="font-medium">Select Terminal:</label>
                        <div className="relative">
                            <select
                                id="appSelect"
                                value={terminal}
                                onChange={(e) => setTerminal(e.target.value as TerminalType)}
                                className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 leading-tight focus:outline-none focus:border-blue-500 focus:ring"
                            >
                                <option value={TerminalType.iTerm2}>iTerm2</option>
                                <option value={TerminalType.Warp}>Warp</option>
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
                    <button
                        onClick={() => {downloadTheme(terminal)}}
                        className='btn mt-2 w-full btn-ghost flex items-center gap-2'
                    >
                        <DownloadIcon className='w-6 h-6' />
                        Download file
                    </button>
                </div>
            </Dialog.Panel>
        </div>
        </Dialog>
    )
}