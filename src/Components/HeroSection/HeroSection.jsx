import './HeroSection.css'
import video from '../../assets/videos/1.mp4'
import Button from '../UI/Button'
const HeroSection = ()=>{
    return(
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <div className='hero-buttons'>
                <input className='search-input' type='text' placeholder='جستجوی مکان، شهر، کشور و . . '  autoComplete={false}/>
            
                <Button buttonStyle='btn--search' buttonSize='btn--large'>
                    جستجو
                </Button>
            
            </div>
        </div>
    )
}

export default HeroSection  