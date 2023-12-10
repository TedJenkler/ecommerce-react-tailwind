import cart from "../Img/Combined Shape 2.svg"
import hamburger from "../Img/Group.svg"
import logo from "../Img/audiophile 2.svg"

const Nav = () => {
    return (
        <>
        <nav className="py-8 px-6 flex justify-between border-bordergrey border-b bg-black1">
            <img src={hamburger} alt="hamburger" />
            <img src={logo} alt="logo" />
            <img src={cart} alt="cart" />
        </nav>
        </>
    )
}

export default Nav