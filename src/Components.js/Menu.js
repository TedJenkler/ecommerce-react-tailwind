import LinkItem from "./LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import { Context } from "../App";
import { useContext} from "react";

const Menu = () => {
    const [state, dispatch] = useContext(Context)
    return (
        <section className="relative min-w-full">
        <nav className={state.togglemenu === true ? "hidden" : "flex absolute w-full bg-white z-50 flex-col items-center md:flex-row md:gap-2 md:mb-24 md:mx-0 md:px-10 md:py-12"}>
            <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
            <LinkItem img={speaker} h2="SPEAKERS" link="/speakers" />
            <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
        </nav>
        </section>
    )
}

export default Menu