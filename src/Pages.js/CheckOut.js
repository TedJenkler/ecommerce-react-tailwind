import BackBtn from "../Components.js/BackBtn"
import Conformation from "../Components.js/Conformation"
import Summary from "../Components.js/Summary"
import { useState } from "react"
import { Context } from "../App";
import { useContext} from "react";

const CheckOut = () => {
    const [toggle, setToggle] = useState(true)
    const [state, dispatch] = useContext(Context)
    const handlecash = (e) => {
        dispatch({type: 'radio', payload: e.target.value})
        dispatch({type: 'changeenumber', payload: ""})
        dispatch({type: 'changepin', payload: ""})
    }
    return (<section className="bg-greywhite">
    <BackBtn />
    <Conformation toggle={toggle} />
    <div className={toggle === false ? "blur-sm bg-bordergrey flex items-center justify-center" : "flex items-center justify-center"}>
        <form className="flex flex-col w-11/12 p-6 bg-white rounded-lg mb-8">
            <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
            <p className="text-darkorange text-sm mb-4">Billing details</p>
            <div className="flex justify-between">
            <label className={state.validation.name === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="name">Name</label>
            <span className={state.validation.name === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changename', payload: e.target.value})}} value={state.form.name} className={state.validation.name === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg" } name="name" placeholder="Alexei Ward"></input>
            <div className="flex justify-between">
                <label className={state.validation.email === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="email">Email Address</label>
                <span className={state.validation.email === false ? "error text-xs" : "hidden"}>Wrong format</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changeemail', payload: e.target.value})}} value={state.form.email} className={state.validation.email === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="email" placeholder="alexei@mail.com"></input>
            <div className="flex justify-between">
                <label className={state.validation.phone === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="phone">Phone Number</label>
                <span className={state.validation.phone === false ? "error text-xs" : "hidden"}>Wrong format</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changephone', payload: e.target.value})}} value={state.form.phone} className={state.validation.phone === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="phone" placeholder="+1 202-555-0136"></input>
            <p className="text-darkorange text-sm mb-4">SHIPPING INFO</p>
            <div className="flex justify-between">
                <label className={state.validation.address === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="adress" >Your Address</label>
                <span className={state.validation.address === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changeadress', payload: e.target.value})}} value={state.form.address} className={state.validation.address === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="adress" placeholder="1137 Williams Avenue"></input>
            <div className="flex justify-between">
                <label className={state.validation.postal === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="postal">ZIP Code</label>
                <span className={state.validation.postal === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changepostal', payload: e.target.value})}} value={state.form.postal} className={state.validation.postal === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="postal" placeholder="10001"></input>
            <div className="flex justify-between">
                <label className={state.validation.city === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="city">City</label>
                <span className={state.validation.city === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changecity', payload: e.target.value})}} value={state.form.city} className={state.validation.city === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="city" placeholder="New York"></input>
            <div className="flex justify-between">
                <label className={state.validation.country === false ? "mb-2 text-xs error" : "mb-2 text-xs"} htmlFor="country">Country</label>
                <span className={state.validation.country === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changecountry', payload: e.target.value})}} value={state.form.country} className={state.validation.country === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} name="country" placeholder="United States"></input>
            <p className="text-darkorange text-sm mb-4">PAYMENT DETAILS</p>
            <p>Payment Method</p>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-4">
                <input className="mx-5 h-4 w-4" name="payment" type="radio" value="e-money" onClick={(e) => {dispatch({type: 'radio', payload: e.target.value})}}></input>
                e-Money
            </label>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-8">
                <input className="mx-5 h-4 w-4" name="payment" type="radio" value="cash" onClick={handlecash}></input>
                Cash On Delivery
            </label>
            <div className={state.form.radio.match("e-money") ? "flex flex-col" : "hidden"}>
            <div className="flex justify-between">
                <label className={state.validation.enumber === false ? "mb-2 text-xs error" : "mb-2 text-xs"}>e-Money Number</label>
                <span className={state.validation.enumber === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
                <input onChange={(e) => {dispatch({type: 'changeenumber', payload: e.target.value})}} value={state.form.enumber} className={state.validation.enumber === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} placeholder="238521993"></input>
            <div className="flex justify-between">
            <label className={state.validation.epin === false ? "mb-2 text-xs error" : "mb-2 text-xs"}>e-Money Pin</label>
                <span className={state.validation.epin === false ? "error text-xs" : "hidden"}>Not Valid</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changepin', payload: e.target.value})}} value={state.form.epin} className={state.validation.enumber === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg"} placeholder="6891"></input>
            </div>
        </form>
    </div>
        <Summary toggle={toggle} setToggle={setToggle} />
        </section>)
}

export default CheckOut