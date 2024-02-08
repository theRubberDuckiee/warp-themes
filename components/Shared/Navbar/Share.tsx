import { DownloadIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function Share() {
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
