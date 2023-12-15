import BackBtn from "../Components.js/BackBtn"
import Conformation from "../Components.js/Conformation"
import Summary from "../Components.js/Summary"
import { useState } from "react"
import { Context } from "../App";
import { useContext} from "react";

const CheckOut = () => {
    const [toggle, setToggle] = useState(true)
    const [state, dispatch] = useContext(Context)
    return (<section className="bg-greywhite">
    <BackBtn />
    <Conformation toggle={toggle} />
    <div className={toggle === false ? "blur-sm bg-bordergrey flex items-center justify-center" : "flex items-center justify-center"}>
        <form className="flex flex-col w-11/12 p-6 bg-white rounded-lg mb-8">
            <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
            <p className="text-darkorange text-sm mb-4">Billing details</p>
            <label className="mb-2 text-xs font-bold" htmlFor="name">Name</label>
            <input onChange={(e) => {dispatch({type: 'changename', payload: e.target.value})}} value={state.form.name} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="name" placeholder="Alexei Ward"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="email">Email Address</label>
            <input onChange={(e) => {dispatch({type: 'changeemail', payload: e.target.value})}} value={state.form.email} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="email" placeholder="alexei@mail.com"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="phone">Phone Number</label>
            <input onChange={(e) => {dispatch({type: 'changephone', payload: e.target.value})}} value={state.form.phone} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="phone" placeholder="+1 202-555-0136"></input>
            <p className="text-darkorange text-sm mb-4">SHIPPING INFO</p>
            <label className="mb-2 text-xs font-bold" htmlFor="adress" >Your Address</label>
            <input onChange={(e) => {dispatch({type: 'changeadress', payload: e.target.value})}} value={state.form.address} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="adress" placeholder="1137 Williams Avenue"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="postal">ZIP Code</label>
            <input onChange={(e) => {dispatch({type: 'changepostal', payload: e.target.value})}} value={state.form.postal} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="postal" placeholder="10001"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="city">City</label>
            <input onChange={(e) => {dispatch({type: 'changecity', payload: e.target.value})}} value={state.form.city} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="city" placeholder="New York"></input>
            <label className="mb-2 text-x font-bold" htmlFor="country">Country</label>
            <input onChange={(e) => {dispatch({type: 'changecountry', payload: e.target.value})}} value={state.form.country} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="country" placeholder="United States"></input>
            <p className="text-darkorange text-sm mb-4">PAYMENT DETAILS</p>
            <p>Payment Method</p>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-4">
                <input className="mx-5 h-4 w-4" name="payment" type="radio" value="e-money" onClick={(e) => {dispatch({type: 'radio', payload: e.target.value})}}></input>
                e-Money
            </label>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-8">
                <input className="mx-5 h-4 w-4" name="payment" type="radio" value="cash" onClick={(e) => {dispatch({type: 'radio', payload: e.target.value})}}></input>
                Cash On Delivery
            </label>
            <div className={state.form.radio.match("e-money") ? "flex flex-col" : "hidden"}>
            <label className="mb-2 text-xs font-bold">e-Money Number</label>
            <input onChange={(e) => {dispatch({type: 'changeenumber', payload: e.target.value})}} value={state.form.enumber} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" placeholder="238521993"></input>
            <label className="mb-2 text-xs font-bold">e-Money PIN</label>
            <input onChange={(e) => {dispatch({type: 'changepin', payload: e.target.value})}} value={state.form.epin} className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" placeholder="6891"></input>
            </div>
        </form>
    </div>
        <Summary toggle={toggle} setToggle={setToggle} />
        </section>)
}

export default CheckOut