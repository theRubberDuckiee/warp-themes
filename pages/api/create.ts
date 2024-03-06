  import { NextApiRequest, NextApiResponse } from 'next';
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
  const db = getFirestore(app);
  const themesCollectionRef = collection(db, 'themes');
  
  async function handler(request: NextApiRequest, response: NextApiResponse) {
	if (request.method !== 'POST') {
		response.status(405).end();
		return;
	}
  
	// Initialize response object
	const responseObj = {
		status: -1,
		tId: '',
	};
  
	try {
		console.log('fuck you')
		const docRef = await addDoc(themesCollectionRef, {
		name: request.body.name,
		content: request.body.content,
		themeUser: request.body.themeUser,
		counter: 0,
	});
	console.log('docRef', docRef)
	console.log('docRefid', docRef.id)
	responseObj.status = 200;
	responseObj.tId = docRef.id;
	response.status(responseObj.status).json(responseObj);
} catch (error) {
	response.status(500).json({ status: 500, tId: -1 });
	}
  }
  
  export default handler;
  