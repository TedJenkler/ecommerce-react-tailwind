import { Link } from "react-router-dom"

const ProductLink = ( {img, h11, h12, p, path, isNew, way, mway} ) => {
    return (
        <section className={`flex flex-col w-11/12 text-center items-center mb-32 ${way} lg:w-3/4`}>
            <div className="md:bg-greywhite md:w-full md:flex md:justify-center mb-8 rounded-lg lg:w-1/2">
                <img className="" src={img} alt={h11} />
            </div>
            <div className={`lg:w-1/2 lg:text-start lg:mb-10 ${mway}`}>
            <h2 className="text-darkorange tracking-[10px] mb-6 md:mb-4">{isNew === true ? "NEW PRODUCT" : "" }</h2>
            <h1 className="m-0 text-3xl font-bold">{h11}</h1>
            <h1 className="mb-6 text-3xl font-bold">{h12}</h1>
            <p className="text-base mb-6 text-bordergrey md:px-10 lg:px-0">{p}</p>
            <Link to={path} className="text-sm text-white py-3 px-8 bg-darkorange hover:bg-lightorange">SEE PRODUCT</Link>
            </div>
        </section>
    )
}

export default ProductLink