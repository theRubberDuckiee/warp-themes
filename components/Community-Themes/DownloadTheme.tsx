import WarpAppNavbarSystemButtons from '@components/Create-Theme/Warp/Navbar/SystemButton';
import { Dialog, Transition } from '@headlessui/react';
import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
import { useAppContext } from '@lib/AppContext';
import { Dispatch, SetStateAction } from 'react';
import YAML from 'json-to-pretty-yaml';
import JSZip from 'jszip';

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    theme: any
    imgSrc?: string
}

export function DownloadTheme({isOpen, setIsOpen, theme, imgSrc}: Props) {
    const context = theme.data.content
    const name = theme.data.name 
    const backgroundImageSrc = theme.data.backgroundImageSrc


    function downloadTheme() {
        const myTheme = YAML.stringify({
            accent: context.accent,
            background: context.background,
            foreground: context.foreground,
            details: context.details,
            terminal_colors: {
                normal: {
                    black: context.terminal_colors.normal.black,
                    red: context.terminal_colors.normal.red,
                    green: context.terminal_colors.normal.green,
                    yellow: context.terminal_colors.normal.yellow,
                    blue: context.terminal_colors.normal.blue,
                    magenta: context.terminal_colors.normal.magenta,
                    cyan: context.terminal_colors.normal.cyan,
                    white: context.terminal_colors.normal.white,
                },
                bright: {
                    black: context.terminal_colors.bright.black,
                    red: context.terminal_colors.bright.red,
                    green: context.terminal_colors.bright.green,
                    yellow: context.terminal_colors.bright.yellow,
                    blue: context.terminal_colors.bright.blue,
                    magenta: context.terminal_colors.bright.magenta,
                    cyan: context.terminal_colors.bright.cyan,
                    white: context.terminal_colors.bright.white,
                },
            },
        });
    
// Create Blob for YAML file
const yamlBlob = new Blob([myTheme], { type: 'application/yaml' });

// Fetch the image file
fetch(backgroundImageSrc)
    .then(response => response.blob())
    .then(imageBlob => {
        // Create a zip file containing YAML and image
        const zip = new JSZip();
        zip.file(`${name}.yaml`, yamlBlob, { binary: true });
        zip.file(`${name}.png`, imageBlob, { binary: true });

        // Generate download link for the zip file
        zip.generateAsync({ type: 'blob' }).then(blob => {
            const objectURL = window.URL.createObjectURL(blob);

            // Create a download link for the zip file
            const downloadLink = document.createElement('a');
            downloadLink.href = objectURL;
            downloadLink.download = `${name}_theme.zip`;
            document.body.appendChild(downloadLink);

            // Trigger download
            downloadLink.click();

            // Clean up
            downloadLink.remove();
            window.URL.revokeObjectURL(objectURL);
        });
    });
    }
    

    return (

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='absolute z-30'>
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm' aria-hidden='true'></div>

        <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Dialog.Panel className='mx-auto max-w-5xl w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
                <Dialog.Title className='text-3xl font-semibold mb-4'>Download</Dialog.Title>

                {/* <div>
                    <span className='badge'>Recommended</span>
                    <h2 className='text-2xl font-medium'>Automatic Installation</h2>
                    <div className='bg-black overflow-x-scroll whitespace-nowrap text-white px-2 py-3 select-all rounded-md shadow-md my-4'>
                        <div className='flex flex-row items-center mb-3'>
                            <div className='flex h-full items-start justify-center'>
                                <WarpAppNavbarSystemButtons type='close' />
                                <WarpAppNavbarSystemButtons type='min' />
                                <WarpAppNavbarSystemButtons type='max' />
                            </div>
                        </div>
                        <code className='pr-3 pl-1'>
                            <span
                                style={{ color: context.terminal_colors.normal.magenta }}
                                className='font-semibold'
                            >
                                curl
                            </span>{' '}
                            <span style={{ color: context.terminal_colors.bright.black }}>-s -N</span>{' '}
                            <span style={{ color: context.terminal_colors.bright.black }}>|</span>{' '}
                            <span style={{ color: context.terminal_colors.normal.magenta }}>bash</span>
                        </code>
                    </div>
                    <div className='w-full flex flex-row justify-evenly'>
                        <label
                            className='btn bg-black btn-wide swap text-lg'
                            role='button'
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    'poo'
                                );
                                setTimeout(() => {
                                    //@ts-ignore
                                    document.getElementById('copied-curl-code').checked = false;
                                }, 1500);
                            }}
                        >
                            <input type='checkbox' id='copied-curl-code' />
                            <div className='swap-on'>✅ Copied</div>
                            <div className='swap-off'>📋 Copy</div>
                        </label>
                    </div>
                </div> */}
                {/* <div className='divider'>OR</div> */}
                <div className='text-gray-700'>
                    <h2 className='text-2xl font-medium mb-3'>Manual Installation</h2>
                    <h3 className='text-xl py-3'>Instructions</h3>
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
                    <button
                        onClick={downloadTheme}
                        className='btn mt-2 w-full btn-ghost flex items-center gap-2'
                    >
                        <DownloadIcon className='w-6 h-6' />
                        Download file
                    </button>
                </div>

                <div className='divider'></div>
            </Dialog.Panel>
        </div>
        </Dialog>
    )
}