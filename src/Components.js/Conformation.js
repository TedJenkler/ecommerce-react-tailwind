import { Link } from "react-router-dom"
import check from "../Img/check.png"
import { Context } from "../App"
import { useContext } from "react"

const Conformation = () => {
    const [state, dispatch] = useContext(Context)
    return (
        <section className="hidden bg-white rounded-lg w-11/12 p-8 pb-16 absolute left-0 right-0 mx-auto top-56">
            <div className="bg-darkorange h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <img className="h-5 w-5" src={check} alt="oval"></img>
            </div>
            <h1 className="text-2xl font-bold">THANK YOU</h1>
            <h1 className="text-2xl font-bold mb-4">FOR YOUR ORDER</h1>
            <p className="text-base text-bordergrey mb-6">You will receive an email confirmation shortly.</p>
            <div className="border-b border-bordergrey bg-greywhite rounded-t-lg p-6">
                <div className="flex mb-6 gap-4">
                {state.cart[0].img !== undefined ? <img className="h-16 w-16 rounded-lg" src={state.cart[0].img} alt={state.cart[0].product} /> : null}
                <div className="flex flex-col justify-around">
                    <h1 className="text-base font-bold">{state.cart[0].product}</h1>
                    <p className="text-bordergrey text-sm">$ {state.cart[0].cost}</p>
                </div>
                <div className="flex items-center justify-end w-full">
                <p className="text-bordergrey">x{state.cart[0].amount}</p>
                </div>
                </div>
            </div>
            {state.amount > 1 ? <div className="flex text-center bg-greywhite pb-6 pt-3"><p className="w-full text-bordergrey">and {state.amount - 1} other item{state.amount > 2 ? "(s)" : null}</p></div> : null}
            <div className="bg-black2 pt-4 px-6 pb-5 mb-6 rounded-b-lg">
                <h1 className="text-bordergrey text-base mb-2">GRAND TOTAL</h1>
                <p className="text-white font-bold text-lg">$ {state.total + 50}</p>
            </div>
            <div className="relative">
            <Link to="/" className="flex items-center justify-center absolute left-0 right-0 bg-darkorange py-3 w-full text-xs text-white">BACK TO HOME</Link>
            </div>
        </section>
    )
}

export default Conformation