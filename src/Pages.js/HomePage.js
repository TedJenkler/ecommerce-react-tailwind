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
        <div className={state.togglecart  === false ? "blur-sm brightness-50 bg-bordergrey h-screen overflow-hidden" : state.togglemenu === false ? "blur-sm bg-bordergrey h-screen overflow-hidden" : null}>
        <header className="bg-black1 hero mb-10 bg-bottom bg-no-repeat md:bg-bottom lg:bg-[bottom_right_8rem] lg:mb-32 lg:flex lg:justify-center xl:bg-[bottom_right_20rem]">
            <div className="text-white text-center py-28 lg:text-start lg:pb-40 lg:w-3/4">
                <h2 className="mb-4 text-bordergrey text-sm tracking-[10px] lg:text-start lg:px-0 ">NEW PRODUCT</h2>
                <h1 className="mb-6 text-4xl tracking-widest md:px-52 lg:px-0 lg:text-start lg:pr-96 xl:pr-96 xl:mr-96">XX99 Mark II HEADPHONES</h1>
                <p className="mb-7 text-base px-8 text-white/75 md:px-52 lg:px-0 lg:text-start lg:pr-96 xl:mr-96">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to="/XX99_MARK_ll" className="text-sm py-3 px-8 bg-darkorange hover:bg-lightorange lg:mx-0">See Product</Link>
            </div>
        </header>
        <main className="lg:flex lg:flex-col lg:items-center">
            <section className="flex flex-col items-center mb-32 md:flex-row md:gap-2 md:mx-4 md:mb-24 lg:mb-40 lg:w-3/4 lg:gap-8">
                <LinkItem img={headphones} h2="HEADPHONES" link="/headphones" />
                <LinkItem img={speaker} h2="SPEAKERS" link="/speakers" />
                <LinkItem img={earphones} h2="EARPHONES" link={"/earphones"} />
            </section>
            <div className="flex flex-col items-center lg:w-3/4">
            <section className="bg-darkorange w-11/12 flex flex-col items-center text-center pt-12 rounded-lg pb-14 mb-6 bg-mobile-orangecircle bg-top bg-no-repeat md:bg-tablet-orangecircle lg:flex-row lg:w-full lg:pt-12 lg:px-5 lg:p-0 lg:items-end">
                <div className="lg:w-1/2 lg:flex lg:justify-end lg:items-end lg:overflow-hidden">
                <img className="mb-8 lg:h-96 lg:mb-[-2rem]" src={speakerx200} alt="speaker" />
                </div>
                <div className="lg:w-1/2 lg:text-start lg:pb-20 lg:px-16">
                    <h1 className="mb-6 text-4xl text-white">ZX9 <br/> SPEAKER</h1>
                    <p className="mb-6 mx-6 text-white/75 text-base md:mx-52 md:mb-10 lg:text-start lg:mx-0">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/zx9" className="py-3 px-8 text-white bg-black2 hover:bg-hoverblack">SEE PRODUCT</Link>
                </div>
            </section>
            </div>
            <div className="flex flex-col items-center lg:w-3/4">
                <section className="py-24 rounded-lg bg-greywhite w-11/12 bg-mobile-speaker bg-right bg-no-repeat bg-cover mb-6 md:bg-tablet-speaker lg:w-full">
                    <h1 className="ml-6 mb-8 text-3xl lg:ml-20">ZX7 SPEAKER</h1>
                    <Link to="/zx7" className="ml-6 border-black2 border py-3 px-8 hover:bg-black2 hover:text-white lg:ml-20">SEE PRODUCT</Link>
                </section>
            </div>
            <div className="flex flex-col items-center lg:w-3/4">
                <section className="w-11/12 mb-32 md:flex lg:w-full">
                    <img className="w-full mb-6 md:w-1/2 md:h-80 md:object-cover rounded-lg" src={earphoneimg} alt="Earphones" />
                    <div className="bg-greywhite py-10 md:h-80 md:ml-3 rounded-lg md:w-1/2 md:flex md:flex-col md:items-start md:justify-center">
                        <h1 className="ml-6 mb-8 text-3xl">YX1 EARPHONES</h1>
                        <Link to="/yx1" className="ml-6 border-black2 border py-3 px-8 hover:bg-black2 hover:text-white">SEE PRODUCT</Link>
                    </div>
                </section>
            </div>
            <div className="flex flex-col items-center lg:w-3/4">
                <BestInfo />
            </div>
        </main>
        </div>
    )
}

export default HomePage