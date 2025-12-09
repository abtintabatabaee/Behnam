
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
  const Home = lazy(()=>import("./pages/Home"))
  const Admin = lazy(()=>import("./pages/Admin"))
  const ClinicExperience = lazy(()=>import("./pages/ClinicExperience"))
  const CosmeticDentistry = lazy(()=>import("./pages/CosmeticDentistry"))
  const PorcelainVeneers = lazy(()=>import("./pages/PorcelainVeneers"))
  const SmileMakeover = lazy(()=>import("./pages/SmileMakeover"))
  const AboutUs = lazy(()=>import("./pages/AboutUs"))
  const BeforAndAfterPage = lazy(()=>import("./pages/BeforAndAfterPage"))
  const Location = lazy(()=>import("./pages/Location"))
function App() {
  return (
    <BrowserRouter basename={basename}>
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
   <Routes>
   <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/clinicExperience' element={<ClinicExperience/>}/>
        <Route path='/cosmeticDentistry' element={<CosmeticDentistry/>}/>
        <Route path='/porcelainVeneers' element={<PorcelainVeneers/>}/>
        <Route path='/smileMakeover' element={<SmileMakeover/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/beforeAndAfterPage' element={<BeforAndAfterPage/>}/>
        <Route path='/location' element={<Location/>}/>

 </Route>
   </Routes>
   </Suspense>
   </BrowserRouter>
  );
}

export default App;