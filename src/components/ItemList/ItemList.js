import Item from '../Item/Item';
import React from 'react';


const ItemList = ({products}) => {

  if (!products) {
    return <p>Cargando productos...</p>; 
  }
    return(
     <div className="item-list">

      {products.map((prod) => (
        <Item 
          key={prod.id}
          id={prod.id}
          name={prod.title}
          image={prod.image}
          precio={prod.precio}
          title={prod.title}
        />
      ))}
        </div>
    );
};

export default ItemList