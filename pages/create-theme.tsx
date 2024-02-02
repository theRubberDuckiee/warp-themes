import Head from 'next/head';
import Script from 'next/script';

import AppLayout from '@components/App/Layout';
import AppSidebar from '@components/App/Sidebar';
import WarpApp from '@components/Warp';
import AppNavbar from '@components/App/Navbar/Navbar';

function CreateTheme() {
	return (
		<>
			<AppLayout Navbar={<AppNavbar />} Sidebar={<AppSidebar />} WarpApp={<WarpApp />} />
		</>
	);
}

export default CreateTheme;
