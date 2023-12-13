import { CartContext } from "../App";
import { useContext } from "react";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)

    const emptyCart = () => {
        if(cart.length > 0){
            setCart(cart.length = 0)
            setCart([])
        }
    }
    return (
        <section className="bg-greywhite py-8 px-7 w-11/12">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h1>CART</h1><h1>({cart.length})</h1>
                </div>
                    <button onClick={emptyCart}>Remove all</button>
            </div>
        </section>
    )
}

export default Cart