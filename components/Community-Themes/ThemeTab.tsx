import { useAppContext } from '@lib/AppContext';

interface Props {
    title: string
    theme: any
}

function ThemeTab({title, theme}) {

	return (
		<div
			className={`relative p-2 px-12 text-sm 'border-b-4'`}
			style={{ borderColor: theme.data.accent }}
		>
			{title}
		</div>
	);
}

export default ThemeTab;
