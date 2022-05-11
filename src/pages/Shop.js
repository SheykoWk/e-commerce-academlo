import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { setCategoriesThunk, setProductThunk } from "../redux/actions"

const Shop = () => {

    const dispatch = useDispatch()
    const productArr = useSelector(state => state.products)
    const categoriesArr = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(setProductThunk())
        dispatch(setCategoriesThunk())
    }, [dispatch])


    const list = productArr.map((item) => <ProductItem key={item.id} prodObj={item} />)
    const categoriesList = categoriesArr.map(item => <button key={item.id}>{item.name}</button>) 

    return (
        <div>
            <h1>Esta es mi tienda</h1>
            {categoriesList}
            {list}
        </div>
    )
}
export default Shop
