import React from 'react';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [currentTime, setCurrentTime] = useState((new Date()));
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <div className="container-fluid d-flex " id='dashboard'>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-light w-100 d-flex">
                <div className="navbar" id="nav">
                    <ul className="navbar justify-content-start" style={{textAlign:'start'}}>
                
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeQjgujdl4NTuPv7RHKbAO1AN-KyGj56rxUeZkYhQuN4L02l6DHYPJOUpl7LoNUCarCA&usqp=CAU" alt="" width="160px" height="50px" style={{position:'relative', right:'200px'}}  />
                      
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page" id='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/pro'} className="nav-link" >products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Contact'} className="nav-link" >contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Users'} className="nav-link" >Users</Link>
                        </li>
                        <form className="form-inline p-2">
                            <input id="input" class="form-control mr-sm-2 p-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className='date'>
                            <h5>{currentTime.toLocaleDateString()}</h5>
                            <h5>{currentTime.toLocaleTimeString('en-us', { hour12: true })}</h5>
                        </div>
                    </ul>
                </div>

            </nav>
        </div>
    )
}
export default Dashboard;