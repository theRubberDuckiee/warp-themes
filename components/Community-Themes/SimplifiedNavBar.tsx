import { WarpAppBlockDivider } from "@components/Create-Theme/Warp/Block";
import WarpAppNavbarSystemButtons from "@components/Create-Theme/Warp/Navbar/SystemButton";
import ThemeTab from "./ThemeTab";
import React from 'react';
import { ThemeData } from "interface/interface";

interface Props {
    theme: ThemeData;
}

function SimplifiedNavBar({theme}: Props) {
	return (
		<div className='flex-co relative flex'>
			<div className='z-20 flex flex-row items-center'>
				<div className='flex h-full items-start justify-center p-2'>
					<WarpAppNavbarSystemButtons type='close' />
					<WarpAppNavbarSystemButtons type='min' />
					<WarpAppNavbarSystemButtons type='max' />
				</div>
				<div className='flex flex-row'>
					<ThemeTab title='~' theme={theme} />
				</div>
			</div>
			<WarpAppBlockDivider />
		</div>
	);
}

export default SimplifiedNavBar;
