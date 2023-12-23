import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import XX99MARK2 from "../Img/xx99_mark_2_product.png"
import { useContext, useEffect, useState } from "react"
import man from "../Img/guywithheadphones.png"
import itemstable from "../Img/thingsontable.png"
import headphoneclose from "../Img/close picture of headphones.png"
import Suggestion from "../Components.js/Suggestion"
import suggestionxx99 from "../Img/suggestionxx99mark1.png"
import suggestionxx59 from "../Img/suggestionxx59.png"
import suggestionzx9 from "../Img/ZX9.png"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import { Context } from "../App"

const XX99_MARK_ll = () => {
    const [newP, setNewP] = useState(true)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        dispatch({ type: 'update_product_img',
        payload: XX99MARK2
    });
        dispatch({ type: 'update_product_product',
        payload: "XX99_MARK_II"
    });
        dispatch({ type: 'update_product_cost',
        payload: 2999
    });
    },[])
    return (
        <main className={state.togglecart  === false ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : "lg:flex lg:flex-col lg:items-center lg:px-10"}>
            <Product img={XX99MARK2} h11="XX99 Mark II" h12="Headphones"
            p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." 
            price="$ 2,999"
            p2="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."           p3="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic." 
            b1="Headphone Unit" b2="Replacement Earcups" b3="User Manual" b4="3.5mm 5m Audio Cable" b5="Travel Bag" newp={newP} 
            nr1="1x" nr2="2x" nr3="1x" nr4="1x" nr5="1x"/>
            <div className="flex flex-col items-center md:mx-10 lg:mx-0">
                <ImgGroup img1={man} img2={itemstable} img3={headphoneclose} alt1="manwithheadphones" alt2="thingsontable" alt3="headphones close" />
            </div>
            <div className="flex flex-col items-center md:mb-32">
                <Suggestion link1="/XX99_MARK_l" link2="/xx59" link3="/zx9" img1={suggestionxx99} alt1="xx99mark1" h21="XX99 MARK I" img2={suggestionxx59} alt2="XX59" h22="XX59" img3={suggestionzx9} alt3="ZX9 SPEAKER" h23="ZX9 SPEAKER" />
            </div>
            <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-24 lg:mb-40 lg:w-3/4 lg:gap-8">
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

export default XX99_MARK_ll