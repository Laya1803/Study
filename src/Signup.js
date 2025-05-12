import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './All.css';
function Signup() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  // useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'layashree@ispectratechnologies.com' && password === 'laya') {
      navigate('/Pro')
    }
    else {
      alert("Invalid credentials")
    }
    console.log("Form submitted", email, password);
  }

  return (
    <div className="container d-flex p-5 flex-column justify-content-start align-items-center vh-100" id="signup">
      <div className="card p-4 shadow-lg" style={{ top:'1vh' }}>
        <h2 className="text-center">Sign in</h2>
        <form onSubmit={handleSubmit} style={{
          position: "relative",
          right: '15px'
        }}>
          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
          </div>

          <div className="mb-3">
            <label className="form-label"></label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required></input>
          </div>
          <button className="btn btn-primary justify-content-start" style={{ top: "2vh", left: "90px", padding:'10px' }}>sign in</button>
        </form>
      </div>
<br /><br />
      <div className='box' >
                <div className='item 1' style={{height:'100px', width:'100px',
                 backgroundColor:"grey", margin: '10px',
                  padding: '20px',fontsize: '30px'}}>
                  1
                </div>
                <div className='item 2' style={{height:'100px', width:'100px',
                 backgroundColor:"grey ", margin: '10px',
                  padding: '20px',fontsize: '30px'}}>
                  2
                </div>
      </div>
    </div>
  );
}

export default Signup;
