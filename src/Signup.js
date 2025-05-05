import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  }

  const handleSubmit = (event)=>{
    event.prevent.default();
    console.log("Form submitted");
  }

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center vh-100">
      <h2>LogIn Page</h2>
      <div className="card p-4 shadow-lg" style={{width:"22rem"}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"></label>
            <input 
            type="text"
            id="text"
            className="form-control"
            placeholder="Enter Username: "
            value={formData.username}
            onChange={handleChange}
            required></input>
          </div>

          <div className="mb-3">
            <label className="form-label"></label>
            <input 
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required></input>
          </div>

          <div className="mb-3">
            <label className="form-label"></label>
            <input 
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required></input>
          </div>
        <button className="btn btn-primary">sign up</button>
          
        </form>
      </div>
    </div>
  );
}

export default App;
