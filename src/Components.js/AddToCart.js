import { useContext, useEffect, useState } from "react"
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
        dispatch({ type: 'add_cart'})
    }

    useEffect(() => {
        dispatch({type: 'totalbeforetax',
        payload: total
    })
    },[state.cart])

    const calctotal = () => {
        let total = 0
        Object.entries(state.cart).forEach(([key, value]) => {
            let test = value
            let it = Object.values(test)
            let number = it[2]
            let amount = it[3]
            total += number * amount
          });
          return total
    }

    let total = calctotal()


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