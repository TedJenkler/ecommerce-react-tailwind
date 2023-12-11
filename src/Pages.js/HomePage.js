import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import speakerx200 from "../Img/speaker-200px.png"
import earphoneimg from "../Img/earphonesimg.png"
import BestInfo from "../Components.js/BestInfo"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
        <header className="bg-black1 hero mb-10 bg-center bg-no-repeat">
            <div className="text-white text-center py-28">
                <h2 className="mb-4 text-bordergrey text-sm tracking-[10px]">NEW PRODUCT</h2>
                <h1 className="mb-6 text-4xl tracking-widest">XX99 Mark II HEADPHONES</h1>
                <p className="mb-7 text-base">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to="/XX99_MARK_ll" className="text-sm py-3 px-8 bg-darkorange">See Product</Link>
            </div>
        </header>
        <main>
            <section className="flex flex-col items-center mb-32">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link="/speakers" />
                <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
            </section>
            <div className="flex flex-col items-center">
            <section className="bg-darkorange w-11/12 flex flex-col items-center text-center pt-12 rounded-lg pb-14 mb-6 circlebg bg-top bg-no-repeat">
                <img className="mb-8" src={speakerx200} alt="speaker" />
                <h1 className="mb-6 text-4xl text-white">ZX9 <br/> SPEAKER</h1>
                <p className="mb-6 mx-6 text-white text-base">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="py-3 px-8 text-white bg-black2">SEE PRODUCT</button>
            </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="py-24 bg-greywhite w-11/12 speakerbg bg-right bg-no-repeat bg-cover mb-6">
                    <h1 className="ml-6 mb-8">ZX7 SPEAKER</h1>
                    <button className="ml-6 border-black2 border py-3 px-8">SEE PRODUCT</button>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="w-11/12 mb-32">
                    <img className="w-full mb-6" src={earphoneimg} alt="Earphones" />
                    <div className="bg-greywhite py-10">
                        <h1 className="ml-6 mb-8">YX1 EARPHONES</h1>
                        <button className="ml-6 border-black2 border py-3 px-8">SEE PRODUCT</button>
                    </div>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <BestInfo />
            </div>
        </main>
        </>
    )
}

export default HomePage