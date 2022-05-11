import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setInfoProductThunk } from "../redux/actions"

const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productInfo)

    useEffect(() => {
        dispatch(setInfoProductThunk(id))
    }, [dispatch, id])

    console.log(product)

    return (
        <div>
            
        </div>
    )
}

export default Product