import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    TextareaAutosize,
    Card,
    CardContent,
    Box
} from '@mui/material';
import axios from "axios";

function Contact() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [district, setDistrict] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [feedback, setFeedback] = useState();
    const [error, setError] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted', firstName, lastName, email, district, state, country, feedback);


        axios.post('https://681b408117018fe5057ac18b.mockapi.io/api/v1/user', { firstName, lastName, email, district, state, country, feedback })
            .then(res => {
                console.log(res.data);

                if (res.status === 201) {
                    alert("data stored")
                }
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div >
            <DialogTitle sx={{ textAlign: "center" }}>Fill up the details!!</DialogTitle>
            <form onSubmit={handleSubmit}>
                <Card sx={{ maxWidth: 8000, padding: "20px" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <TextField
                            sx={{
                                width: "200px",
                                left: "200px",
                                '& .MuiInputBase-root': {
                                    padding: 0,
                                    alignItems: 'flex-start', // ensures the cursor starts at the top
                                }, '& .MuiInputBase-inputMultiline': {
                                    boxSizing: 'border-box',
                                    padding: '12px',
                                    lineHeight: '1.5',
                                    fontSize: '1rem',
                                },
                            }}
                            autoFocus
                            margin="normal"
                            label="First Name"
                            name="name"
                            error={Boolean(error.firstName)}
                            fullWidth
                            variant="outlined"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />


                        <div className="mb-3">

                            <TextField
                                sx={{
                                    width: "200px",
                                    left: "200px"
                                }}
                                autoFocus
                                margin="dense"
                                label="Last Name"
                                name="name"
                                fullWidth
                                variant="outlined"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <div className="mb-3">
                            <TextField
                                sx={{
                                    width: "200px",
                                    left: "200px"
                                }}
                                autoFocus
                                margin="dense"
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            ></TextField>
                        </div>

                        <div className="mb-3">

                            <TextField
                                sx={{
                                    width: "200px",
                                    left: "200px"
                                }}
                                autoFocus
                                margin="dense"
                                label="District"
                                name="district"
                                fullWidth
                                variant="outlined"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required
                            />
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <div className="mb-3">

                            <TextField
                                sx={{
                                    width: "200px",
                                    left: "200px"
                                }}
                                autoFocus
                                margin="dense"
                                label="State"
                                name="state"
                                fullWidth
                                variant="outlined"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">

                            <TextField
                                sx={{
                                    width: "200px",
                                    left: "200px"
                                }}
                                autoFocus
                                margin="dense"
                                label="Country"
                                name="country"
                                fullWidth
                                variant="outlined"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <div className="mb-3" >
                            <TextField
                                sx={{
                                    width: "500px",
                                    height: '200px',
                                    left: "200px"
                                }}
                                onChange={(e) => setFeedback(e.target.value)}
                                aria-label="feedback"
                                minRows={3}
                                placeholder="Feedback"
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary" style={{ top: '15vh', width: '100px', height: '50px', left: '10px' }}>submit</button>
                    </Box>
                </Card>


            </form>
        </div>

    )
}
export default Contact;