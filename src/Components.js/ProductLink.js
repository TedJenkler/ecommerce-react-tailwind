import { Link } from "react-router-dom"

const ProductLink = ( {img, h11, h12, p, path, isNew} ) => {
    return (
        <section className="flex flex-col w-11/12 text-center items-center mb-32">
            <div className="md:bg-greywhite md:w-full md:flex md:justify-center mb-8 rounded-lg">
            <img className="" src={img} alt={h11} />
            </div>
            <h2 className="text-darkorange tracking-[10px] mb-6 md:mb-4">{isNew === true ? "NEW PRODUCT" : "" }</h2>
            <h1 className="m-0 text-3xl">{h11}</h1>
            <h1 className="mb-6 text-3xl">{h12}</h1>
            <p className="text-base mb-6 text-bordergrey">{p}</p>
            <Link to={path} className="text-sm text-white py-3 px-8 bg-darkorange hover:bg-lightorange">SEE PRODUCT</Link>
        </section>
    )
}

export default ProductLink