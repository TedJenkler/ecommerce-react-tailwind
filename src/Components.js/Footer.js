import logo from "../Img/audiophile 2.svg"
import facebook from "../Img/facebook.svg"
import twitter from "../Img/twitter.svg"
import instagram from "../Img/instagram.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
        <footer className="relative bg-black1 text-white flex flex-col items-center text-center pt-12 pb-10 md:items-start md:p-10">
            <div className="absolute top-0 bg-darkorange w-24 h-1"></div>
            <Link to="/"><img className="mb-12" src={logo} alt="footerlogo" /></Link>
            <ul className="flex flex-col gap-4 mb-12 md:flex-row">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/Headphones"><li>HEADPHONES</li></Link>
                <Link to="/Speakers"><li>SPEAKERS</li></Link>
                <Link to="/Earphones"><li>EARPHONES</li></Link>
            </ul>
            <p className="mb-12 text-bordergrey mx-6 md:text-start md:mx-0">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className="flex w-full flex-col items-center md:flex-row md:justify-between md:items-baseline">
                <p className="mb-12 text-bordergrey">Copyright 2021. All Rights Reserved</p>
                <div className="flex gap-4">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram"/>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer