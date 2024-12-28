import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const clearCartHandler = () => {
        dispatch(clearCart());
    }

    console.log(cartItems);
    return(
        <div className="mt-5 text-center flex flex-col gap-2 justify-center items-center">
            <h1 className="text-2xl font-medium">Cart</h1>
            <div className="w-3/5 mt-4">
                <ItemList list={cartItems} />
            </div>
            <button className="bg-red-500 p-3 rounded-lg text-white" onClick={()=> clearCartHandler()}>Clear Cart</button>
        </div>
    )
}

export default Cart;