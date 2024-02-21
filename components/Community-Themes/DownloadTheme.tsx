import { Dialog } from '@headlessui/react';
import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
import { Theme, ThemeData } from 'interface';
import { Dispatch, SetStateAction, useState } from 'react';
import { getWarpImgByName, getWarpTheme, getiTerm2Theme } from 'utils';
import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';

enum TerminalType {
    Warp = 'Warp',
    iTerm2 = 'iTerm2',
}

enum OperatingSystem {
    Linux = 'Linux',
    Mac = 'Mac',
}

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    theme: ThemeData
}

export function DownloadTheme({ isOpen, setIsOpen, theme }: Props) {
    const [terminal, setTerminal] = useState(TerminalType.Warp)
    const [os, setOs] = useState(OperatingSystem.Linux)
    const themeName = theme.name.replace(/\s/g, "")
    const themePath = os == OperatingSystem.Mac ? '~/.warp/themes/' : '~/.local/share/warp-terminal/themes/'
    const fileWord = theme.backgroundImageSrc ? 'themes' : 'theme'

    async function downloadTheme(terminalType: TerminalType, theme: ThemeData) {
        const themeYaml = terminalType === TerminalType.Warp ? getWarpTheme(theme.content) : getiTerm2Theme(theme.content);
        const extension = terminalType === TerminalType.Warp ? 'yaml' : 'itermcolors';
    
        const yamlBlob = new Blob([themeYaml], { type: `application/${extension}` });
    
        try {
            // Create download link for the YAML file
            const yamlObjectURL = window.URL.createObjectURL(yamlBlob);
            const yamlDownloadLink = document.createElement('a');
            yamlDownloadLink.href = yamlObjectURL;
            yamlDownloadLink.download = `${themeName}.yaml`;
            document.body.appendChild(yamlDownloadLink);
    
            // Trigger download for the YAML file
            yamlDownloadLink.click();
    
            // Clean up
            yamlDownloadLink.remove();
            window.URL.revokeObjectURL(yamlObjectURL);
    
            if (theme.backgroundImageSrc) {
                // Create download link for the PNG file
                const pngDownloadLink = document.createElement('a');
                pngDownloadLink.href = theme.backgroundImageSrc;
                pngDownloadLink.download = `${theme.content.background_image.path}`;
                document.body.appendChild(pngDownloadLink);
        
                // Trigger download for the PNG file
                pngDownloadLink.click();
        
                // Clean up
                pngDownloadLink.remove();
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., show an error message to the user
        }
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
                                <li>Download the {fileWord}</li>
                                {theme.content.background_image ? (
                                <li>
                                <li className="flex items-center">
                                    Place the theme file and image png into{' '}
                                    <code className='text-sm bg-black text-white px-2 ml-2 rounded'>{themePath}</code>
                                </li>
                                    So for example, after downloading the files, you can run something like:
                                    <pre className='mt-1'>
                                        <code className='text-sm bg-black text-white px-2 py-1 rounded'>
                                            {`mv /Users/jess/Downloads/${theme.content.background_image.path}
/Users/jess/Downloads/${themeName}.yaml
${themePath}`}
                                        </code>
                                    </pre>

                                </li>
                        ) : (
                            <li>
                            <li className="flex items-center">
                                Place the theme file into{' '}
                                <code className='text-sm bg-black text-white px-2 ml-2 rounded'>{themePath}</code>
                            </li>
                                So for example, after downloading the files, you can run something like:
                                <pre className='mt-1'>
                                    <code className='text-sm bg-black text-white px-2 py-1 rounded'>
                                        mv /Users/jess/Downloads/{themeName}.yaml {themePath}
                                    </code>
                                </pre>
                                </li>
                        )}
                                 <li className="mt-2">
                                    Restart Warp
                                </li>
                                <li>
                                    Open the Command Palette (<kbd className='kbd kbd-sm'>⌘</kbd> +{' '}
                                    <kbd className='kbd kbd-sm'>P</kbd>) and search for <i>Open Theme Picker.</i>
                                </li>
                                <li>Enjoy your new theme ✨</li>
                            </ol>
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
                            onClick={() => { downloadTheme(terminal, theme) }}
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
