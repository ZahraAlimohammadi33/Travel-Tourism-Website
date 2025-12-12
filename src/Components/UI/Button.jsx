import { Link } from 'react-router-dom'
import './Button.css'


export default function Button(props) {
  const STYLES = ['btn--primary','btn--outline','btn--special','btn--search','btn--search--place','btn--tour'];
  const SIZES = ['btn--medium', 'btn--large']
  const {to, children, buttonStyle, buttonSize} = props
  
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={to} className='btn-mobile' >
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </button>
    </Link>
  )
}
