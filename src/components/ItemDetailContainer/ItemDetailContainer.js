import { useState, useEffect} from 'reatc';
import { getProductById } from '../../products';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById('man')
        .then(response => setProduct(response))
    })
    .catch(error => {
        console.error(error);
    })

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer

