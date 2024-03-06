import ThemePreview from './ThemePreview';
import { DownloadTheme } from '@components/Shared/DownloadTheme';
import { ThemeData } from 'interface';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
    theme: ThemeData
    imgSrc?: string
}

function ThemeCard({imgSrc, theme}: Props) {
    const url = theme.tId == undefined ? `/${encodeURIComponent(theme.name)}` : `/themes/${theme.tId}`
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div className="ThemeCard p-4 min-w-48 rounded transition duration-300 hover:shadow-lg hover:bg-white hover:bg-opacity-10" style={{ minWidth:'600px', maxWidth: '900px', width: '100%' }}>
            <Link href={url}>
                <a>
                    {theme.name}
                </a>
            </Link>

            <div className="">
                { imgSrc ?
                    <img src={imgSrc} className="w-full h-auto rounded-lg"/> :
                    <ThemePreview theme={theme}/>
                }
            </div>
            <div className="px-8 flex justify-between items-center py-4">
                <div className="flex items-center">
                    <span className="mr-4">
                        Created by: {theme.themeUser?.displayName ?? theme.username}
                    </span>
                    {theme.themeUser?.photoURL &&
                        <div className="flex relative">
                            <img
                                src={theme.themeUser?.photoURL}
                                alt={theme.themeUser?.displayName ?? 'Anon'}
                                className="w-10 h-10 rounded-full ml-auto mr-4"
                                onMouseEnter={() => setShowTooltip(true)} // Show tooltip on mouse enter
                                onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
                            />
                            {showTooltip && (
                                <div className="mb-4 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white border border-gray-300 p-2 rounded shadow">
                                    {theme.themeUser?.description || 'No description available'}
                                </div>
                            )}
                        </div>
                    }
                </div>
                <button onClick={() => {setIsOpen(true)}} className="btn btn-primary px-4 py-2">
                    Download Theme
                </button>
            </div>
            {theme && <DownloadTheme
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                theme={theme}
            />}
        </div>
    );
}

export default ThemeCard;
