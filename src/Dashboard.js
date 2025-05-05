import React, { useEffect, useState }from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard(){

    return(
        <div className="container-fluid d-flex flex-column justify-content-start align-items-center vh-100">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-100 d-flex">
                <div className="d-flex flex-row p-3">
                <div className="container-fluid collapse navbar-collapse ms-auto " id="nav">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <a className="nav-link active" href="#">Home</a>
                            <a className="nav-link active" href="#">Products</a>
                            <a className="nav-link active" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
export default Dashboard;