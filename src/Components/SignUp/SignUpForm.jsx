import './SignUpForm.css'
import Button from '../UI/Button'

export default function SignUpForm() {
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <input className='text-input' type='text' placeholder='نام کاربری' autoComplete='off' required/>
        <input className='text-input' type='text' placeholder='شماره همراه' autoComplete='off' required/>
        <input className='text-input' type='text' placeholder='رمز عبور' autoComplete='off' required/>

        <Button buttonStyle='btn--tour' buttonSize='btn--large'>ثبت نام</Button>
      </div>
    </div>
  )
}
