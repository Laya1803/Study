import React, { useEffect, useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetail';
import './Product.css';
import axios from "axios";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link, useParams } from "react-router-dom";
//import Dashboard from "./Dashboard";
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

const Sample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <div className="App">
      <div className="container" id="container">
        <img src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-125567.jpg?ga=GA1.1.1943853250.1746778990&semt=ais_hybrid&w=740" class="img-fluid" id='product_img' alt="..."></img>
        <div>
          <h3 className="text-center" id="product">PRODUCTS</h3>
        </div>
        {data.map((products)=>{
            return(
                
               
          <div className="row col-md-4 card shadow p-3 card border-dark" id="card" style={{
                        width: "20rem",
                        backgroundColor: "white",
                        padding: '10px',
                        borderRadius: 10,
                        marginBlock: 10,
                        margin: '10px',
                        height: '25rem'
          
                      }}>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img className="text-center" style={{
                          height: "10em",
                          width: "10em"
                        }} src={products.image} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <div className="title text-truncate">
                            <h5>{products.title}</h5>
                          </div>
          
                          <div className="text">
                            <p className="description" id="description">{products.description}</p>
                            <Tooltip title={products.description} arrow>
                              <button className="btn btn-secondary text-light bg-dark">description</button>
                            </Tooltip>
                            <Link to={`/pro/${products.id}`} className="btn btn-primary text-light" id="cart">View</Link>
                          </div>
          
                          <p className="price">Price: ${products.price}</p>
                          <p className="category">{products.category}</p>
          
                        </div>
          
                      </div>
        </div>
       
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
            )
        })}
    
     </div>
     </div>
            
            
  );
};

export default Sample;