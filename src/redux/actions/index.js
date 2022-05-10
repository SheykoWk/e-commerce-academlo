export const actions =  {
    productSetAll : "@product/setAll"
}
// dispatch({type: "@product/setAll", payload: data})

export const productSetAll = (data) => ({
    type : actions.productSetAll,
    payload: data
})
// dispatch(productSetAll())

export const productSetById = (id) => ({
    type : actions.productSetAll,
    payload: id
})
// dispatch(productSetById(data))
