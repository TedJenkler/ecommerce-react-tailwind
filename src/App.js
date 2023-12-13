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
import { useState} from 'react';
import React from 'react';
import Cart from './Pages.js/Cart';

export const Context = React.createContext();
export const CartContext = React.createContext();

function App() {
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);
  return (<>
    <Nav />
    <Context.Provider value={[product, setProduct]}>
    <CartContext.Provider value={[cart, setCart]}>
    <Cart />
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/Headphones' element={<HeadPhonePage />} />
      <Route path='/Speakers' element={<SpeakerPage />} />
      <Route path='/Earphones' element={<EarPhonePage />} />
      <Route path={'/XX99_MARK_ll'} element={<XX99_MARK_ll />} />
      <Route path='/XX99_MARK_l' element={<XX99_MARK_l />} />
      <Route path='/XX59' element={<XX59 />} />
      <Route path='/ZX9' element={<ZX9 />} />
      <Route path='/ZX7' element={<ZX7 />} />
      <Route path='/yx1' element={<YX1 />} />
    </Routes>
    </CartContext.Provider>
    </Context.Provider>
    <Footer />
    </>
  );
}

export default App;
