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
import Menu from './Components.js/Menu';

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
      case 'update_product_id': {
        return {
          ...state,
          id: state.product
        };
      }
      case 'add_cart': {
        return {
          ...state,
          cart: {...state.cart, [state.id]: {img: state.img, product: state.product, cost:state.cost, amount: state.cartcount}},
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
      case 'totalamount': {
        return {
          ...state,
          amount: action.payload
        };
      }
      case 'togglecart': {
        return {
          ...state,
          togglecart: action.payload,
          togglemenu: true
        };
      }
      case 'togglemenu': {
        return {
          ...state,
          togglemenu: action.payload,
          togglecart: true
        };
      }
      case 'changename': {
        return {
          ...state,
          form: {...state.form, name: action.payload}
        };
      }
      case 'changeemail': {
        return {
          ...state,
          form: {...state.form, email: action.payload}
        };
      }
      case 'changephone': {
        return {
          ...state,
          form: {...state.form, phone: action.payload}
        };
      }
      case 'changeadress': {
        return {
          ...state,
          form: {...state.form, address: action.payload}
        };
      }
      case 'changepostal': {
        return {
          ...state,
          form: {...state.form, postal: action.payload}
        };
      }
      case 'changecity': {
        return {
          ...state,
          form: {...state.form, city: action.payload}
        };
      }
      case 'changecountry': {
        return {
          ...state,
          form: {...state.form, country: action.payload}
        };
      }
      case 'radio': {
        return {
          ...state,
          form: {...state.form, radio: action.payload}
        };
      }
      case 'changeenumber': {
        return {
          ...state,
          form: {...state.form, enumber: action.payload}
        };
      }
      case 'changepin': {
        return {
          ...state,
          form: {...state.form, epin: action.payload}
        };
      }
      case 'validname': {
        return {
          ...state,
          validation: {...state.validation, name: action.payload}
        };
      }
      case 'validemail': {
        return {
          ...state,
          validation: {...state.validation, email: action.payload}
        };
      }
      case 'validphone': {
        return {
          ...state,
          validation: {...state.validation, phone: action.payload}
        };
      }
      case 'validaddress': {
        return {
          ...state,
          validation: {...state.validation, address: action.payload}
        };
      }
      case 'validpostal': {
        return {
          ...state,
          validation: {...state.validation, postal: action.payload}
        };
      }
      case 'validcity': {
        return {
          ...state,
          validation: {...state.validation, city: action.payload}
        };
      }
      case 'validcountry': {
        return {
          ...state,
          validation: {...state.validation, country: action.payload}
        };
      }
      case 'validenumber': {
        return {
          ...state,
          validation: {...state.validation, enumber: action.payload}
        };
      }
      case 'validepin': {
        return {
          ...state,
          validation: {...state.validation, epin: action.payload}
        };
      }
      case 'addmorecart': {
        return {
          ...state,
          cart: {...state.cart, [action.payload]: {...state.cart[action.payload], amount: state.cart[action.payload].amount + 1}}
        };
      }
      case 'removefromcart': {
        return {
          ...state,
          cart: {...state.cart, [action.payload]: {...state.cart[action.payload], amount: state.cart[action.payload].amount - 1}}
        };
      }
    }
  }

  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, {cartcount: 0 , img: "", product: "none", cost: "", cart: {}, total: 0, togglecart: true, togglemenu: true, form: {name: "", email: "", phone: "", address: "", postal: "", city: "", country: "", radio: "", enumber: "", epin: ""}, validation: {name: true, email: true, phone: true, address: true, postal: true, city: true, country: true, radio: true, enumber: true, epin: true}})
  return (<>

    <Context.Provider value={[state, dispatch]}>
    <Nav />
    <CartContext.Provider value={[cart, setCart]}>
    <Menu />
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
