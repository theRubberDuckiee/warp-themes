import React, { useState } from 'react';
import ThemePreview from './ThemePreview';
import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import { FeaturedThemeData, ThemeData } from 'interface';
import Link from 'next/link'; // Import Link from Next.js

interface Props {
    theme: ThemeData
    imgSrc?: string
}

function ThemeCard({imgSrc, theme}: Props) {
    const url = theme.tId == undefined ? `/${encodeURIComponent(theme.name)}` : `/themes/${theme.tId}`
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="ThemeCardContainer flex justify-center">
            <div className="ThemeCard p-4 rounded transition duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-10"
                 style={{ minWidth:'600px', maxWidth: '900px', width: '100%' }}>
                <Link href={url}>
                    <a>
                        {theme.name}
                    </a>
                </Link>

                <div className="py-4">
                    { imgSrc ?
                    <img src={imgSrc} className="w-full h-auto rounded-lg shadow-md"/> :
                    <ThemePreview theme={theme}/>
                    }
                </div>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <span className="mr-4">
                            Created by: {theme.username}
                        </span>
                    </div>
                    <button onClick={() => {setIsOpen(true)}} className="btn btn-primary px-4 py-2">
                        Download Theme
                    </button>
                </div>
                {theme && <DownloadTheme
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    theme={theme}
                />
                }
            </div>
        </div>
    );
}

export default ThemeCard;
