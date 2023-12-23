import cart from "../Img/Combined Shape 2.svg"
import hamburger from "../Img/Group.svg"
import logo from "../Img/audiophile 2.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../App"

const Nav = () => {

    const togglecartmenu = () => {
        if(state.togglecart === true){
            dispatch({type: 'togglecart',
            payload: false
        })
        }else {
            dispatch({type: 'togglecart',
            payload: true
        })
        }
    }

    const togglemenu = () => {
        if(state.togglemenu === true){
            dispatch({type: 'togglemenu',
            payload: false
        })
        }else {
            dispatch({type: 'togglemenu',
            payload: true
        })
        }
    }
    const [state, dispatch] = useContext(Context)
    return (
        <div className="bg-black1 lg:flex lg:justify-center">
        <nav className="py-8 px-6 flex justify-between border-bordergrey/[.2] border-b bg-black1 md:justify-between md:relative md:px-10 lg:w-3/4">
            <img className="lg:hidden lg:absolute" onClick={togglemenu} src={hamburger} alt="hamburger" />
            <Link className="md:absolute md:left-24 lg:relative lg:left-0" to="/"><img src={logo} alt="logo" /></Link>
            <ul className="hidden absolute text-white lg:relative lg:flex lg:gap-8">
                <Link to="/" className="hover:text-darkorange">HOME</Link>
                <Link to="/headphones" className="hover:text-darkorange">HEADPHONES</Link>
                <Link to="/speakers" className="hover:text-darkorange">SPEAKERS</Link>
                <Link to="/earphones" className="hover:text-darkorange">EARPHONES</Link>
            </ul>
            <img className="" onClick={togglecartmenu} src={cart} alt="cart" />
        </nav>
        </div>
    )
}

export default Nav