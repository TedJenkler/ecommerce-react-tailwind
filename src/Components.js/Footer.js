import logo from "../Img/audiophile 2.svg"
import facebook from "../Img/facebook.svg"
import twitter from "../Img/twitter.svg"
import instagram from "../Img/instagram.svg"

const Footer = () => {
    return (
        <>
        <footer className="relative bg-black1 text-white flex flex-col items-center text-center pt-12 pb-10">
            <div className="absolute top-0 bg-darkorange w-24 h-1"></div>
            <img className="mb-12" src={logo} alt="footerlogo" />
            <ul className="flex flex-col gap-4 mb-12">
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
            </ul>
            <p className="mb-12 text-bordergrey mx-6">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="mb-12 text-bordergrey">Copyright 2021. All Rights Reserved</p>
            <div className="flex gap-4">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram"/>
            </div>
        </footer>
        </>
    )
}

export default Footer