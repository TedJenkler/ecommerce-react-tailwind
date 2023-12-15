import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import zx7 from "../Img/ZX7_product.png"
import { useState, useEffect, useContext } from "react"
import closespeakerblack from "../Img/closeofblackspeaker.png"
import speakerroom from "../Img/speakerroom.png"
import speakerontable from "../Img/speakerontable.png"
import Suggestion from "../Components.js/Suggestion"
import suggestionxx99 from "../Img/suggestionxx99mark1.png"
import suggestionxx59 from "../Img/suggestionxx59.png"
import suggestionzx9 from "../Img/suggestionzx9png.png"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import { Context } from "../App"

const ZX7 = () => {
    const [newP, setNewP] = useState(false)
    const [state, dispatch] = useContext(Context)

    useEffect(() => {
        dispatch({ type: 'update_product_img',
        payload: zx7
    });
        dispatch({ type: 'update_product_product',
        payload: "ZX7"
    });
        dispatch({ type: 'update_product_cost',
        payload: 3500
    });
        console.log(state)
    },[])

    return (
        <main className={state.togglecart  === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : null}>
            <Product img={zx7} h11="ZX7" h12="SPEAKER"
            p="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            price="$ 3,500"
            p2="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
            p3="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
            b1="Speaker Unit" b2="Speaker Cloth Panel" b3="User Manual" b4="3.5mm 7.5m Audio Cable" b5="7.5m Optical Cable" newp={newP} 
            nr1="2x" nr2="2x" nr3="1x" nr4="1x" nr5="1x" />
            <div className="flex flex-col items-center">
                <ImgGroup img1={closespeakerblack} img2={speakerroom} img3={speakerontable} alt1="closespeakerblack" alt2="speakerroom" alt3="speakerontable" />
            </div>
            <div className="flex flex-col items-center">
                <Suggestion link1="/ZX9" link2="/xx99_MARK_l" link3="/xx59"  img1={suggestionzx9} alt1="ZX9 SPEAKER" h21="ZX9 SPEAKER" img2={suggestionxx99} alt2="XX99MARKl" h22="XX99 MARK l" img3={suggestionxx59} alt3="xx59" h23="XX59" />
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

export default ZX7