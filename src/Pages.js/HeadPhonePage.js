import SubHeader from "../Components.js/SubHeader"
import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import BestInfo from "../Components.js/BestInfo"
import ProductLink from "../Components.js/ProductLink"
import xx99mark2 from "../Img/xx99_mark_2.png"
import xx99mark1 from "../Img/xx99_mark_1.png"
import xx59 from "../Img/xx59.png"
import { Context } from "../App"
import { useContext } from "react"

const HeadPhonePage = () => {
    const [state, dispatch] = useContext(Context)
    return (<>
        <main className={state.togglecart  === false ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : "lg:flex lg:flex-col lg:items-center"}>
        <SubHeader h1="HEADPHONES" />
        <div className="flex flex-col items-center">
            <ProductLink mway="lg:ml-20" way="lg:flex-row" path="/XX99_MARK_ll" isNew={true} img={xx99mark2} h11="XX99 Mark II" h12="Headphones" p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." />
            <ProductLink mway="lg:mr-20" way="lg:flex-row-reverse" path="/XX99_MARK_l" isNew={false} img={xx99mark1} h11="XX99 Mark I" h12="Headphones" p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go." />
            <ProductLink mway="lg:ml-20" way="lg:flex-row" path="/XX59" isNew={false} img={xx59} h11="XX59" h12="Headphones" p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." />
        </div>
            <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-24 lg:mb-40 lg:w-3/4 lg:gap-8">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link={"/speakers"} />
                <LinkItem img={earphones} h2="EARPHONES" />
            </section>
            <div className="flex flex-col items-center lg:w-3/4">
                <BestInfo />
            </div>
        </main>
        </>
    )
}

export default HeadPhonePage