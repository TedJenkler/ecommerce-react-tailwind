import './App.css';
import HomePage from './Pages.js/HomePage';
import Nav from './Components.js/Nav';
import Footer from './Components.js/Footer';
import { Route, Routes } from 'react-router';
import HeadPhonePage from './Pages.js/HeadPhonePage';
import SpeakerPage from './Pages.js/SpeakerPage';

function App() {
  return (<>
    <Nav />
    <Routes>
    <Route index path='/' element={<HomePage />} />
    <Route path='/Headphones' element={<HeadPhonePage />} />
    <Route path='/Speakers' element={<SpeakerPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
