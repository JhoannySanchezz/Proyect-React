import './Item.css'

const Item = ({ name, image, precio, title}) => {

    return (
        <article className="Card-Item">

         <picture>
            <img src={image} alt={name} className="Img-Item"/>
         </picture>

        <section>
            <h2 className="txt-Item">{title}</h2>
            <p className="info">
                Precio: ${precio}
            </p>
            </section>
        

        <footer className='ItemFooter'>
           <button className='Option'>Ver Detalles</button>
        </footer>
        
  
        </article>
    )
}

export default Item