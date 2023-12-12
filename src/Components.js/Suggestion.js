import { Link } from "react-router-dom"

const Suggestion = ( {img1, alt1, h21, img2, alt2, h22, img3, alt3, h23, link1, link2, link3} ) => {
    return(
        <section className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-10">YOU MAY ALSO LIKE</h2>
            <div className="w-full bg-greywhite flex justify-center mb-8 items-center rounded-lg"><img className="h-32 mb-8" src={img1} alt={alt1} /></div>
            <h2 className="text-2xl font-bold mb-8">{h21}</h2>
            <Link to={link1} className="bg-darkorange text-white py-3 px-8 mb-14">SEE PRODUCT</Link>
            <img className="h-32 w-full mb-8" src={img2} alt={alt2} />
            <h2 className="text-2xl font-bold mb-8">{h22}</h2>
            <Link to={link2} className="bg-darkorange text-white py-3 px-8 mb-14">SEE PRODUCT</Link>
            <div className="w-full bg-greywhite flex justify-center mb-8 rounded-lg"><img className="h-32" src={img3} alt={alt3} /></div>
            <h2 className="text-2xl font-bold mb-8">{h23}</h2>
            <Link to={link3} className="bg-darkorange text-white py-3 px-8 mb-14">SEE PRODUCT</Link>
        </section>
    )
}

export default Suggestion