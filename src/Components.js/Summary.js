import { Context } from "../App";
import { useContext} from "react";

const Summary = ( {toggle, setToggle} ) => {

    const [state, dispatch] = useContext(Context)
    const handlesubmit = () => {
        let validate = 0
        if (state.form.name.length > 2){
            validate = validate + 1
        }else {
            alert("name is to short")
        }
        if (state.form.email.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm)){
            validate = validate + 1
        }
        else {
            alert("not guilty email")
        }
        if (state.form.phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
            validate = validate + 1
        }
        else {
            alert("not guilty phone")
        }
        if(state.form.address.length > 3){
            validate = validate + 1
        }
        else {
            alert("address is to short")
        }
        if(state.form.postal.length > 0){
            validate = validate + 1
        }
        else {
            alert("postal is to short")
        }
        if(state.form.city.length > 0){
            validate = validate + 1
        }
        else {
            alert("city is to short")
        }
        if(state.form.country.length > 3){
            validate = validate + 1
        }
        else {
            alert("country is to short")
        }
        if(state.form.enumber.length > 5){
            validate = validate + 1
        }
        else {
            alert("wrong enumber")
        }
        if(state.form.epin.length === 4){
            validate = validate + 1
        }
        else {
            alert("Epin is not the right length")
        }
        if((state.form.radio === "cash" && validate === 7) || (state.form.radio !== "cash" && validate === 9)){
            setToggle(!toggle)
        }
    }
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
                <button onClick={handlesubmit} className="w-full bg-darkorange text-white py-3 text-sm">Continue & Pay</button>
            </div>
        </section>
    </div>
    )
}

export default Summary