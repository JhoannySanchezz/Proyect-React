import './ItemListContainer.css';
import { getProducts } from '../../products';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
    })
    .catch(error => {
        console.error(error)
    })
    }, [])

   
    return (
        <div className="container-list">
            <h1 className="txt-listContainer">{title}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer