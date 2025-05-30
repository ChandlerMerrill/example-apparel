import { useDispatch, useSelector } from "react-redux";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import Button from "@/components/button/button.component";
import { setIsCartOpen } from "@/store/cart/cart.reducer";
import { selectCartItems } from "@/store/cart/cart.selector";
import CartItem from "@/components/cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(false));

  const goToCheckoutHandler = () => {
    // navigate("/checkout");
    toggleIsCartOpen();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
