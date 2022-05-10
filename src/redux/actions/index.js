export const actions =  {
    productSetAll : "@product/setAll"
}
// dispatch({type: "@product/setAll", payload: data})

export const productSetAll = () => ({
    type : actions.productSetAll
})
// dispatch(productSetAll())

export const productSetById = (id) => ({
    type : actions.productSetAll,
    payload: id
})
// dispatch(productSetById(data))
