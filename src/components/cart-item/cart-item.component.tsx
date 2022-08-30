import { FC } from "react";
import { CartItemsType } from "../../store/cart/cart.type";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemsType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
