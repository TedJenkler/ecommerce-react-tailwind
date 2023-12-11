import ImgGroup from "../Components.js/ImgGroup"
import Product from "../Components.js/Product"
import XX99MARK2 from "../Img/xx99_mark_2_product.png"
import { useState } from "react"
import man from "../Img/guywithheadphones.png"
import itemstable from "../Img/thingsontable.png"
import headphoneclose from "../Img/close picture of headphones.png"

const XX99_MARK_ll = ( {} ) => {
    const [newP, setNewP] = useState(true)
    return (
        <main>
            <Product img={XX99MARK2} h11="XX99 Mark II" h12="Headphones"
            p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound." 
            price="$ 2,999"
            p2="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."           p3="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic." 
            b1="Headphone Unit" b2="Replacement Earcups" b3="User Manual" b4="3.5mm 5m Audio Cable" b5="Travel Bag" newp={newP} />
            <div className="flex flex-col items-center">
                <ImgGroup img1={man} img2={itemstable} img3={headphoneclose} alt1="manwithheadphones" alt2="thingsontable" alt3="headphones close" />
            </div>
            <div className="flex flex-col items-center">
                
            </div>
        </main>
    )
}

export default XX99_MARK_ll