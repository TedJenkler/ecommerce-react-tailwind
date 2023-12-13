import { useContext, useState } from "react"
import { Context } from "../App"
import { CartContext } from "../App";

const AddToCart = () => {
    const [cartCount, setCartCount] = useState(0);
    const [state, dispatch] = useContext(Context)
    const [cart, setCart] = useContext(CartContext)

    const noless0 = () => {
        if(state.cartcount > 0){
            dispatch({ type: 'decrement' })
        }
    }

    const add = () => {
        dispatch({ type: 'add_cart',
        payload: {img: state.img, product: state.product, cost:state.cost, amount: state.cartcount}
    })
    }


    return (
        <div className="flex gap-4 mb-20 ml-6">
            <div className="bg-greywhite flex items-center justify-center">
            <button onClick={noless0} className="w-12 h-12">-</button>
            <input className="bg-greywhite w-5 h-5 flex items-center justify-center" value={state.cartcount}></input>
            <button onClick={(e) => {dispatch({ type: 'increment' })}} className="w-12 h-12">+</button>
            </div>
            <button onClick={add} className="bg-darkorange text-xs px-8 h-12 text-white">ADD TO CART</button>
        </div>
    )
}

export default AddToCart