import WarpThemesLogo from '@components/Shared/Navbar/WarpThemesLogo';
import Link from 'next/link';
import router from 'next/router';
import ReactGA from 'react-ga'; // Import ReactGA for Google Analytics tracking

function AppNavbar() {
  const navigateToCreateTheme = () => {
    router.push('/create-theme');
  };

  const trackMadeByWarpClick = () => {
    ReactGA.event({
      category: 'External Link',
      action: 'Click Made by Warp Button'
    });
  };

  return (
    <nav className='flex w-full py-0 pl-4 pr-2 fixed items-center bg-white border-b flex-row justify-start'>
      <Link href="/">
        <a className='flex items-center'>
          <WarpThemesLogo width="30px" height="50px"/>
          <span className='text-lg font-bold ml-1 mr-8'>Terminal Themes</span>
        </a>
      </Link>
      <button onClick={navigateToCreateTheme} className='btn btn-ghost'>
        Create a theme
      </button>
      <a href="https://www.warp.dev/?utm_source=warp-themes" onClick={trackMadeByWarpClick} target="_blank" rel="noopener noreferrer" className='btn btn-ghost'>
        Made by Warp
      </a>
    </nav>
  );
}

export default AppNavbar;
