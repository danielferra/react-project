import "./styles.css"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)
    return(
       <aside
       className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
         <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Detalle</h2>
          <div>x</div>
         </div>
       </aside>
    )
}


export default ProductDetail