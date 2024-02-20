import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import ThemePreview from '@components/Community-Themes/ThemePreview';
import { DownloadIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ThemeWithBackground({ img, themeData, name }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log('cat', themeData)
    const fakeTheme = {
        data: themeData
    };

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            {themeData && (
                <div className="max-w-screen-xl mx-auto p-8 rounded-lg w-full lg:w-3/4 xl:w-2/3">
                    <h1 className="text-7xl font-bold mb-6 text-center">{name}</h1>
                    <p className="text-2xl mb-2 text-center">Created by: {themeData.content.theme.data.username}</p>
                    <div className="mt-4">
                        <Slider {...settings}>
                            {img.map((image, index) => (
                                <div key={index}>
                                    <img src={image} className="w-full h-auto rounded-lg shadow-md" style={{ margin: 0 }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="mt-0 flex justify-between items-center">
                        <div className="text-2xl ml-14">Downloads: {themeData.downloads}</div>
                        <div>
                            <button onClick={() => { setIsOpen(true) }} className="btn btn-primary px-4 py-2 mr-14 text-2xl">
                                Download Theme
                            </button>
                            <DownloadTheme isOpen={isOpen} setIsOpen={setIsOpen} theme={fakeTheme} themeName={themeData.name} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ThemeWithBackground;
