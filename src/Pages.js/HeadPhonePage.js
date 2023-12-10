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

const HeadPhonePage = () => {
    return (<>
        <SubHeader h1="HEADPHONES" />
        <main>
        <div className="flex flex-col items-center">
            <ProductLink img={xx99mark2} h11="XX99 Mark II" h12="Headphones" p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." />
            <ProductLink img={xx99mark1} h11="XX99 Mark I" h12="Headphones" p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go." />
            <ProductLink img={xx59} h11="XX59" h12="Headphones" p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." />
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

export default HeadPhonePage