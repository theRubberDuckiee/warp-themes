interface Props {
	type: 'close' | 'min' | 'max';
}

function WarpAppNavbarSystemButtons(props: Props) {
	const { type } = props;

	return (
		<span
			className={`m-0.5 mr-2 rounded-full p-1.5 ${
				type == 'close' ? 'bg-red-500' : type == 'min' ? 'bg-yellow-500' : 'bg-green-500'
			}`}
		></span>
	);
}

export default WarpAppNavbarSystemButtons;
