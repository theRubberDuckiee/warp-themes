import React, { useState } from 'react';
import ThemePreview from './ThemePreview';
import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import Link from 'next/link';

interface Props {
    theme: any,
    image?: string,
}

function ThemeCard({theme, image}: Props) {
    const url = theme.id == undefined ? `/${encodeURIComponent(theme.data.name)}` : `/themes/${theme.id}`
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="ThemeCardContainer flex justify-center">
            <div className="ThemeCard p-4 rounded transition duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-10"
                 style={{ minWidth:'600px', maxWidth: '900px', width: '100%' }}>
                <Link href={url}>
                    <a>
                        {theme.data.name}
                    </a>
                </Link>

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
