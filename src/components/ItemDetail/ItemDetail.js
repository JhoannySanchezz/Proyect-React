import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ name, image, precio, categoria, title}) => {
    return (
        <article className="Card-Item">

        <picture>
           <img src={image} alt={name} className="Img-Item"/>
       </picture>

        <section>
           <h2 className="txt-Item">{title}</h2>
           <p className="info">
              Categoria: {categoria}
           </p>
           <p className="info">
               Precio: ${precio}
           </p>
       </section>

       <footer className='ItemFooter'>
         <ItemCount initial={1} stock={10} add={(quantity) => console.log('Cantidad Agregada ' ,quantity)} />
       </footer>

       </article>
    )
}

export default ItemDetail