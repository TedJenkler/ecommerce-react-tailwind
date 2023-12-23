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
    return (<section className="bg-greywhite lg:flex lg:justify-center lg:items-start lg:gap-8">
    <Conformation toggle={toggle} />
    <div className={toggle === false ? "blur-sm brightness-50 bg-bordergrey" : null}>
    <BackBtn />
    <div className={toggle === false ? "blur-sm brightness-50  bg-bordergrey flex items-center justify-center" : "flex items-center justify-center"}>
        <form className="flex flex-col w-11/12 p-6 bg-white rounded-lg mb-8 lg:w-full">
            <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
            {/* Personal Info Part*/}
            <p className="text-darkorange text-sm mb-4">Billing details</p>
            <div className="md:flex md:gap-4">
                <div className="md:w-1/2">
                    <div className="flex justify-between">
                        <label className={state.validation.name === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="name">Name</label>
                        <span className={state.validation.name === false ? "error text-xs" : "hidden"}>Too Short</span>
                    </div>
                    <input onChange={(e) => {dispatch({type: 'changename', payload: e.target.value})}} value={state.form.name} className={state.validation.name === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" } name="name" placeholder="Alexei Ward"></input>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-between">
                        <label className={state.validation.email === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="email">Email Address</label>
                        <span className={state.validation.email === false ? "error text-xs" : "hidden"}>Wrong format</span>
                    </div>
                    <input onChange={(e) => {dispatch({type: 'changeemail', payload: e.target.value})}} value={state.form.email} className={state.validation.email === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg w-full focus:outline-darkorange focus:caret-darkorange"} name="email" placeholder="alexei@mail.com"></input>
                </div>
            </div>
            <div className="flex justify-between md:w-1/2">
                <label className={state.validation.phone === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="phone">Phone Number</label>
                <span className={state.validation.phone === false ? "error text-xs" : "hidden"}>Wrong format</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changephone', payload: e.target.value})}} value={state.form.phone} className={state.validation.phone === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg md:w-1/2 md:mb-12 focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg md:w-1/2 md:mb-12 focus:outline-darkorange focus:caret-darkorange"} name="phone" placeholder="+1 202-555-0136"></input>
            {/* Shipping Info Part*/}
            <p className="text-darkorange text-sm mb-4">SHIPPING INFO</p>
            <div className="flex justify-between">
                <label className={state.validation.address === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="adress" >Your Address</label>
                <span className={state.validation.address === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changeadress', payload: e.target.value})}} value={state.form.address} className={state.validation.address === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg focus:outline-darkorange focus:caret-darkorange"} name="adress" placeholder="1137 Williams Avenue"></input>
            <div className="md:flex md:gap-4">
                <div className="md:w-1/2">
                    <div className="flex justify-between w-full">
                        <label className={state.validation.postal === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="postal">ZIP Code</label>
                        <span className={state.validation.postal === false ? "error text-xs" : "hidden"}>Too Short</span>
                    </div>
                    <input onChange={(e) => {dispatch({type: 'changepostal', payload: e.target.value})}} value={state.form.postal} className={state.validation.postal === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg w-full focus:outline-darkorange focus:caret-darkorange"} name="postal" placeholder="10001"></input>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-between">
                        <label className={state.validation.city === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="city">City</label>
                        <span className={state.validation.city === false ? "error text-xs" : "hidden"}>Too Short</span>
                    </div>
                    <input onChange={(e) => {dispatch({type: 'changecity', payload: e.target.value})}} value={state.form.city} className={state.validation.city === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg w-full focus:outline-darkorange focus:caret-darkorange"} name="city" placeholder="New York"></input>
                </div>
            </div>
            <div className="flex justify-between md:w-1/2">
                <label className={state.validation.country === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"} htmlFor="country">Country</label>
                <span className={state.validation.country === false ? "error text-xs" : "hidden"}>Too Short</span>
            </div>
            <input onChange={(e) => {dispatch({type: 'changecountry', payload: e.target.value})}} value={state.form.country} className={state.validation.country === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg md:w-1/2 md:mb-12 focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg md:w-1/2 md:mb-12 focus:outline-darkorange focus:caret-darkorange"} name="country" placeholder="United States"></input>
            {/* Payment Part*/}
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <p className="text-darkorange text-sm mb-4">PAYMENT DETAILS</p>
                    <p>Payment Method</p>
                </div>
                <div className="flex flex-col md:w-1/2 md:mt-8">
                    <label className="py-4 w-full border border-bordergrey rounded-lg mb-4">
                        <input className="mx-5 h-4 w-4 focus:outline-darkorange" name="payment" type="radio" value="e-money" onClick={(e) => {dispatch({type: 'radio', payload: e.target.value})}}></input>
                        e-Money
                    </label>
                    <label className="py-4 w-full border border-bordergrey rounded-lg mb-8 peer-checked:border-darkorange">
                        <input className="mx-5 h-4 w-4 peer" name="payment" type="radio" value="cash" onClick={handlecash}></input>
                        Cash On Delivery
                    </label>
                </div>
            </div>
            {/* Special Payment Part*/}
            <div className="md:flex">
                <div className={state.form.radio.match("e-money") ? "w-full md:flex md:gap-4" : "hidden"}>
                    <div className={state.form.radio.match("e-money") ? "flex flex-col md:w-1/2" : "hidden"}>
                    <div className="flex justify-between">
                        <label className={state.validation.enumber === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"}>e-Money Number</label>
                        <span className={state.validation.enumber === false ? "error text-xs" : "hidden"}>Too Short</span>
                    </div>
                        <input onChange={(e) => {dispatch({type: 'changeenumber', payload: e.target.value})}} value={state.form.enumber} className={state.validation.enumber === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg focus:outline-darkorange focus:caret-darkorange"} placeholder="238521993"></input>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-between">
                        <label className={state.validation.epin === false ? "mb-2 text-xs error font-bold" : "mb-2 text-xs font-bold"}>e-Money Pin</label>
                            <span className={state.validation.epin === false ? "error text-xs" : "hidden"}>Not Valid</span>
                        </div>
                    <input onChange={(e) => {dispatch({type: 'changepin', payload: e.target.value})}} value={state.form.epin} className={state.validation.enumber === false ? "py-4 pl-6 mb-6 border errorborder rounded-lg w-full focus:outline-darkorange focus:caret-darkorange" : "py-4 pl-6 mb-6 border border-bordergrey rounded-lg w-full focus:outline-darkorange focus:caret-darkorange"} placeholder="6891"></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
        <Summary toggle={toggle} setToggle={setToggle} />
        </section>)
}

export default CheckOut