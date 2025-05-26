import axios from "axios";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:4200/details', { email, password });
      console.log(result.data);
      window.alert('Logging in...')
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data.error);
        window.alert("Invalid credentials!!")
      } else {
        alert('Server error, please try again later.');
      }
      // console.error('Log in Failed!!');

    }
  }
  return (
    <div className="App container d-flex p-5 flex-column justify-content-start align-items-center vh-100">
      <div className="card shadow-lg p-4 h-95 w-80" style={{marginTop:'100px', height:'360px' }}>
        <form >
          <h2>log in form</h2>
          <div style={{paddingBlock:'40px',paddingInline:'30px'}}>
          <div className="mb-3">
            <label className="form-label"></label>
            <input type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input><br /><br />
          </div>

          <div className="mb-3" >
            <label className="form-label"></label>
            <input type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          </div>


          <button className ='btn btn-primary'type='submit' onClick={handleClick}>log in</button>
        </form>
      </div>



    </div>
  );
}

export default App;
