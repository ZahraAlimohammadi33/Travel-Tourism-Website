import './TourCard.css'
import Button from '../UI/Button';
export default function TourCard() {

const tourTabs = [
  { id: 26, title: "تمامی تورها" },
  { id: 26, title: "تور های خارجی" },
  { id: 27, title: "تورهای داخلی" },
  { id: 0, title: "تور یک روزه" },
  { id: 1, title: "تور چند روزه" },
  { id: 2, title: "تور طبیعت گردی" },
  { id: 3, title: "تور ماجراجویانه" },
  { id: 4, title: "تور لوکس" },
  { id: 5, title: "تور آفردار" },
  { id: 6, title: "تور لحظه آخری" },
  { id: 7, title: "تور آموزشی" },
  { id: 8, title: "تور نمایشگاهی" },
  { id: 9, title: "تور سافاری" },
  { id: 10, title: "تور داخلی" },
  { id: 11, title: "تور خارجی" },
  { id: 12, title: "تور کودکان" },
  { id: 13, title: "تور تاریخی و فرهنگی" },
  { id: 14, title: "تور کوه نوردی" },
  { id: 15, title: "تور نوروز" },
  { id: 16, title: "تور عید" },
  { id: 17, title: "تور تعطیلات" },
  { id: 18, title: "تور ویژه" },
  { id: 19, title: "تور ایرانگردی" },
  { id: 20, title: "تور جهانگردی" },
  { id: 21, title: "تور زیارتی" },
  { id: 22, title: "تور مسافرتی" },
  { id: 23, title: "تور کویر گردی" },
];


  return (
     <>

    <div className="container">   
    <div className="tour__tabs">
      <div className="tour__wrapper">
        <ul className="nav-tabs">
          {tourTabs.map((tab, index) => (
            <li key={index}>
              <a data-toggle="tab" href={`#tabTour_${tab.id}`}>
                <h5>{tab.title}</h5>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>


    <div className='tour__tabs'>
          <div className="tab-content">
                <div className="tab-pane">
                    <header className="tab-header">
                        <div className="tab-text">
                            تور
                        </div>
                        <div className="tab-sort-filter tab-text">
                            مرتب شده بر اساس
                            <span className="selectTours">
                                <select className="tab-sort-input" >
                                    <option value="newest">جدیدترین</option>
                                    <option value="cheapest" >ارزان ترین</option>
                                    <option value="viewCount" >پربازدید ترین</option>
                                </select>
                            </span>
                        </div>
                    </header>
                    <div className="tabs-content">
                        <ul>
                            <li>
                                <a href="#">
                                    <span> تور کیش 2 روز و 3 شب</span>
                                    <p>از 1.600.000</p>
                                    <p> 3 روز و 2 شب</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات    </p>
                                </a>
                               
                            </li>
                            <li>
                                <a href="#">
                                    <span> تور کیش 2 روز و 3 شب</span>
                                    <p>از 1.600.000</p>
                                    <p> 3 روز و 2 شب</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات    </p>
                                </a>
                               
                            </li>
                        </ul>
                        <div className="more-tour-button">
                             <Button buttonStyle="btn--tour" buttonSize="btn--large">تور های بیشتر</Button>
                        </div>
                       
                    </div>
                </div>
            </div>
    </div>
    </>
  );


}
