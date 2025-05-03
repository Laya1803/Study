import React, {useState, useEffect} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Dashboard.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 


//import './Date_Time';

    

const Dashboard = () => {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    className : "myCarousel"
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [CurrentTime, setCurrentTime] = useState(new Date());
  useEffect(()=> {
      const timer = setInterval(()=>{
          setCurrentTime(new Date());
      },1000);
      return()=>clearInterval(timer);
  },[]);
  return (
    <div 
    className="container-fluid d-flex flex-column justify-content-start align-items-center vh-100"
    style={{
      backgroundImage: "url('https://www.teahub.io/photos/full/364-3648044_blue-white-background-vector-vector-blue-and-white.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat",
      width: "100vw"
    }}
  >
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="d-flex flex-row p-3 w-100 " id="navbarNav">
        <div className="container-fluid collapse navbar-collapse ms-auto ">
        <a className="navbar-brand" href="#">
          <img src="https://www.freepnglogos.com/uploads/abc-png-logo/company-abc-png-logo-2.png" alt="Logo" width="40" height="40" className="d-inline-block align-top" />
          ABC Services
        </a>
        <ul className="navbar-nav">
          <li className="navbar-item"><a  className="nav-link active" href="#">Home</a></li>
          <li className="navbar-item"><a  className="nav-link active" href="#">About</a></li>
          <li className="navbar-item"><a  className="nav-link active" href="#">Travels</a></li>
          <li className="navbar-item"><a  className="nav-link active" href="#">Buses</a></li>
          <li className="navbar-item"><a  className="nav-link active" href="#">Trains</a></li>
          <li className="navbar-item"><a  className="nav-link active" href="#">Flights</a></li>
        </ul>
        <div className="time container-fluid me-5 d-flex flex-column justify-content-start align-items-center bg-dark ">
            <p>{CurrentTime.toLocaleDateString()}</p>
            <p>{CurrentTime.toLocaleTimeString("en-GB")}</p>
        </div>
        
        </div> 
      </div>
    </nav>
    <div className="container mt-5">
      <div className=" row justify-content-center d-flex gap-1 card shadow p-3 w-100" id="main_card">
        <div className="col-md-2">
          <div className="from"> 
            <input type="text" className="form-control me-1 card shadow p-3" placeholder="From" />
          </div>
        </div>
       
        <div className="col-md-2">
          <div className="to">
            <input type="text" className="form-control me-1 card shadow p-3" placeholder="To" id="to" />
          </div>
        </div>
        <div className=" col-md-2" >
    <DatePicker className="form-control me-1 card shadow p-3"id="datepicker"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      showYearDropdown
      showMonthDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={100} 
      placeholderText="Select a date"
    />
        </div>
        
        <button className="btn btn-danger  col-md-2 " id="search" >
        Search</button>
      </div>
      <br /><br />
      <div className="container-mt-5" style={{ height : "8rem", width:"60rem" }}>
        <div className="carousel slide row flex-nowrap overflow-auto d-flex g-4 " id="scroll" data-bs-ride="carousel">
          <div className="row g-4">
          <Slider {...settings}>
          <div className="card   col-md-2">
          <div className="card shadow text-center">
            <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/08/TNSTC-Logo.jpg" className="card-img-center img-fluid w-10 h-10 mx-auto d-block mt-3" height={100} width={100} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">TNSTC</h5>
            </div>
          </div>  
        </div>
      
      <div className="card  col-md-2" >
        <div className="card shadow text-center">
          <img src="https://tse4.mm.bing.net/th?id=OIP.5jpd0_w8pINdI1rDygrI3QAAAA&pid=Api&P=0&h=180" className="card-img-center img-fluid w-10 h-10 mx-auto d-block mt-3" height={100} width={100} alt="Card" />
          <div className="card-body">
            <h5 className="card-title justify-content-center">KSRTC</h5>
          </div>
        </div> 
      </div>

      <div className="card col-md-2" >
        <div className="card shadow text-center">
          <img src="https://www.mgbusandcoach.com/images/logos/apsrtc1.jpg" className="card-img-center img-fluid w-20 h-50 mx-auto d-block mt-2"  height={250} width={250} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">APSRTC</h5>
        </div>
        </div>
      </div>

      <div className="card col-md-2" >
        <div className="card shadow text-center">
          <img src="https://toppng.com/uploads/preview/ksrtc-logo-11551061044dxhdxvuz2a.png" className="card-img-center img-fluid mx-auto d-block mt-3"  height={100} width={100} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">KSRTC-Kerala</h5>
        </div>
        </div>
      </div>

      <div className="card  col-md-2" >
        <div className="card shadow text-center">
          <img src="https://assets.thehansindia.com/h-upload/2022/04/23/1288594-tsrtc.webp" className="card-img-center img-fluid w-50 h-50 mx-auto d-block mt-3"  height={100} width={100} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">TSRTC</h5>
        </div>
        </div>
      </div>

      <div className="card col-md-2" >
        <div className="card shadow text-center">
          <img src="https://th.bing.com/th/id/R.8cf0a3895acbf6ff647870bdd07cae39?rik=t05agSToCmzVbg&riu=http%3a%2f%2fwww.consumercomplaints.in%2fthumb.php%3fbname%3d1%26src%3ddelhi-transport-corporation.png%26wmax%3d900%26hmax%3d900%26quality%3d90%26nocrop%3d1&ehk=i%2bpoi41NCEFqsv2jKAzyxcZoIFuHNhhFZAV65jDlcns%3d&risl=&pid=ImgRaw&r=0" className="card-img-center img-fluid w-50 h-40 mx-auto d-block mt-3"  height={100} width={100} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">DTC</h5>
        </div>
        </div>
      </div>
      
        </Slider>
          </div>
          
        
  </div>
    </div>        
    </div>
  </div>
  
  );
};

export default Dashboard;