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
    const [state, dispatch] = useContext(Context)
    return (
        <>
        <nav className="py-8 px-6 flex justify-between border-bordergrey border-b bg-black1">
            <img src={hamburger} alt="hamburger" />
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <img onClick={togglecartmenu} src={cart} alt="cart" />
        </nav>
        </>
    )
}

export default Nav