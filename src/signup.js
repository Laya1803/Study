import React from "react";
import {useState} from "react"
import {useNavigate } from "react-router-dom";
import './App.css';

function Signup() {
  const [formData, setFormData]=useState({
    username : "",
    email : "",
    password : "",
    Gender : ""
  });
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };
  const handleGender = (event) =>{

    const { value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      Gender: value  // Updated to use "gender" instead of "Gender"
    }));
     
    };
  const [error] = useState({formData});
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    console.log(formData.Gender);
    
    event.preventDefault();
    if(!formData.username){
      alert("Please fill the required field!")
    }else if(!formData.email){
      alert("Please fill the required field!")
    }else if(!formData.password){
      alert("Please fill the required field!")
    }else if(!formData.Gender){
      alert("Please select a gender!")
    }
    else{
      console.log("Form submitted",formData);
      navigate("/Dashboard")
    }
    
    
  };
 

  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center vh-100"
        style={{backgroundImage:"url(`https://www.teahub.io/photos/full/364-3648044_blue-white-background-vector-vector-blue-and-white.jpg`)",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat: "no-repeat",
          width:"100vw"
        }}
        >
        
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
        <h3 className="text-center">Login Page</h3>
        
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label className="form-label"></label>
        <input
          type="text"
          id="username"
          className='form-control' 
          placeholder="Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required>
            {error.username && <div className="invalid-feedback">{error.username}</div>}
        </input>
        </div>

        <div className='mb-3'>
        <label className="form-label"></label>
        <input
          type="email"
          id="email"
          className="form-control" 
          placeholder="Enter Mail_ID"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required>
            {error.email && <div className="invalid-feedback">{error.email}</div>}
        </input>
        
        </div>

        <div className='mb-3'>
        <label className="form-label"></label>
        <input
          type="password"
          id="password"
          className='form-control'
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required>
            {error.password && <div className="invalid-feedback">{error.password}</div>}
        </input>
        </div>

        <div className='mb-3'>
        <label className="form-label"></label>
        <select
            id="gender"
            name="gender"
            className="form-select"
            placeholder="Select Gender"
            value={formData.Gender}
            onChange={handleGender}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">others</option> 
          </select>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Sign Up
      </button>
      </form>
      </div>  
      </div>
    </div>
    </div>
      
  );
}

export default Signup;
