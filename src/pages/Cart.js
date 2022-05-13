import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { setCartProductsThunk } from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartValues = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    dispatch(setCartProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    let amount = 0;
    cartValues.forEach(item => amount += item.product.price * item.quantity);
    setTotal(amount)
  }, [cartValues])

  const list = cartValues.map((item) => {
    return <CartProduct key={item.id} prodObj={item} />;
  });

  

  return (
    <div>
      <h1>Cart</h1>
      {total}
      {list}
    </div>
  );
};

export default Cart;