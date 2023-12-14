import BackBtn from "../Components.js/BackBtn"

const CheckOut = () => {
    return (<section className="bg-greywhite">
    <BackBtn />
    <div className="flex items-center justify-center">
        <form className="flex flex-col w-11/12 p-6 bg-white rounded-lg">
            <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
            <p className="text-darkorange text-sm mb-4">Billing details</p>
            <label className="mb-2 text-xs font-bold" htmlFor="name">Name</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="name" placeholder="Alexei Ward"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="email">Email Address</label>
            <input  className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="email" placeholder="alexei@mail.com"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="phone">Phone Number</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="phone" placeholder="+1 202-555-0136"></input>
            <p className="text-darkorange text-sm mb-4">SHIPPING INFO</p>
            <label className="mb-2 text-xs font-bold" htmlFor="adress" >Your Address</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="adress" placeholder="1137 Williams Avenue"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="postal">ZIP Code</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="postal" placeholder="10001"></input>
            <label className="mb-2 text-xs font-bold" htmlFor="city">City</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="city" placeholder="New York"></input>
            <label className="mb-2 text-x font-bold" htmlFor="country">Country</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" name="country" placeholder="United States"></input>
            <p className="text-darkorange text-sm mb-4">PAYMENT DETAILS</p>
            <p>Payment Method</p>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-4">
                <input className="mx-5 h-4 w-4" name="payment" type="radio"></input>
                e-Money
            </label>
            <label className="py-4 w-full border border-bordergrey rounded-lg mb-8">
                <input className="mx-5 h-4 w-4" name="payment" type="radio"></input>
                Cash On Delivery
            </label>
            <label className="mb-2 text-xs font-bold">e-Money Number</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" placeholder="238521993"></input>
            <label className="mb-2 text-xs font-bold">e-Money PIN</label>
            <input className="py-4 pl-6 mb-6 border border-bordergrey rounded-lg" placeholder="6891"></input>
        </form>
    </div>
        </section>)
}

export default CheckOut