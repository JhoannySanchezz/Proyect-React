import './ItemListContainer.css';

import { getProducts,  getProductById } from '../../products';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();


    useEffect(() => {

        const productFunc = categoryId ? getProductById: getProducts;

        productFunc(categoryId)
          .then(response => {
            setProducts(response);
          })
          .catch(error => {
            console.error(error);
          });


        const fetchData = async () => {
            try {
              const response = await getProducts(); 
              setProducts(response);
            } catch (error) {
              console.error('Error al obtener los productos:', error);
            } finally {
              setLoading(false); 
            }
          };
      
          fetchData();
        }, [categoryId]);
   
    return (
        <div className="container-list">
            <h1 className="txt-listContainer">{title}</h1>
            {loading ? (
        <p>Cargando datos...</p> 
    ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;