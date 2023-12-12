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
import XX59 from './Pages.js/XX59';
import ZX9 from './Pages.js/ZX9';
import ZX7 from './Pages.js/ZX7';
import YX1 from './Pages.js/yx1'
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState("");
  return (<>
    <Nav />
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/Headphones' element={<HeadPhonePage />} />
      <Route path='/Speakers' element={<SpeakerPage />} />
      <Route path='/Earphones' element={<EarPhonePage />} />
      <Route path={'/XX99_MARK_ll'} element={<XX99_MARK_ll product={product} setProduct={setProduct} />} />
      <Route path='/XX99_MARK_l' element={<XX99_MARK_l product={product} setProduct={setProduct} />} />
      <Route path='/XX59' element={<XX59 product={product} setProduct={setProduct} />} />
      <Route path='/ZX9' element={<ZX9 product={product} setProduct={setProduct} />} />
      <Route path='/ZX7' element={<ZX7 product={product} setProduct={setProduct} />} />
      <Route path='/yx1' element={<YX1 product={product} setProduct={setProduct} />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
