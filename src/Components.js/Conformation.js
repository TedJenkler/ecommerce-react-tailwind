import { Link } from "react-router-dom"
import check from "../Img/check.png"
import { Context } from "../App"
import { useContext} from "react"

const Conformation = ( {toggle} ) => {
    const [state, dispatch] = useContext(Context)
    const handleclick = () => {
        dispatch({type: 'clear_cart'})
        dispatch({type: 'totalamount', payload: 0})
        dispatch({type: 'totalbeforetax', payload: 0})
    }
    return (
        <section className={toggle === false ? " bg-white rounded-lg w-11/12 p-8 pb-16 absolute left-0 right-0 mx-auto top-56 z-50 md:w-3/4 lg:w-1/2 xl:w-1/3" : "hidden"}>
            <div className="bg-darkorange h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <img className="h-5 w-5" src={check} alt="oval"></img>
            </div>
            <h1 className="text-2xl font-bold">THANK YOU</h1>
            <h1 className="text-2xl font-bold mb-4">FOR YOUR ORDER</h1>
            <p className="text-base text-bordergrey mb-6">You will receive an email confirmation shortly.</p>
            <div className="md:flex md:h-36 md:mb-24 md:w-full">
                <div className="md:flex md:flex-col lg:w-2/3">
                    <div className="border-b border-bordergrey/20 bg-greywhite rounded-t-lg p-6 pb-0 md:rounded-tl-lg md:rounded-tr-none lg:px-4">
                        <div className="flex mb-6 gap-4">
                        <img className="h-16 w-16 rounded-lg" src={Object.values(state.cart)[0].img} alt={Object.values(state.cart)[0].product} />
                        <div className="flex flex-col justify-around min-w-max">
                            <h1 className="text-base font-bold">{Object.values(state.cart)[0].product}</h1>
                            <p className="text-bordergrey text-sm">$ {Object.values(state.cart)[0].cost}</p>
                        </div>
                        <div className="flex items-center justify-end w-full">
                        <p className="text-bordergrey">x{Object.values(state.cart)[0].amount}</p>
                        </div>
                        </div>
                    </div>
                    {state.amount > 1 ? <div className="flex text-center bg-greywhite pb-6 pt-3 md:pb-9 md:rounded-bl-lg md:py-9"><p className="w-full text-bordergrey">and {state.amount - 1} other item{state.amount > 2 ? "(s)" : null}</p></div> : <div className="flex text-center bg-greywhite pb-6 pt-3 md:pb-9 md:rounded-bl-lg md:py-14"><p className="w-full text-bordergrey"></p></div>}
                </div>
                <div className="bg-black2 pt-4 px-6 pb-5 mb-6 rounded-b-lg md:rounded-r-lg md:rounded-l-none md:h-52 md:flex md:flex-col md:justify-center md:w-1/2 lg:w-1/3">
                    <h1 className="text-bordergrey text-base mb-2">GRAND TOTAL</h1>
                    <p className="text-white font-bold text-lg">$ {state.total + 50}</p>
                </div>
            </div>
            <div className="relative">
            <Link onClick={handleclick} to="/" className="flex items-center justify-center absolute left-0 right-0 bg-darkorange py-3 w-full text-xs text-white hover:bg-lightorange">BACK TO HOME</Link>
            </div>
        </section>
    )
}

export default Conformation