import { Context } from "../App";
import { useContext, useState } from "react";

const Cart = () => {
    const [state, dispatch] = useContext(Context)

   const emptyCart = () => {
        dispatch({type: 'clear_cart'})
    }


    const render = () => {
        return(
        Object.values(state.cart).map((items) => {
            return (<div className="flex mb-6 gap-4">
                <img className="h-16 w-16 rounded-lg" src={items.img} alt={items.product} />
                <div className="flex flex-col justify-around">
                    <h1 className="text-base font-bold">{items.product}</h1>
                    <p className="text-bordergrey text-sm">{items.cost}</p>
                </div>
                </div>)
        }))
    }
    let count = 0

    Object.entries(state.cart).forEach(([key, value]) => {
        let test = value
        let it = Object.values(test)
        let number = it[3]
        count += number
      });

    return (
        <section className="bg-white py-8 px-7 w-11/12">
            <div className="flex justify-between mb-8">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">CART</h1><h1 className="text-lg font-bold">({count})</h1>
                </div>
                    <button className="underline text-bordergrey" onClick={emptyCart}>Remove all</button>
            </div>
            <div>
                {render()}
            </div>
        </section>
    )
}

export default Cart