import { DownloadTheme } from '@components/Community-Themes/DownloadTheme';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppNavbar from '@components/Shared/Navbar/Navbar';
import { FeaturedThemeData } from 'interface';

interface Props {
    img: string[];
    name: string;
    themeData: FeaturedThemeData;
}

function ThemeWithBackground({ img, themeData, name }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: function(i) {
            return (
                <div
                    style={{
                        width: '15px',
                        height: '15px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '2px solid #333',
                    }}
                ></div>
            );
        },
    };

    // Custom arrow components for the Slider
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className + " text-white"}
                style={{ ...style, display: "block", background: "transparent", right: "20px", zIndex: "1" }}
                onClick={onClick}
            >
                <i className="fas fa-chevron-right fa-3x"></i>
            </div>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className + " text-white"}
                style={{ ...style, display: "block", background: "transparent", left: "20px", zIndex: "1" }}
                onClick={onClick}
            >
                <i className="fas fa-chevron-left fa-3x"></i>
            </div>
        );
    }

    return (
        <div className='flex flex-col h-screen bg-slate-100 sm:bg-white'>
            <div className='w-full border-b z-20 hidden sm:block'>
                <AppNavbar />
            </div>
            <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
                {themeData && (
                    <div className="max-w-screen-xl mx-auto p-8 rounded-lg w-full lg:w-3/4 xl:w-2/3">
                        <h1 className="text-7xl font-bold mb-6 mt-54 text-center">{name}</h1>
                        <p className="text-2xl mb-12 text-center">Created by: {themeData.themeData.username}</p>
                        <div className="mt-4">
                            <Slider {...settings}>
                                {img.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} className="w-full h-auto rounded-lg" style={{ margin: 0 }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="mt-16 flex justify-center">
                            <div>
                                <button onClick={() => setIsOpen(true)} className="btn btn-primary px-4 py-2 text-2xl">
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
