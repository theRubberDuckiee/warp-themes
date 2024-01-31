import type { AppProps } from 'next/app';

import AppContext from '@lib/AppContext';

import '@styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContext>
			<Component {...pageProps} />
		</AppContext>
	);
}
