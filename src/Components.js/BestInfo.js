import img from "../Img/guywithheadphones.png"

const BestInfo = () => {
    return (
        <>
            <section className="w-11/12 mb-32 lg:w-3/4 lg:flex lg:flex-row-reverse">
                <img className="w-full mb-10 md:h-72 lg-w-1/2" src={img} alt="guy with headphones" />
                <div className="lg:w-full">
                    <h1 className="mb-8 font-bold text-3xl text-center md:px-32 lg:px-8 lg:text-start">BRINGING YOU THE <p className="font-bold text-darkorange inline-block">BEST</p> AUDIO GEAR</h1>
                    <p className="text-center text-base text-bordergrey md:px-32 lg:px-8 lg:text-start">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </section>
        </>
    )
}

export default BestInfo