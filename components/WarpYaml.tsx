import { InboxInIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import rgbHex from 'rgb-hex';
import { Dialog } from '@headlessui/react'; // Import Dialog from headlessui
import toast from 'react-hot-toast';
import React from 'react'
import yaml from 'js-yaml';

interface Props {
    _open: boolean;
    _onClose: (val: boolean) => void;
}

function WarpYaml(props: Props) {
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
            const bla = await response.text()
            const parsedData = yaml.load(bla)
            setContext({
                ...context,
                themeData: {
                    name: fileURL.split('/').pop().replace('.yaml', ''),
                    content: parsedData,
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
                        <Dialog.Title className='text-3xl font-semibold mb-4'>Warp Theme Schema</Dialog.Title>
                        <input
                            type='checkbox'
                            id='iterm-modal'
                            className='modal-toggle'
                            aria-label='Toggle iTerm Modal'
                        />
                        <p className='mb-2'>Load Warp Color Scheme from URL.</p>
                        <p className='mb-2'> You can check out our Github repo 
                            <a target="_blank" rel="noopener noreferrer" className='text-blue-500' href="https://github.com/warpdotdev/themes"> here.
                            </a>
                        </p>
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

export default WarpYaml;
