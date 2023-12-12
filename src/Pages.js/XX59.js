import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import xx59 from "../Img/XX59_product.png"
import { useState } from "react"
import woman from "../Img/singingwoman.png"
import bookandheadphones from "../Img/bookandheadphones.png"
import lightheadphones from "../Img/lightheadphones.png"
import Suggestion from "../Components.js/Suggestion"
import suggestionxx99 from "../Img/suggestionxx99mark2.png"
import suggestionxx99mark1 from "../Img/suggestionxx99mark1.png"
import suggestionzx9 from "../Img/ZX9.png"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"

const XX59 = ( {} ) => {
    const [newP, setNewP] = useState(false)
    return (
        <main>
            <Product img={xx59} h11="XX59" h12="Headphones"
            p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            price="$ 899"
            p2="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
            p3="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
            b1="Headphone Unit" b2="Replacement Earcups" b3="User Manual" b4="3.5mm 5m Audio Cable" b5="" newp={newP} />
            <div className="flex flex-col items-center">
                <ImgGroup img1={woman} img2={bookandheadphones} img3={lightheadphones} alt1="hangingheadphones" alt2="thingsonfloor" alt3="glowingheadphones" />
            </div>
            <div className="flex flex-col items-center">
                <Suggestion link1="/XX99_MARK_ll" link2="/XX99_MARK_l" link3="/zx9" img1={suggestionxx99} alt1="xx99mark2" h21="XX99 MARK II" img2={suggestionxx99mark1} alt2="XX99" h22="XX99 MARK I" img3={suggestionzx9} alt3="ZX9 SPEAKER" h23="ZX9 SPEAKER" />
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

export default XX59