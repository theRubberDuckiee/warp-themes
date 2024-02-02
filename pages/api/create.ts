import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.FIREBASE_APP_ID,
// };

export const firebaseConfig = {
	apiKey: "AIzaSyBzZfDNCqyrwUW8DvWSnEBn-Q-6mIzxADQ",
	authDomain: "warp-themes-cf724.firebaseapp.com",
	projectId: "warp-themes-cf724",
	storageBucket: "warp-themes-cf724.appspot.com",
	messagingSenderId: "227546572873",
	appId: "1:227546572873:web:4251b2470105d315223798",
	measurementId: "G-YY8ELH4ZN6"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const themesCollectionRef = collection(db, 'themes');

async function checkThemesCollection() {
	const querySnapshot = await getDocs(themesCollectionRef);
  
	if (querySnapshot.size === 0) {
	  console.log('Themes collection does not exist or is empty.');
	} else {
	  console.log('Themes collection exists and has documents:');
	  querySnapshot.forEach((doc) => {
		console.log(`Document ID: ${doc.id}, Data:`, doc.data());
	  });
	}
  }

async function handler(request: NextApiRequest, response: NextApiResponse) {
	checkThemesCollection();
	if (request.method != 'POST') return;

	let responseObj: { status: number; tId: string | number } = {
		status: -1,
		tId: '',
	};

	try {
		console.log('A')
		const docRef = await addDoc(themesCollectionRef, {
			name: request.body.name,
			content: request.body.content,
		});
		console.log('B')
		responseObj.status = 200;
		responseObj.tId = docRef.id;
	} catch (e) {
		responseObj.status = 500;
		responseObj.tId = -1;
	}

	response.status(responseObj.status).json(responseObj);
}

export default handler;
