import { useState } from "react"

const AddToCart = () => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="flex gap-4 mb-20 ml-6">
            <div className="bg-greywhite flex items-center justify-center">
            <button onClick={cartCount > 0 ? (e) => {setCartCount(cartCount - 1)} : null} className="w-12 h-12">-</button>
            <input onChange={(e) => {setCartCount(e.target.value)}} className="bg-greywhite w-5 h-5 flex items-center justify-center" value={cartCount}></input>
            <button onClick={(e) => {setCartCount(cartCount + 1)}} className="w-12 h-12">+</button>
            </div>
            <button className="bg-darkorange text-xs px-8 h-12 text-white">ADD TO CART</button>
        </div>
    )
}

export default AddToCart