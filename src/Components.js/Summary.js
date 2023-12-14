import { Context } from "../App";
import { useContext} from "react";

const Summary = () => {

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
                <p className="">x{items.amount}</p>
                </div>
                </div>)
        }))
    }
    return (
    <div className="flex justify-center">
        <section className="w-11/12 bg-white p-6 rounded-lg mb-24">
            <h1 className="font-bold mb-8">SUMMARY</h1>
            {render()}
        </section>
    </div>
    )
}

export default Summary