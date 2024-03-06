import { ThemeData } from "interface/interface";
import React from 'react';

interface Props {
    title: string;
    theme: ThemeData;
}

function ThemeTab({ title, theme }: Props) {
    let tabStyle: React.CSSProperties
	
	
	if (typeof theme.content.accent === 'string') {
		tabStyle = {
            ...tabStyle,
			borderColor: theme.content.accent
        };
    };

    // Check if accent is an object with left and right colors
    if (typeof theme.content.accent === 'object' && theme.content.accent !== null) {
        tabStyle = {
            ...tabStyle,
            background: `linear-gradient(to right, ${theme.content.accent.left}, ${theme.content.accent.right})`,
            color: 'white', // Optionally set text color to white for better contrast
        };
    }

    return (
        <div
            className={`relative p-2 px-12 text-sm border-b-2`}
            style={tabStyle}
        >
            {title}
        </div>
    );
}

export default ThemeTab;
