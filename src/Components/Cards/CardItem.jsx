import { Link } from 'react-router-dom'
import './Cards.css'

export default function CardItem(props) {
const {src, text, path, label} = props

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className="cards__item__pic__wrap" data-category={label}>
            <img src={src} alt='Travel Picture' className='cards__item__img' />
        </figure>
        <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
        </div>
      </Link>  
    </li>
  )
  
}
