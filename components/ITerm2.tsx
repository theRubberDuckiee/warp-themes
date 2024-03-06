import { InboxInIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import plist from 'plist';
import rgbHex from 'rgb-hex';
import { Dialog } from '@headlessui/react'; // Import Dialog from headlessui
import toast from 'react-hot-toast';
import React from 'react'

interface Props {
    _open: boolean;
    _onClose: (val: boolean) => void;
}

function AppDialogITermColors(props: Props) {
    const [fileURL, setFileURL] = useState('');
    const [context, setContext] = useAppContext();

    function rgbToHex(r: number, g: number, b: number) {
        r = r * 255;
        g = g * 255;
        b = b * 255;
        return '#' + rgbHex(r, g, b);
    }

    async function loadTheme() {
        if (fileURL.startsWith('https://github.com/')) {
            setFileURL(fileURL.replace('https://github.com/', 'https://raw.githubusercontent.com/'));
        }
        try {
            const response = await fetch(fileURL);
            if (response.status !== 200) throw new Error();
            const colorScheme = plist.parse(await response.text());
            setContext({
                ...context,
                themeData: {
                    name: fileURL.split('/').pop().replace('.itermcolors', ''),
                    content: {
                        accent: rgbToHex(
                                colorScheme['Cursor Color']['Red Component'],
                                colorScheme['Cursor Color']['Green Component'],
                                colorScheme['Cursor Color']['Blue Component']
                            ),
                        background: rgbToHex(
                                colorScheme['Background Color']['Red Component'],
                                colorScheme['Background Color']['Green Component'],
                                colorScheme['Background Color']['Blue Component']
                            ),
                        foreground: rgbToHex(
                            colorScheme['Foreground Color']['Red Component'],
                            colorScheme['Foreground Color']['Green Component'],
                            colorScheme['Foreground Color']['Blue Component']
                        ),
                        details: 'darker',
                        terminal_colors: {
                            normal: {
                                black: rgbToHex(
                                    colorScheme['Ansi 0 Color']['Red Component'],
                                    colorScheme['Ansi 0 Color']['Green Component'],
                                    colorScheme['Ansi 0 Color']['Blue Component']
                                ),
                                red: rgbToHex(
                                    colorScheme['Ansi 1 Color']['Red Component'],
                                    colorScheme['Ansi 1 Color']['Green Component'],
                                    colorScheme['Ansi 1 Color']['Blue Component']
                                ),
                                green: rgbToHex(
                                    colorScheme['Ansi 2 Color']['Red Component'],
                                    colorScheme['Ansi 2 Color']['Green Component'],
                                    colorScheme['Ansi 2 Color']['Blue Component']
                                ),
                                yellow: rgbToHex(
                                    colorScheme['Ansi 3 Color']['Red Component'],
                                    colorScheme['Ansi 3 Color']['Green Component'],
                                    colorScheme['Ansi 3 Color']['Blue Component']
                                ),
                                blue: rgbToHex(
                                    colorScheme['Ansi 4 Color']['Red Component'],
                                    colorScheme['Ansi 4 Color']['Green Component'],
                                    colorScheme['Ansi 4 Color']['Blue Component']
                                ),
                                magenta: rgbToHex(
                                    colorScheme['Ansi 5 Color']['Red Component'],
                                    colorScheme['Ansi 5 Color']['Green Component'],
                                    colorScheme['Ansi 5 Color']['Blue Component']
                                ),
                                cyan: rgbToHex(
                                    colorScheme['Ansi 6 Color']['Red Component'],
                                    colorScheme['Ansi 6 Color']['Green Component'],
                                    colorScheme['Ansi 6 Color']['Blue Component']
                                ),
                                white: rgbToHex(
                                    colorScheme['Ansi 7 Color']['Red Component'],
                                    colorScheme['Ansi 7 Color']['Green Component'],
                                    colorScheme['Ansi 7 Color']['Blue Component']
                                ),
                            },
                            bright: {
                                black: rgbToHex(
                                    colorScheme['Ansi 8 Color']['Red Component'],
                                    colorScheme['Ansi 8 Color']['Green Component'],
                                    colorScheme['Ansi 8 Color']['Blue Component']
                                ),
                                red: rgbToHex(
                                    colorScheme['Ansi 9 Color']['Red Component'],
                                    colorScheme['Ansi 9 Color']['Green Component'],
                                    colorScheme['Ansi 9 Color']['Blue Component']
                                ),
                                green: rgbToHex(
                                    colorScheme['Ansi 10 Color']['Red Component'],
                                    colorScheme['Ansi 10 Color']['Green Component'],
                                    colorScheme['Ansi 10 Color']['Blue Component']
                                ),
                                yellow: rgbToHex(
                                    colorScheme['Ansi 11 Color']['Red Component'],
                                    colorScheme['Ansi 11 Color']['Green Component'],
                                    colorScheme['Ansi 11 Color']['Blue Component']
                                ),
                                blue: rgbToHex(
                                    colorScheme['Ansi 12 Color']['Red Component'],
                                    colorScheme['Ansi 12 Color']['Green Component'],
                                    colorScheme['Ansi 12 Color']['Blue Component']
                                ),
                                magenta: rgbToHex(
                                    colorScheme['Ansi 13 Color']['Red Component'],
                                    colorScheme['Ansi 13 Color']['Green Component'],
                                    colorScheme['Ansi 13 Color']['Blue Component']
                                ),
                                cyan: rgbToHex(
                                    colorScheme['Ansi 14 Color']['Red Component'],
                                    colorScheme['Ansi 14 Color']['Green Component'],
                                    colorScheme['Ansi 14 Color']['Blue Component']
                                ),
                                white: rgbToHex(
                                    colorScheme['Ansi 15 Color']['Red Component'],
                                    colorScheme['Ansi 15 Color']['Green Component'],
                                    colorScheme['Ansi 15 Color']['Blue Component']
                                ),
                            },
                        },
                    },
                    themeUser: context.themeData.user, // Assuming user is part of the context
                    counter: 0, // You need to define this value, I just added 0 for example
                }
            });
            props._onClose(true)
        } catch (e) {
            alert("Couldn't load the color scheme.");
        }
        setFileURL('');
    }

    return (
        <>
            <Dialog open={props._open} onClose={props._onClose} className='absolute z-30'>
                <div className='fixed inset-0 bg-black/20 backdrop-blur-sm' aria-hidden='true'></div>

                <div className='fixed inset-0 flex items-center justify-center p-4'>
                    <Dialog.Panel className='mx-auto  w-fit rounded-lg shadow-lg bg-white px-12 py-7'>
                        <Dialog.Title className='text-3xl font-semibold mb-4'>iTerm Color Scheme</Dialog.Title>
                        <input
                            type='checkbox'
                            id='iterm-modal'
                            className='modal-toggle'
                            aria-label='Toggle iTerm Modal'
                        />
                        <p className='mb-2'>Load iTerm Color Scheme from URL.</p>
                        <div className='form-control'>
                            <div className='input-group'>
                                <input
                                    type='URL'
                                    placeholder='File Link'
                                    value={fileURL}
                                    onChange={(e) => setFileURL(e.target.value)}
                                    className='input input-bordered w-full'
                                />
                                <label htmlFor='iterm-modal' className='btn btn-square' onClick={loadTheme}>
                                    <InboxInIcon className='w-6 h-6' />
                                </label>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <p>
                            <span className='text-slate-500'>Tip: </span>
                            If used with GitHub, please use the raw link to prevent any problems (
                            <code className='text-sm'>raw.githubusercontent.com</code>).
                        </p>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

export default AppDialogITermColors;
