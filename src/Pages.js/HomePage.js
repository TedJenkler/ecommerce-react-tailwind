import LinkItem from "../Components.js/LinkItem"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"
import speakerx200 from "../Img/speaker-200px.png"
import earphoneimg from "../Img/earphonesimg.png"
import BestInfo from "../Components.js/BestInfo"
import { Link } from "react-router-dom"
import { Context } from "../App"
import { useContext } from "react"

const HomePage = () => {
    const [state, dispatch] = useContext(Context)
    return (
        <div className={state.togglecart  === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : null}>
        <header className="bg-black1 hero mb-10 bg-center bg-no-repeat md:bg-bottom lg:bg-[bottom_right_8rem] lg:mb-32">
            <div className="text-white text-center py-28 lg:w-1/2 lg:text-start lg:pb-40">
                <h2 className="mb-4 text-bordergrey text-sm tracking-[10px] lg:text-start lg:px-20">NEW PRODUCT</h2>
                <h1 className="mb-6 text-4xl tracking-widest md:px-52 lg:px-20 lg:text-start">XX99 Mark II HEADPHONES</h1>
                <p className="mb-7 text-base md:px-52 lg:px-20 lg:text-start">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to="/XX99_MARK_ll" className="text-sm py-3 px-8 bg-darkorange hover:bg-lightorange lg:mx-20">See Product</Link>
            </div>
        </header>
        <main className="lg:flex lg:flex-col lg:items-center">
            <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-24 lg:mb-40 lg:w-3/4 lg:gap-8">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link="/speakers" />
                <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
            </section>
            <div className="flex flex-col items-center">
            <section className="bg-darkorange w-11/12 flex flex-col items-center text-center pt-12 rounded-lg pb-14 mb-6 circlebg bg-top bg-no-repeat lg:flex-row lg:w-3/4">
                <img className="mb-8 lg:w-1/2" src={speakerx200} alt="speaker" />
                <div className="lg:w-1/2">
                    <h1 className="mb-6 text-4xl text-white">ZX9 <br/> SPEAKER</h1>
                    <p className="mb-6 mx-6 text-white text-base md:mx-52">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/zx9" className="py-3 px-8 text-white bg-black2 hover:bg-hoverblack">SEE PRODUCT</Link>
                </div>
            </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="py-24 bg-greywhite w-11/12 speakerbg bg-right bg-no-repeat bg-cover mb-6">
                    <h1 className="ml-6 mb-8">ZX7 SPEAKER</h1>
                    <Link to="/zx7" className="ml-6 border-black2 border py-3 px-8 hover:bg-black2 hover:text-white">SEE PRODUCT</Link>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="w-11/12 mb-32">
                    <img className="w-full mb-6" src={earphoneimg} alt="Earphones" />
                    <div className="bg-greywhite py-10">
                        <h1 className="ml-6 mb-8">YX1 EARPHONES</h1>
                        <Link to="/yx1" className="ml-6 border-black2 border py-3 px-8 hover:bg-black2 hover:text-white">SEE PRODUCT</Link>
                    </div>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <BestInfo />
            </div>
        </main>
        </div>
    )
}

export default HomePage