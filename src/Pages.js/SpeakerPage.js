import SubHeader from "../Components.js/SubHeader"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import ProductLink from "../Components.js/ProductLink"
import zx9 from "../Img/ZX9.png"
import zx7 from "../Img/ZX7.png"
import { Context } from "../App"
import { useContext } from "react"

const SpeakerPage = () => {
    const [state, dispatch] = useContext(Context)
    return (<>
        <SubHeader h1="Speakers" />
        <main className={state.togglecart  === false ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : "lg:flex lg:flex-col lg:items-center"}>
        <div className="flex flex-col items-center">
            <ProductLink mway="lg:ml-20" way="lg:flex-row" path="/zx9" isNew={true} img={zx9} h11="ZX9" h12="SPEAKER" p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." />
            <ProductLink mway="lg:mr-20" way="lg:flex-row-reverse" path="/zx7" isNew={false} img={zx7} h11="ZX7" h12="SPEAKER" p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use." />
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
        </>
    )
}

export default SpeakerPage