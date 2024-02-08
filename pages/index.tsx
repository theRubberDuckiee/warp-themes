import LandingPage from "@components/Community-Themes/LandingPage";
import AppNavbar from "@components/Shared/Navbar/Navbar";


function Index() {
	return (
	  <div className='flex h-screen flex-col bg-slate-100 sm:bg-white overflow-y-hidden'>
		<div className='w-full border-b z-20 fixed'>
		  <AppNavbar />
		</div>
		<div className='flex flex-col h-full mt-16 sm:mt-16 overflow-y-auto'>
		  <LandingPage />
		</div>
	  </div>
	);
  }
  
  export default Index;
  
