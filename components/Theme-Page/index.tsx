import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import ThemePreview from '@components/Community-Themes/ThemePreview';
import { DownloadIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';

function ThemeLandingPage({ themeData }) {
    const [isOpen, setIsOpen] = useState(false);
    const fakeTheme = {
        data: themeData
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            {themeData && (
                <div className="max-w-screen-xl mx-auto p-8 rounded-lg w-full lg:w-3/4 xl:w-2/3">
                    <h1 className="text-3xl font-bold mb-4">{themeData.name}</h1>
                    <p className="text-lg mb-2">Creator: {themeData.username}</p>
                    <div className="mt-4">
                        <div className="overflow-hidden">
                            <div className="flex gap-4">
                                <ThemePreview theme={fakeTheme} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <p className="mr-2">Downloads: {themeData.downloads}</p>
                        <button onClick={() => { setIsOpen(true) }} className="btn btn-primary px-4 py-2">
                            Download Theme
                        </button>
                        <DownloadTheme isOpen={isOpen} setIsOpen={setIsOpen} theme={fakeTheme} themeName={themeData.name} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ThemeLandingPage;
