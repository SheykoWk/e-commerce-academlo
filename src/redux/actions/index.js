import axios from "axios"
import { getProducts } from "../../services"

export const actions =  {
    productSetAll : "@product/setAll"
}
// dispatch({type: "@product/setAll", payload: data})

/*  
! 1.Ejecutamos el dispatch (el dispatch actualiza nuestro estado global)
? dispatch({type: "@product/setAll", payload: data})

! 2.Utilizando un middleware, vamos a manipular la informacion que vamos a setear en nuestro payload
*/


export const productSetAll = (data) => ({
    type : actions.productSetAll,
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


// dispatch(productSetAll())
// dispatch(productSetById(data))
