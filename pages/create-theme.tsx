import AppSidebar from '@components/Create-Theme/Sidebar';
import AppNavbar from '@components/Shared/Navbar/Navbar';
import WarpApp from '@components/Create-Theme/Warp/App';
import CreateThemeLayout from '@components/Create-Theme/index';
import React, { useState } from 'react'
import AppDialogITermColors from '@components/ITerm2';

function CreateTheme() {
	return (
		<>
			<CreateThemeLayout Navbar={<AppNavbar />} Sidebar={<AppSidebar />} WarpApp={<WarpApp />} />
		</>
	);
}

export default CreateTheme;
