import { ThemeData } from "interface";
import React from 'react';

interface Props {
    title: string
    theme: ThemeData
}

function ThemeTab({title, theme}: Props) {
	return (
		<div
			className={`relative p-2 px-12 text-sm border-b-2`}
			style={{ borderColor: theme.content.accent }}
		>
			{title}
		</div>
	);
}

export default ThemeTab;
