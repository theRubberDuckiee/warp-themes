import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { InformationCircleIcon, SparklesIcon, TerminalIcon, LightningBoltIcon, CodeIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import AppDialogAbout from '../Dialogs/About';
import AppDialogITermColors from '../Dialogs/iTermColors';
import WarpThemesLogo from '@components/App/WarpThemesLogo';
import router from 'next/router';

function AppNavbar() {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 24],
        },
      },
    ],
  });

  const navigateToCreateTheme = () => {
    router.push('/create-theme');
  };

  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);
  const [isITermColorsOpen, setIsITermColorsOpen] = useState(false);

  return (
    <nav className='flex w-full py-0 pl-4 pr-2 fixed items-center bg-white border-b flex-row justify-start'>
      <Link href="/">
        <a className='flex items-center'>
          <WarpThemesLogo width="30px" height="50px"/>
          <span className='text-lg font-bold'>Warp Themes</span>
        </a>
      </Link>
      <button onClick={navigateToCreateTheme} className='btn btn-ghost'>
        Create a theme
      </button>
      {/* Use an anchor tag to link to warp.dev */}
      <a href="https://warp.dev" target="_blank" rel="noopener noreferrer" className='btn btn-ghost'>
        Made by Warp
      </a>
      <AppDialogITermColors _open={isITermColorsOpen} _onClose={() => setIsITermColorsOpen(false)} />
    </nav>
  );
}

export default AppNavbar;
