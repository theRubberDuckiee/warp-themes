import WarpThemesLogo from '@components/Shared/Navbar/WarpThemesLogo';
import Link from 'next/link';
import router from 'next/router';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import LoginButton from '@components/Login/Login';
import LogoutButton from '@components/Login/Logout';
import React from 'react';
import { useAppContext } from '@lib/AppContext';
import { fetchTwitterUserDescription } from 'utils/getUserInfoUtils';

const firebaseConfig = {
  apiKey: "AIzaSyBzZfDNCqyrwUW8DvWSnEBn-Q-6mIzxADQ",
  authDomain: "warp-themes-cf724.firebaseapp.com",
  projectId: "warp-themes-cf724",
  storageBucket: "warp-themes-cf724.appspot.com",
  messagingSenderId: "227546572873",
  appId: "1:227546572873:web:4251b2470105d315223798",
  measurementId: "G-YY8ELH4ZN6"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function AppNavbar() {
  const [context, setContext] = useAppContext();

  useEffect(() => {
    // Set user in appContext when the component mounts for the first time
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      let userDescription = undefined
      if (user) {
        userDescription = await fetchTwitterUserDescription(user.reloadUserInfo.screenName);
        setContext({...context, user: {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          description: userDescription,
      }});
      } else {
        setContext({...context, user: user})
      }
    });

    // Cleanup function to unsubscribe from the onAuthStateChanged listener
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect runs only once

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
    <nav className='flex w-full py-0 pl-4 pr-2 fixed items-center bg-white border-b flex-row justify-between'>
      <div className='flex items-center'>
        <Link href="/">
          <a className='flex items-center'>
            <WarpThemesLogo/>
            <span className='text-lg font-bold ml-1 mr-8'>Terminal Themes</span>
          </a>
        </Link>
        <button onClick={navigateToCreateTheme} className='btn btn-ghost'>
          Create a theme
        </button>
        <a href="https://www.warp.dev/?utm_source=warp-themes" onClick={trackMadeByWarpClick} target="_blank" rel="noopener noreferrer" className='btn btn-ghost'>
          Made by Warp
        </a>
      </div>
      <div>
        {context.user ? (
          <div className='flex'>
            <img src={context.user.photoURL} alt={context.user?.displayName ?? 'Anon'} className="w-10 h-10 rounded-full ml-auto mr-2" />
            <LogoutButton/>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
}

export default AppNavbar;
