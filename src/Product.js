import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data);
                setLoading(false);
                console.log(response.data)
            })
            //.then(console.log(response.data))
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="App">
      <h1 style={{ color: "blue", textAlign:"center" }}>PRODUCTS</h1>
      <center>
        {data.map((products) => {
          return (
            <div className="row col-sm-4 card shadow p-3 text-center border border-primary" style={{width: "20rem",
                backgroundColor: "grey",
                padding: 4,
                borderRadius: 10,
                marginBlock: 10,
            }}>
                    <img className="mt-2" style={{height: "10em",
                width:"10em"
              }} src={products.image} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                            <h5 className="card-title">{products.title}</h5>
                            <p className="card-text">{products.description}</p>
                    </div><hr />
                    <ul className="list-group list-group-flush">
                        <p className="list-group-item">Rs.{products.price}</p><hr />
                        <p className="card-header">{products.category}</p>  
                    </ul>
            </div>
          );
        })}
      </center>
    </div>
    );
};

export default Product;