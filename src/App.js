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
import { useReducer, useState} from 'react';
import React from 'react';
import Cart from './Pages.js/Cart';
import CheckOut from './Pages.js/CheckOut';

export const Context = React.createContext();
export const CartContext = React.createContext();

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'update_product_img': {
        return {
          ...state,
          img: action.payload
        };
      }
      case 'update_product_product': {
        return {
          ...state,
          product: action.payload
        };
      }
      case 'update_product_cost': {
        return {
          ...state,
          cost: action.payload
        };
      }
      case 'add_cart': {
        return {
          ...state,
          cart: [...state.cart, {img: state.img, product: state.product, cost:state.cost, amount: state.cartcount}],
          cartcount: 0
        };
      }
      case 'clear_cart': {
        return {
          ...state,
          cart: {}
        };
      }
      case 'increment': {
        return {
          ...state,
          cartcount: state.cartcount + 1
        };
      }
      case 'decrement': {
        return {
          ...state,
          cartcount: state.cartcount - 1
        };
      }
      case 'totalbeforetax': {
        return {
          ...state,
          total: action.payload
        };
      }
    }
  }

  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, {cartcount: 0 , img: "", product: "none", cost: "", cart: [], total: 0})
  return (<>
    <Nav />
    <Context.Provider value={[state, dispatch]}>
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
      <Route path='/checkout' element={<CheckOut />} />
    </Routes>
    </CartContext.Provider>
    </Context.Provider>
    <Footer />
    </>
  );
}

export default App;
