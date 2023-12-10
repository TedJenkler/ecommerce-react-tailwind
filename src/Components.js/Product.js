const Product = ( {img, h11, h12, p} ) => {
    return (
        <section className="flex flex-col w-11/12 text-center items-center mb-32">
            <img className="rounded-lg mb-8" src={img} alt={h11} />
            <h2 className="text-darkorange tracking-[10px] mb-6">NEW PRODUCT</h2>
            <h1 className="m-0 text-3xl">{h11}</h1>
            <h1 className="mb-6 text-3xl">{h12}</h1>
            <p className="text-base mb-6 text-bordergrey">{p}</p>
            <button className="text-sm text-white py-3 px-8 bg-darkorange">SEE PRODUCT</button>
        </section>
    )
}

export default Product