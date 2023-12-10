import SubHeader from "../Components.js/SubHeader"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import Product from "../Components.js/Product"
import zx9 from "../Img/ZX9.png"
import zx7 from "../Img/ZX7.png"

const SpeakerPage = () => {
    return (<>
        <SubHeader h1="HEADPHONES" />
        <main>
        <div className="flex flex-col items-center">
            <Product img={zx9} h11="ZX9" h12="SPEAKER" p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups." />
            <Product img={zx7} h11="ZX7" h12="SPEAKER" p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use." />
        </div>
            <section className="flex flex-col items-center mb-32">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link={"/speakers"} />
                <LinkItem img={earphones} h2="EARPHONES" />
            </section>
            <div className="flex flex-col items-center">
                <BestInfo />
            </div>
        </main>
        </>
    )
}

export default SpeakerPage