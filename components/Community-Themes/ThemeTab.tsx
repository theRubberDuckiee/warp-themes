import { Theme } from "interface";

interface Props {
    title: string
    theme: Theme
}

function ThemeTab({title, theme}) {
	return (
		<div
			className={`relative p-2 px-12 text-sm border-b-2`}
			style={{ borderColor: theme.data.content.accent }}
		>
			{title}
		</div>
	);
}

export default ThemeTab;
