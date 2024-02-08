import { useAppContext } from '@lib/AppContext';

interface Props {
	title: string;
	active?: boolean;
}

function WarpAppNavbarTab(props: Props) {
	const [context, _] = useAppContext();
	const { title, active } = props;

	return (
		<div
			className={`relative p-2 px-12 text-sm ${active ? 'border-b-4' : 'opacity-70'}`}
			style={{ borderColor: context.accent.color }}
		>
			{title}
		</div>
	);
}

export default WarpAppNavbarTab;
