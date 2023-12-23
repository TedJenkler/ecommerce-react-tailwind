import { Context } from "../App";
import { useContext} from "react";
import { Link} from "react-router-dom";

const Cart = () => {
    const [state, dispatch] = useContext(Context)

   const emptyCart = () => {
        dispatch({type: 'clear_cart'})
    }
    const render = () => {
        return(
        Object.values(state.cart).map((items) => {
            if(items.amount > 0){
            return (<div key={items.product} className="flex mb-6 gap-4 relative">
                <img className="h-16 w-16 rounded-lg" src={items.img} alt={items.product} />
                <div className="flex flex-col justify-around">
                    <h1 className="text-base font-bold">{items.product}</h1>
                    <p className="text-bordergrey text-sm">$ {items.cost}</p>
                </div>
                <div className="flex items-center absolute right-0 top-1/2 bottom-1/2">
                    <button onClick={(e) => {dispatch({type: 'removefromcart', payload: items.product})}} className="h-6 w-6 bg-greywhite flex items-center justify-center hover:text-darkorange">-</button>
                    <p className="h-6 w-6 bg-greywhite flex items-center justify-center">{items.amount}</p>
                    <button onClick={(e) => {dispatch({type: 'addmorecart', payload: items.product})}} className="h-6 w-6 bg-greywhite flex items-center justify-center hover:text-darkorange">+</button>
                </div>
                </div>)}
        }))
    }

    return (
        <section className={state.togglecart === true ? "hidden bg-white py-8 px-7 w-11/12 rounded-lg absolute" : "bg-white py-8 px-7 w-11/12 rounded-lg absolute mx-auto left-0 right-0 top-28 z-50 md:w-96 md:right-3 md:left-auto md:mx-0 md:mr-3 md:top-28 lg:top-36 lg:right-40"}>
            <div className="flex justify-between mb-8">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">CART</h1><h1 className="text-lg font-bold">({state.amount})</h1>
                </div>
                    <button className="underline text-bordergrey hover:text-lightorange" onClick={emptyCart}>Remove all</button>
            </div>
            <div>
                {render()}
            </div>
            <div className="flex justify-between mb-6">
                <p className="text-base text-bordergrey">TOTAL</p>
                <p className="text-lg font-bold">$ {state.total}</p>
            </div>
            <div className="flex justify-center items-center">
            <Link onClick={(e) => {dispatch({type: 'togglecart', payload: true})}} to={state.total > 0 ? "/checkout" : ""} className="bg-darkorange text-white py-4 w-full text-xs flex items-center justify-center hover:bg-lightorange">CHECKOUT</Link>
            </div>
        </section>
    )
}

export default Cart