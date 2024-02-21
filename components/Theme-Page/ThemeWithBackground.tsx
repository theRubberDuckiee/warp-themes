import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FeaturedThemeData } from 'interface';
import AppNavbar from '@components/Shared/Navbar/Navbar';

interface Props {
    img: string                                        
    name: string
    themeData: FeaturedThemeData
}

function ThemeWithBackground({ img, themeData, name }) {
    const [isOpen, setIsOpen] = useState(false);

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='flex h-screen flex-col bg-slate-100 sm:bg-white overflow-y-hidden'>
        <div className='w-full border-b z-20 hidden sm:block'><AppNavbar /></div>
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            {themeData && (
                <div className="max-w-screen-xl mx-auto p-8 rounded-lg w-full lg:w-3/4 xl:w-2/3">
                    <h1 className="text-7xl font-bold mb-6 text-center">{name}</h1>
                    <p className="text-2xl mb-2 text-center">Created by: {themeData.themeData.username}</p>
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
                            <DownloadTheme isOpen={isOpen} setIsOpen={setIsOpen} theme={themeData.themeData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}

export default ThemeWithBackground;
