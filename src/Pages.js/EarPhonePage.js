import SubHeader from "../Components.js/SubHeader"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import ProductLink from "../Components.js/ProductLink"
import yx1 from "../Img/yx1.png"

const EarPhonePage = () => {
    return (<>
        <SubHeader h1="EARPHONES" />
        <main>
        <div className="flex flex-col items-center">
            <ProductLink path="/yx1" img={yx1} h11="YX1 WIRELESS" h12="EARPHONES" p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." />
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
        </>
    )
}

export default EarPhonePage