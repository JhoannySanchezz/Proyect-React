import Item from '../Item/Item'

const ItemList = ({products}) => {
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
    )
}

export default ItemList