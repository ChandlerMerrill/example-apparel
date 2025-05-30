import { useDispatch, useSelector } from "react-redux";

import ShoppingIcon from "@/assets/shopping-bag.svg";
import Image from "next/image";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { setIsCartOpen } from "@/store/cart/cart.reducer";
import { selectCartCount, selectIsCartOpen } from "@/store/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Image
        priority
        height={32}
        width={32}
        src={ShoppingIcon}
        alt="Cart Icon"
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
