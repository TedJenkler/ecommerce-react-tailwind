import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import yx1 from "../Img/yx1_product.png"
import { useEffect, useState } from "react"
import earphonelose from "../Img/earphonelose.png"
import chargingearphones from "../Img/chargingearphones.png"
import earphonecase from "../Img/earphonecase.png"
import Suggestion from "../Components.js/Suggestion"
import suggestionxx99 from "../Img/suggestionxx99mark1.png"
import suggestionxx59 from "../Img/suggestionxx59.png"
import suggestionzx9 from "../Img/ZX9_product.png"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"

const YX1 = ( {product, setProduct} ) => {
    const [newP, setNewP] = useState(true)
    useEffect(() => {
        setProduct("YX1")
        console.log(product)
    },)
    return (
        <main>
            <Product img={yx1} h11="YX1 WIRELESS" h12="EARPHONES"
            p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." 
            price="$ 599"
            p2="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."           
            p3="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black." 
            b1="Earphone Unit" b2="Multi-size Earplugs" b3="User Manual" b4="USB-C Charging Cable" b5="Travel Pouch" newp={newP} />
            <div className="flex flex-col items-center">
                <ImgGroup img1={earphonelose} img2={chargingearphones} img3={earphonecase} alt1="closespeaker" alt2="livingroom" alt3="twospeakers" />
            </div>
            <div className="flex flex-col items-center">
                <Suggestion link1="/xx99_MARK_l" link2="/XX59" link3="/zx9"  img1={suggestionxx99} alt1="XX99 MARK I" h21="XX99 MARK I" img2={suggestionxx59} alt2="XX59" h22="XX59" img3={suggestionzx9} alt3="ZX9 SPEAKER" h23="ZX9 SPEAKER" />
            </div>
            <section className="flex flex-col items-center mb-32">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link={"/speakers"} />
                <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
            </section>
            <div className="flex flex-col items-center">
                <BestInfo />
            </div>
        </main>
    )
}

export default YX1