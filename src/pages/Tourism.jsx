import Button from "../Components/UI/Button";
import '../App.css'
import CardGuid from "../Components/CardGuid/CardGuid";
import Cards from "../Components/Cards/Cards";
export default function Tourism() {
  return (
    <>
    <div className="tourism">
      <h1 style={{color:'#fff', fontSize:'40px'}}>
        پرتال جامع گردش و سفر 
      </h1>
      <p>پرتال جامع گردش و سفر</p>
      <div className="tourism-box">
        <input className="search-input" type="text" placeholder='جستجوی شهر، کشور، و . .'  autoComplete={false}/>
        <Button buttonStyle='btn--search--place' buttonSize='btn--large'>جستجو</Button>
      </div>
    </div>
    <CardGuid/>
    <Cards/>
    </>
  )
}
