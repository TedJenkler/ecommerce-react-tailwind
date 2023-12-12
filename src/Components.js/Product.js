import AddToCart from "./AddToCart"
import BackBtn from "./BackBtn"

const Product = ( {img, h11, h12, p, price, p2, p3, b1, b2, b3, b4, b5, newp} ) => {
    return (<>
        <BackBtn />
        <section className="flex flex-col items-start text-start">
            <div className="flex flex-col items-center w-full">
                <img className="mb-8" src={img} alt={h11} />
            </div>
            {newp === true ? <h2 className="tracking-[10px] text-darkorange mb-6 text-sm ml-6">NEW PRODUCT</h2> : null}
            <h1 className="text-3xl mx-6 font-bold">{h11}</h1>
            <h1 className="text-3xl mb-6 mx-6 font-bold">{h12}</h1>
            <p className="text-base mb-6 mx-6 text-bordergrey">{p}</p>
            <p className="text-lg mb-8 mx-6 font-bold">{price}</p>
            <AddToCart />
            <h2 className="text-2xl mx-6 mb-6 font-bold">FEATURES</h2>
            <p className="mb-6 mx-6 text-bordergrey">{p2}</p>
            <p className="mb-20 mx-6 text-bordergrey">{p3}</p>
            <h2 className="mb-6 mx-6 text-2xl font-bold">IN THE BOX</h2>
            <ul className="flex flex-col gap-2 mx-6 mb-20 text-bordergrey">
                <li>{b1}</li>
                <li>{b2}</li>
                <li>{b3}</li>
                <li>{b4}</li>
                <li>{b5}</li>
            </ul>
        </section>
        </>)
}

export default Product