import React, { useState } from 'react';
import ThemePreview from './ThemePreview';
import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';

interface Props {
    theme: any,
    image?: string,
}

function ThemeCard({theme, image}: Props) {
    console.log('poo', theme)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="ThemeCardContainer flex justify-center">
            <div className="ThemeCard p-4 rounded transition duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-10"
                 style={{ minWidth:'600px', maxWidth: '900px', width: '100%' }}>
                <h2 className="text-lg font-bold">
                    {theme.data.name}
                </h2>
                <div className="py-4">
                    { image ?
                    <img src={image} className="w-full h-auto rounded-lg shadow-md"/> :
                    <ThemePreview theme={theme}/>
                    }
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <span className="mr-4">
                            Created by: {theme.data.username}
                        </span>
                    </div>
                    <button onClick={() => {setIsOpen(true)}} className="btn btn-primary px-4 py-2">
                        Download Theme
                    </button>
                </div>
                {theme && <DownloadTheme isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} themeName={theme.name}/>}
            </div>
        </div>
    );
}

export default ThemeCard;
