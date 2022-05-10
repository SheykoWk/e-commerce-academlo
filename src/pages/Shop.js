import { useEffect } from "react"
import { getProducts } from "../services"

const Shop = () => {

    

    useEffect(() => {
        getProducts()
            .then((res) => {
                console.log(res)
            })
    }, [])

    return (
        <div>
            <h1>Esta es mi tienda</h1>
        </div>
    )
}
export default Shop