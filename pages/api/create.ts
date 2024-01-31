import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function handler(request: NextApiRequest, response: NextApiResponse) {
	if (request.method != 'POST') return;

	let responseObj: { status: number; tId: string | number } = {
		status: -1,
		tId: '',
	};

	try {
		const docRef = await addDoc(collection(db, 'themes'), {
			name: request.body.name,
			content: request.body.content,
		});
		responseObj.status = 200;
		responseObj.tId = docRef.id;
	} catch (e) {
		responseObj.status = 500;
		responseObj.tId = -1;
	}

	response.status(responseObj.status).json(responseObj);
}

export default handler;
