import SubHeader from "../Components.js/SubHeader"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import ProductLink from "../Components.js/ProductLink"
import yx1 from "../Img/yx1.png"
import { Context } from "../App"
import { useContext } from "react"

const EarPhonePage = () => {
    const [state, dispatch] = useContext(Context)
    return (<>
        <main className={state.togglecart === false ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : "lg:flex lg:flex-col lg:items-center"}>
        <SubHeader h1="EARPHONES" />
        <div className="flex flex-col items-center">
            <ProductLink mway="lg:ml-20" way="lg:flex-row" path="/yx1" isNew={true} img={yx1} h11="YX1 WIRELESS" h12="EARPHONES" p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature." />
        </div>
            <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-24 lg:mb-40 lg:w-3/4 lg:gap-8">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link={"/speakers"} />
                <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
            </section>
            <div className="flex flex-col items-center lg:w-3/4">
                <BestInfo />
            </div>
        </main>
        </>
    )
}

export default EarPhonePage