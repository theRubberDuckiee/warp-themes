import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import { DownloadIcon } from '@heroicons/react/outline';
import WarpAppNavbarSystemButtons from '@components/Warp/Navbar/SystemButton';
import { Dialog, Transition } from '@headlessui/react';
import YAML from 'json-to-pretty-yaml';
import toast from 'react-hot-toast';
import Link from 'next/link';

function Share() {
	const [context, _] = useAppContext();
	const [isOpen, setIsOpen] = useState(false);
	const [tId, setTId] = useState(null);

	async function prepareDownload() {
		
	}

	function downloadTheme() {
	}

	return (
		<>
        <Link href="/community-themes">
            <a>
			<button onClick={() => {}} className='btn btn-primary gap-2'>
				<DownloadIcon className='w-6 h-6' />
				Share Theme
			</button>
            </a>
        </Link>
		</>
	);
}

export default Share;
