import App from "../../App";
import { useState } from  'react';

const ItemCount = ({stock, initial, Add})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
    }
}
   
   const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1)
   }
}

    return (
        <div className="Counter">
           <div className="Controls">
            <button className="Button" onClick={decrement}>-</button>
            <h4 className="Quantity">{quantity}</h4>
            <button className="Button" onClick={increment}>+</button>
           </div>

           <div>
            <button className="Button" onClick={() => Add(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
           </div>

        </div>
    )

}

export default ItemCount