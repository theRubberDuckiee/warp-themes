import Head from 'next/head';
import Script from 'next/script';

import AppLayout from '@components/App/Layout';
import AppNavbar from '@components/App/Navbar';
import AppSidebar from '@components/App/Sidebar';
import WarpApp from '@components/Warp';

function IndexPage() {
	return (
		<>
			<Head>
				<title>Warp-Themes - Theme Builder for Warp</title>

				<meta name='title' content='Warp-Themes - Theme Builder for Warp' />
				<meta name='description' content='With Warp-Themes you can easily create themes for the Warp Terminal ✨' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://warp-themes.com/' />
				<meta property='og:title' content='Warp-Themes - Theme Builder for Warp' />
				<meta
					property='og:description'
					content='With Warp-Themes you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/haackt/warp-themes/main/.github/assets/hero.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://warp-themes.com/' />
				<meta property='twitter:title' content='Warp-Themes - Theme Builder for Warp' />
				<meta
					property='twitter:description'
					content='With Warp-Themes you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='twitter:image'
					content='https://raw.githubusercontent.com/haackt/warp-themes/main/.github/assets/hero.png'
				/>
				<meta name='keywords' content='Warp, Theme, Creator, Terminal, Color, Warp-Themes' />
				<meta name='robots' content='index, follow' />

				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#414141' />
				<meta name='msapplication-TileColor' content='#603cba' />
				<meta name='theme-color' content='#ffffff' />

				<Script data-goatcounter='https://haack.goatcounter.com/count' src='//gc.zgo.at/count.js' async />
			</Head>
			<AppLayout Navbar={<AppNavbar />} Sidebar={<AppSidebar />} WarpApp={<WarpApp />} />
		</>
	);
}

export default IndexPage;
