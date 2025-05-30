import { CartItemResponsive, ItemDetails } from "./cart-item.styles";
import imageUrl from "../../assets/NGM.png"; // Update this to your actual image path

const CartItem = ({ cartItem }) => {
  const { name, price, quantity } = cartItem;

  return (
    <CartItemResponsive>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemResponsive>
  );
};

export default CartItem;
