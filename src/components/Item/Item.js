import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, precio, title}) => {

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
           <Link to={`/item/${id}`} className='Option'>Ver Detalles</Link>
        </footer>
        
  
        </article>
    )
}

export default Item