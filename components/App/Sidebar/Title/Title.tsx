interface Props {
	children: string;
}

function SidebarTitle(props: Props) {
	const { children } = props;
	return <h2 className='text-lg font-medium text-gray-900'>{children}</h2>;
}

export default SidebarTitle;
