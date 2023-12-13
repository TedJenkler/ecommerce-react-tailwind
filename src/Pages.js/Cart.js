import { Context } from "../App";
import { useContext, useState } from "react";

const Cart = () => {
    const [state, dispatch] = useContext(Context)

   const emptyCart = () => {
        dispatch({type: 'clear_cart'})
    }

    console.log(state.cart)

    const render = () => {
        return(
        Object.values(state.cart).map((items) => {
            console.log(items)
            return (<>
                <img src={items.img} alt={items.product} />
                <h1>{items.product}</h1>
                <p>{items.cost}</p>
                </>)
        }))
    }
    return (
        <section className="bg-greywhite py-8 px-7 w-11/12">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h1>CART</h1><h1>({state.cart.amount > 0 ? state.cart.amount : 0})</h1>
                </div>
                    <button onClick={emptyCart}>Remove all</button>
            </div>
            <div>
                {render()}
            </div>
        </section>
    )
}

export default Cart