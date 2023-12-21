import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import zx9 from "../Img/ZX9_product.png"
import { useState, useEffect, useContext } from "react"
import closespeaker from "../Img/closeofspeaker.png"
import livingroom from "../Img/livingroom.png"
import twospeakers from "../Img/twospeakers.png"
import Suggestion from "../Components.js/Suggestion"
import suggestionxx99 from "../Img/suggestionxx99mark1.png"
import suggestionxx59 from "../Img/suggestionxx59.png"
import suggestionzx7 from "../Img/ZX7.png"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import { Context } from "../App"

const ZX9 = () => {
    const [newP, setNewP] = useState(true)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        dispatch({ type: 'update_product_img',
        payload: zx9
    });
        dispatch({ type: 'update_product_product',
        payload: "ZX9"
    });
        dispatch({ type: 'update_product_cost',
        payload: 4500
    });
    },[])
    return (
        <main className={state.togglecart === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : null}>
            <Product img={zx9} h11="ZX9" h12="SPEAKER"
            p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." 
            price="$ 4,500"
            p2="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."           
            p3="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms." 
            b1="Speaker Unit" b2="Speaker Cloth Panel" b3="User Manual" b4="3.5mm 10m Audio Cable" b5="10m Optical Cable" newp={newP} 
            nr1="2x" nr2="2x" nr3="1x" nr4="1x" nr5="1x" />
            <div className="flex flex-col items-center">
                <ImgGroup img1={closespeaker} img2={livingroom} img3={twospeakers} alt1="closespeaker" alt2="livingroom" alt3="twospeakers" />
            </div>
            <div className="flex flex-col items-center">
                <Suggestion link1="/ZX7" link2="/xx99_MARK_l" link3="/xx59"  img1={suggestionzx7} alt1="ZX7 SPEAKER" h21="ZX7 SPEAKER" img2={suggestionxx99} alt2="XX99MARKl" h22="XX99 MARK l" img3={suggestionxx59} alt3="xx59" h23="XX59" />
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

export default ZX9