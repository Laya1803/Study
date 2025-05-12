import React from 'react'
import { useEffect, useState, useParams } from 'react'
import axios from "axios";
import './Details.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        axios
            .get("https://681b408117018fe5057ac18b.mockapi.io/api/v1/user")
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

   
        
    
    const handleDelete = (id)=>{
        
        axios.delete(`https://681b408117018fe5057ac18b.mockapi.io/api/v1/user/${id}`)
        .then((response)=>{
            console.log("Deleted successfully",response.data)
            alert("Deleted successfully");
            window.location.reload();
        })
        .catch(err=>{
            console.log("error",err)
        });
    }
   
    
    return (
        <div className='details'>
            <h1 style={{ color: "black", textAlign: "center" }}>User Details</h1>
            <div>
                <div>
                    <table >
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Feedback</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {data.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.district}</td>
                                    <td>{user.state}</td>
                                    <td>{user.country}</td>
                                    <td>{user.feedback}</td>
                                    <td><Link to={`/Users/${user.id}`} className='btn btn-warning' style={{ top: '0vh', left: '20px', right: '0px' }}>Edit</Link></td>
                                    <td><button onClick={()=>handleDelete(user.id)} className='btn btn-danger' style={{ top: '0vh', left: '20px', right: '0px' }}>delete</button></td>
                                </tr>
                            )
                        }

                        )}
                    </table>
                    <Link to={`/Contact/`} className="btn btn-primary text-light" id="details">Create new User</Link>
                </div>


            </div>



        </div>
    )
}

export default Users
