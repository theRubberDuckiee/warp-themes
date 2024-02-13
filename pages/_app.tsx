import type { AppProps } from 'next/app';
import AppContext from '@lib/AppContext';
import '@styles/globals.css';
import * as ga from '../utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		ga.initGA();
		ga.logPageView();
		router.events.on('routeChangeComplete', ga.logPageView);
		return () => {
		  router.events.off('routeChangeComplete', ga.logPageView);
		};
	  }, []);
	
	return (
		<AppContext>
			<Component {...pageProps} />
		</AppContext>
	);
}