import ThemeCard from './ThemeCard';

export default function AllCommunityThemes({setUploadedThemesCount, themes, loading}) {
  console.log(themes[0].id)
  return (
    <div className='flex h-screen flex-col bg-slate-100 dark:bg-gray-900 overflow-y-hidden text-black dark:text-white'>
      <div className="overflow-y-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            themes.map((item, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  theme={item.data}
                  themeId = {item.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
  
}
