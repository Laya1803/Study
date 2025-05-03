import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./signup";
import Dashboard from "./Dashboard"; 
import './App.css';


function App() {
  
   
  return (
    <Router>
      <Routes>
      <Route exact
                path="/"
                element={<Signup />} />
      
      <Route exact
                path="/Dashboard"
                element={<Dashboard />} />

      <Route
                path="*"
                element={<Navigate to="/" />}
                    />
      </Routes>
        
    </Router>
    
  );
}
export default App