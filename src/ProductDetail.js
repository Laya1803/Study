import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams();

    const [data, setData] = useState({})
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);

                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Product ID: {id}</h2>
            <div className='justify-content-center' style={{ marginTop: '20px' }}>
                <h3>{data.title}</h3>
                <img src={data.image} alt={data.title} width="150" />
                <p>Price: ${data.price}</p>
                <p>{data.description}</p>
                <button className='btn btn-primary' style={{
                    position: "relative",
                    top: '0vh'
                }}>Add to cart</button>
                <button className='btn btn-warning' style={{
                    position: "relative",
                    top: '0vh', left: "10px"
                }}>Buy now</button>
            </div>
        </div>
    )
}
;

export default ProductDetail;