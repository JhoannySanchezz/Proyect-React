import './ItemListContainer.css';
import { getProducts, getProductById } from '../../products';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        const productFunc = categoryId ? getProductById : getProducts

        productFunc(categoryId)
        .then(response => {
            setProducts(response)
    })
    .catch(error => {
        console.error(error)
    })
    }, [categoryId])

   
    return (
        <div className="container-list">
            <h1 className="txt-listContainer">{title}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer