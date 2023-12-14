import { Link } from "react-router-dom"
import check from "../Img/check.png"

const Conformation = () => {
    return (
        <section className="bg-white rounded-lg w-11/12 p-8 absolute left-0 right-0 mx-auto top-56">
            <div className="bg-darkorange h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <img className="h-5 w-5" src={check} alt="oval"></img>
            </div>
            <h1 className="text-2xl font-bold">THANK YOU</h1>
            <h1 className="text-2xl font-bold mb-4">FOR YOUR ORDER</h1>
            <p className="text-base text-bordergrey mb-6">You will receive an email confirmation shortly.</p>
            <div></div>
            <div></div>
            <Link to="/" className="bg-darkorange py-3 w-full text-xs text-white">BACK TO HOME</Link>
        </section>
    )
}

export default Conformation