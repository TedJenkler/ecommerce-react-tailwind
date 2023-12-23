import { Link } from "react-router-dom"

const Suggestion = ( {img1, alt1, h21, img2, alt2, h22, img3, alt3, h23, link1, link2, link3} ) => {
    return(
        <section className="flex flex-col items-center md:w-11/12">
            <h2 className="text-2xl font-bold mb-10">YOU MAY ALSO LIKE</h2>
            <div className="flex flex-col items-center md:flex-row md:gap-3">
                <div className="flex flex-col items-center md:w-56">
                    <div className="w-full bg-greywhite flex justify-center mb-8 items-center rounded-lg md:h-56"><img className="h-32 mb-8 md:h-56 md:w-56 md:mb-0 object-cover" src={img1} alt={alt1} /></div>
                    <h2 className="text-2xl font-bold mb-8">{h21}</h2>
                    <Link to={link1} className="bg-darkorange text-white py-3 px-8 mb-14 hover:bg-lightorange">SEE PRODUCT</Link>
                </div>
                <div className="flex flex-col items-center md:w-56">
                    <img className="h-32 w-full mb-8 md:h-56 md:w-56 object-cover" src={img2} alt={alt2} />
                    <h2 className="text-2xl font-bold mb-8">{h22}</h2>
                    <Link to={link2} className="bg-darkorange text-white py-3 px-8 mb-14 hover:bg-lightorange">SEE PRODUCT</Link>
                </div>
                <div className="flex flex-col items-center w-full md:w-56">
                    <div className="w-full bg-greywhite flex justify-center mb-8 rounded-lg"><img className="h-32 md:h-56 md:w-56 object-cover" src={img3} alt={alt3} /></div>
                    <h2 className="text-2xl font-bold mb-8">{h23}</h2>
                    <Link to={link3} className="bg-darkorange text-white py-3 px-8 mb-14 hover:bg-lightorange">SEE PRODUCT</Link>
                </div>
            </div>
        </section>
    )
}

export default Suggestion