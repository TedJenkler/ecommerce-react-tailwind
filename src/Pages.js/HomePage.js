import Nav from "../Components.js/Nav"

const HomePage = () => {
    return (
        <>
        <header className="bg-black1 hero">
            <Nav />
            <div className="text-white text-center py-28">
                <h2 className="mb-4 text-bordergrey text-sm tracking-[10px]">NEW PRODUCT</h2>
                <h1 className="mb-6 text-4xl tracking-widest">XX99 Mark II HEADPHONES</h1>
                <p className="mb-7 text-base">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="text-sm py-3 px-8 bg-darkorange">See Product</button>
            </div>
        </header>
        </>
    )
}

export default HomePage