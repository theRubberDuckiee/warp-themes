import ThemeWithBackground from '@components/Theme-Page/ThemeWithBackground';
import { useRouter } from 'next/router';
import { getWarpImgByName, getWarpThemeByName } from 'utils/getFeaturedThemesUtils';
import React from 'react';

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
