import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import YAML from 'json-to-pretty-yaml';

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

const script = `#!/bin/bash
# Theme Configuration
readonly THEME_NAME="%THEME_NAME%"
readonly THEME_CONTENT='%THEME_INPUT%'
# Warp Variables
readonly WARP_THEME_DIR="$HOME/.warp/themes"
# Colors
readonly RESET="\\033[0m"
readonly BLACK="\\033[0;30m"
readonly BOLD="\\033[1m"
readonly DIM="\\033[2m"
readonly GREEN_BOLD="\\033[1;32m"
readonly RED_BOLD="\\033[1;31m"
readonly BACKGROUND_LIGHT_GREEN="\\033[102m"
readonly BACKGROUND_LIGHT_RED="\\033[101m"
printf "\${BOLD}Warp-Themes Installer \${RESET}\${DIM}(v1.0.0)\${RESET}\\n\\n"
printf "\${GREEN_BOLD}✔\${RESET} \${BOLD}Installing theme:\${RESET}\${DIM} \${THEME_NAME}\${RESET}\\n"
# Check if WARP_THEME_DIR exists
if [ ! -d "\${WARP_THEME_DIR}" ]; then
	printf "\${GREEN_BOLD}✔\${RESET} \${BOLD}Creating Warp Theme Directory:\${RESET}\${DIM} \${WARP_THEME_DIR}\${RESET}\\n"
	mkdir -p "\${WARP_THEME_DIR}"
fi
# Check if theme file already exists
if [ -f "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml" ]; then
	printf "\${RED_BOLD}✗\${RESET} \${BOLD}Theme already exists:\${RESET} \${DIM}\${WARP_THEME_DIR}/\${THEME_NAME}.yaml\\n\\n"
	printf "\${BLACK}\${BACKGROUND_LIGHT_RED} Next steps \${RESET}\\n\\n"
	printf "Delete the file to continue\\n"
	printf "Copy and paste \${DIM}rm \${WARP_THEME_DIR}/\${THEME_NAME}.yaml \${RESET}into your terminal\\n" 
	exit 1
fi
touch "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml"
echo "\${THEME_CONTENT}" > "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml"	
printf "\${GREEN_BOLD}✔\${RESET} \${GREEN}Successfully installed the theme!\\n\\n"
printf "\${BLACK}\${BACKGROUND_LIGHT_GREEN} Next steps \${RESET}\\n\\n"
printf "Restart Warp and select \${GREEN_BOLD}\${THEME_NAME} \${RESET}from the Theme Picker\\n\\n"
printf "Don't know how to open the Theme Picker? \${GREEN_BOLD}https://docs.warp.dev/features/themes#how-to-access-it\${RESET}\\n"
printf "\${DIM}Enjoy your new theme!\${RESET}\\n"`;

const script_not_found = `#!/bin/bash
readonly RESET="\\033[0m"
readonly BOLD="\\033[1m"
readonly RED_BOLD="\\033[1;31m"
readonly BACKGROUND_LIGHT_RED="\\033[41;30m"
printf "\${BOLD}Warp-Themes Installer \${RESET}\${DIM}(v1.0.0)\${RESET}\\n\\n"
printf "\${RED_BOLD}✗\${RESET} \${BOLD}Theme not found!\\n\\n"
printf "\${BLACK}\${BACKGROUND_LIGHT_RED}\${BLACK} Next steps \${RESET}\\n\\n"
printf "Check if the ID is correct\nIf it is, click the Download button again\\n"
exit 1
`;

async function handler(request: NextApiRequest, response: NextApiResponse) {
	const tId = request.query.tId as string;
	const raw = request.query.raw;

	const docRef = doc(db, 'themes', tId);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		if (raw === 'true') {
			response.status(200).send(YAML.stringify(docSnap.data().content));
		} else {
			response
				.status(200)
				.send(
					script
						.replace('%THEME_NAME%', docSnap.data().name)
						.replace('%THEME_INPUT%', YAML.stringify(docSnap.data().content))
				);
		}
	} else {
		response.status(404).send(script_not_found);
	}
}

export default handler;
