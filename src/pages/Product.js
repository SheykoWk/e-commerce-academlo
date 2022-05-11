import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk } from "../redux/actions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo);


  useEffect(() => {
    dispatch(setInfoProductThunk(id));
  }, [dispatch, id]);

 
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.images?.map((item) => <img src={item.url} alt='' key={item.id} />)}
    </div>
  );
};

export default Product;
