import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    return (<div>
       <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="basket"/>
       {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
       <CartItem/>
    </div>)
}
export default Cart;