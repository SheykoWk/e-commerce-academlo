import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { setProductThunk } from "../redux/actions"
import { getProducts } from "../services"

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProductThunk())
    }, [dispatch])

    const productArr = useSelector(state => state.products)

    const list = productArr.map((item) => <ProductItem key={item.id} prodObj={item} />)

    return (
        <div>
            <h1>Esta es mi tienda</h1>
            {list}
        </div>
    )
}
export default Shop
