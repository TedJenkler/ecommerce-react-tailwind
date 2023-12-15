import { Context } from "../App";
import { useContext} from "react";

const Summary = ( {toggle, setToggle} ) => {

    const [state, dispatch] = useContext(Context)
    const render = () => {

        return(
        Object.values(state.cart).map((items) => {
            return (<div className="flex mb-6 gap-4">
                <img className="h-16 w-16 rounded-lg" src={items.img} alt={items.product} />
                <div className="flex flex-col justify-around">
                    <h1 className="text-base font-bold">{items.product}</h1>
                    <p className="text-bordergrey text-sm">$ {items.cost}</p>
                </div>
                <div className="flex items-center justify-end w-full">
                <p className="text-bordergrey">x{items.amount}</p>
                </div>
                </div>)
        }))
    }
    return (
    <div className={toggle === false ? "blur-sm bg-bordergrey flex justify-center" : "flex justify-center"}>
        <section className="w-11/12 bg-white p-6 rounded-lg mb-24">
            <h1 className="font-bold mb-8">SUMMARY</h1>
            {render()}
            <div className="flex mb-2 justify-between">
                <p className="text-base text-bordergrey">TOTAL</p>
                <p className="text-lg font-bold">$ {state.total}</p>
            </div>
            <div className="flex mb-2 justify-between">
                <p className="text-base text-bordergrey">SHIPPING</p>
                <p className="text-lg font-bold">$ 50</p>
            </div>
            <div className="flex mb-6 justify-between">
                <p className="text-base text-bordergrey">VAT (INCLUDED)</p>
                <p className="text-lg font-bold">$ {Math.round(state.total * 0.2)}</p>
            </div>
            <div className="flex mb-8 justify-between">
                <p className="text-base text-bordergrey">GRAND TOTAL</p>
                <p className="text-lg font-bold text-darkorange">$ {state.total + 50}</p>
            </div>
            <div>
                <button onClick={(e) => {setToggle(!toggle)}} className="w-full bg-darkorange text-white py-3 text-sm">Continue & Pay</button>
            </div>
        </section>
    </div>
    )
}

export default Summary