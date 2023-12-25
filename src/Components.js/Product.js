import AddToCart from "./AddToCart"
import BackBtn from "./BackBtn"

const Product = ( {img, h11, h12, p, price, p2, p3, b1, b2, b3, b4, b5, newp, nr1, nr2, nr3, nr4, nr5} ) => {
    return (<>
        <div className="w-full lg:flex lg:flex-col lg:items-start lg:w-3/4">
            <BackBtn />
        </div>
        <section className="flex flex-col items-start text-start lg:w-3/4">
            <div className="md:flex md:flex-row md:mb-32 md:mr-10 lg:mb-40 lg:w-full">
                <div className="flex flex-col items-center w-full md:min-h-full md:bg-greywhite md:justify-center md:ml-10 md:mr-16 rounded-lg lg:w-full lg:mx-0">
                    <img className="mb-8 w-11/12" src={img} alt={h11} />
                </div>
                <div className="md:mt-12 lg:w-full">
                {newp === true ? <h2 className="tracking-[10px] text-darkorange mb-6 text-sm ml-6 font-normal">NEW PRODUCT</h2> : null}
                <h1 className="text-3xl mx-6 font-bold">{h11}</h1>
                <h1 className="text-3xl mb-6 mx-6 font-bold">{h12}</h1>
                <p className="text-base mb-6 mx-6 text-bordergrey">{p}</p>
                <p className="text-lg mb-8 mx-6 font-bold">{price}</p>
                <AddToCart />
                </div>
            </div>
            <div className="md:mx-10 lg:flex lg:mx-0">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl mx-6 mb-6 font-bold">FEATURES</h2>
                    <p className="mb-6 mx-6 text-bordergrey">{p2}</p>
                    <p className="mb-20 mx-6 text-bordergrey">{p3}</p>
                </div>
                <div className="md:flex lg:flex-col lg:w-1/2 lg:items-center">
                    <h2 className="mb-6 mx-6 text-2xl font-bold md:w-1/2">IN THE BOX</h2>
                    <ul className="flex flex-col gap-2 mx-6 mb-20 text-bordergrey text-base md:w-1/2">
                        <li className="flex gap-5"><p className="text-darkorange">{nr1}</p>{b1}</li>
                        <li className="flex gap-5"><p className="text-darkorange">{nr2}</p>{b2}</li>
                        <li className="flex gap-5"><p className="text-darkorange">{nr3}</p>{b3}</li>
                        <li className="flex gap-5"><p className="text-darkorange">{nr4}</p>{b4}</li>
                        <li className="flex gap-5"><p className="text-darkorange">{nr5}</p>{b5}</li>
                    </ul>
                </div>
            </div>
        </section>
        </>)
}

export default Product