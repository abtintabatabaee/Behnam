
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ClinicExperience from './pages/ClinicExperience';

const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
   <Routes>
   <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/clinicExperience' element={<ClinicExperience/>}/>

 </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;