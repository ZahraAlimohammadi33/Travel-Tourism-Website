

export default function CardItem(props) {
 const {src, text, title}= props
  return (
    <li className='cards__item'>
        <div className='compare-item'>
            <div className='compare-image-list'>
                <img src={src}/>
                <div className='compare-item-title'>{title}</div>
                 <div className='compare-item-exp'>{text}</div>
            </div>
        </div>
    </li>
  )
}
