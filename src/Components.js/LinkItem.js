import orangearrow from "../Img/orangearrow.svg"
import { Link } from "react-router-dom"

const LinkItem = ( {img, h2, link} ) => {
    return (
        <>
        <div className="relative w-11/12 pt-12 mb-4">
            <img className="absolute top-0 left-1/2 -translate-x-1/2" src={img} alt={h2} />
            <div className="bg-greywhite pt-20 pb-5 text-center rounded-lg">
                <h2 className="mb-4">{h2}</h2>
                <Link to={link}><p className="text-bordergrey tracking-wide flex justify-center items-center gap-1 hover:text-darkorange">SHOP<img src={orangearrow} alt="orange arrow" /></p></Link>
            </div>
        </div>
        </>
    )
}

export default LinkItem