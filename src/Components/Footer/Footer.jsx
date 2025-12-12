import './Footer.css'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer-container '>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading '></p>
        <p className='footer-subscription-text '></p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' type='email' placeholder='لطفا ایمیل خود را وارد کنید'/>
            <Button buttonStyle='btn--special'>عضویت</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>درباره ما</h2>
            <Link to='/'>موقعیت های شغلی</Link>
            <Link to='/'>تماس با ما</Link>
            <Link to='/'>همکاری با ما</Link>
          </div>
          <div className='footer-link-items'>
            <h2>راهنما</h2>
            <Link to='/'>نقشه سایت</Link>
            <Link to='/'>سوال های متداول</Link>
            <Link to='/'>حریم شخصی</Link>
          </div>
          <div className='footer-link-items'>
            <h2>رزرو</h2>
            <Link to='/'>رزرو هتل</Link>
            <Link to='/'>رزرو بلیط هواپیما</Link>
            <Link to='/'>رزرو بلیط قطار</Link>
          </div>
          <div className='footer-link-items'>
            <h2 >شبکه های اجتماعی</h2>
            <Link to='/'> اینستاگرام</Link>
            <Link to='/'>توییتر</Link>
            <Link to='/'>لینکدین</Link>
          </div>
        </div>
        </div>


      <section className='social-media'>
        <div className='social-media-wrap '>
            <div className='footer=logo'>
              <Link to='/' className='social-logo'> 
              Travel <i className='fab fa-typo3' />
              </Link>
            </div>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
              >
                <i className='fab fa-facebook-f'/>
              </Link>
              <Link
                className='social-icon-link instagram'
              >
                <i className='fab fa-instagram'/>
              </Link>
              <Link
                className='social-icon-link twitter'
              >
                <i className='fab fa-twitter'/>
              </Link>
              <Link
                className='social-icon-link linkedin'
              >
                <i className='fab fa-linkedin'/>
              </Link>

            </div>
        </div>
      </section>        
      </div>

  
  )
}
