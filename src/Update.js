import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Button from '@mui/material/Button';
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    TextField,
    Card,
    Box,
    Typography
} from '@mui/material';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://681b408117018fe5057ac18b.mockapi.io/api/v1/user/${id}`)
            .then((response) => {
                const userData = response.data;
                setFirstName(userData.firstName || "");
                setLastName(userData.lastName || "");
                setEmail(userData.email || "");
                setDistrict(userData.district || "");
                setState(userData.state || "");
                setCountry(userData.country || "");
                setFeedback(userData.feedback || "");
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted', firstName, lastName, email, district, state, country, feedback);


        axios.put(`https://681b408117018fe5057ac18b.mockapi.io/api/v1/user/${id}`, { firstName, lastName, email, district, state, country, feedback })
            .then(res => {
                console.log(res.data);

                if (res.data) {
                    alert("data updated");
                    navigate('/Users')
                }
            }).catch(err => {
                console.log(err);
            })
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4">
            <Typography variant="h5" className="text-center mb-4">Update User Details</Typography>
            <Card sx={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 2 }}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="District"
                            variant="outlined"
                            fullWidth
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            required
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 2 }}>
                        <TextField
                            label="State"
                            variant="outlined"
                            fullWidth
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                        <TextField
                            label="Country"
                            variant="outlined"
                            fullWidth
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Feedback"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        
                        <Button type="submit" variant="contained" style={{ top: '2vh', width: '100px', height: '50px', left: '10px' }} color="primary">Update</Button>
                    </Box>

                   
                </form>
            </Card>
        </div>
    );
}

export default Update;
