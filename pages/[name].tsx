import ThemeLandingPage from '@components/Theme-Page';
import ThemeWithBackground from '@components/Theme-Page/ThemeWithBackground';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db } from 'pages/api/create';
import { useEffect, useState } from 'react';
import { getWarpImgByName, getWarpThemeByName } from 'utils';

const ThemePage = () => {
  const router = useRouter();
  const themeName = router.query.name as string;
  const theme = getWarpThemeByName(themeName)
  const img = getWarpImgByName(themeName)

  return (
	<ThemeWithBackground name={themeName} img={img} themeData={theme}/>
  );
}

export default ThemePage;
