import './App.css';
import HomePage from './Pages.js/HomePage';
import Nav from './Components.js/Nav';
import Footer from './Components.js/Footer';
import { Route, Routes } from 'react-router';
import HeadPhonePage from './Pages.js/HeadPhonePage';
import SpeakerPage from './Pages.js/SpeakerPage';
import EarPhonePage from './Pages.js/EarPhonePage';
import XX99_MARK_ll from './Pages.js/XX99_MARK_ll'
import XX99_MARK_l from './Pages.js/XX99_MARK_l'

function App() {
  return (<>
    <Nav />
    <Routes>
    <Route index path='/' element={<HomePage />} />
    <Route path='/Headphones' element={<HeadPhonePage />} />
    <Route path='/Speakers' element={<SpeakerPage />} />
    <Route path='/Earphones' element={<EarPhonePage />} />
    <Route path='/XX99_MARK_ll' element={<XX99_MARK_ll />} />
    <Route path='/XX99_MARK_l' element={<XX99_MARK_l />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
