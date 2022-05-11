import axios from "axios"
import { getFilterCategories, getProductById, getProducts } from "../../services"

export const actions =  {
    productSetAll : "@product/setAll",
    productInfoSetById: "@productInfo/setById",
    categoriesSetValues: " @categories/setValues"
}

//! const dispatch = useDispatch()
//? dispatch({type: "@product/setAll", payload: data})
//* dispatch(productSetAll(data))

export const productSetAll = (data) => ({
    type : actions.productSetAll,
    payload: data
})

export const setProductInfo = (data) => ({
    type: actions.productInfoSetById,
    payload: data
})

export const setCategories = (data) => ({
    type: actions.categoriesSetValues,
    payload: data
})

export const setProductThunk = () => {
    return (dispatch) => {
        getProducts()
            .then((res) => {
                dispatch(productSetAll(res))
            })
    }
}

//! const dispatch = useDispatch()
//? dispatch({type: "@product/setAll", payload: data})
//* dispatch(setProductThunk())

export const setInfoProductThunk = (id) => {
    return dispatch => {
        getProductById(id)
            .then((res) => {
                dispatch(setProductInfo(res))
            })
    }
}

//! const dispatch = useDispatch()
//? dispatch({type: "@product/setAll", payload: data})
//* dispatch(setInfoProductThunk(id))

export const setCategoriesThunk = () => {
    return (dispatch) => {
        getFilterCategories()
            .then((res) => {
                dispatch(setCategories(res))
            })
    }
}
