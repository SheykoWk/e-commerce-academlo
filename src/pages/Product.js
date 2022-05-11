import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk } from "../redux/actions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo);

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageArr, setImageArr] = useState()

  useEffect(() => {
    console.log("se hizo la peticion al id", id);
    dispatch(setInfoProductThunk(id));
    setIsLoaded(true)
  }, [dispatch, id]);

  const images = product.images

  // console.log(id)
  // console.log(product.images)
  //    console.log(product.images[0].url)
  return (
    <div>
      {isLoaded ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.images?.map((item) => <img src={item.url} alt='' key={item.url} />)}
        </>
      ) : null}
    </div>
  );
};

export default Product;
