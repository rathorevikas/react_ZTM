import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { CartContext } from "../../context/cartContext";
import {
  Name,
  Price,
  ProductCardContainer,
  ProductCardFooter,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItemType } from "../../store/categories/categories.type";
import { FC } from "react";

type ProductCardProps = {
  product: CategoryItemType;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
