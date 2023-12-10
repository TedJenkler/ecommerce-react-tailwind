import LinkItem from "../Components.js/LinkItem"
import Nav from "../Components.js/Nav"
import headphones from "../Img/headphones.png"
import speaker from "../Img/speakers.png"
import earphones from "../Img/earphones.png"

const HomePage = () => {
    return (
        <>
        <header className="bg-black1 hero mb-10 bg-center bg-no-repeat">
            <Nav />
            <div className="text-white text-center py-28">
                <h2 className="mb-4 text-bordergrey text-sm tracking-[10px]">NEW PRODUCT</h2>
                <h1 className="mb-6 text-4xl tracking-widest">XX99 Mark II HEADPHONES</h1>
                <p className="mb-7 text-base">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="text-sm py-3 px-8 bg-darkorange">See Product</button>
            </div>
        </header>
        <main>
            <section className="flex flex-col items-center mb-32">
                <LinkItem img={headphones} h2="HEADPHONES" />
                <LinkItem img={speaker} h2="SPEAKERS" />
                <LinkItem img={earphones} h2="EARPHONES" />
            </section>
        </main>
        </>
    )
}

export default HomePage