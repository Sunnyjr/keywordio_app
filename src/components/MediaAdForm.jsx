import React, { useState } from 'react';
import { TextField, Button, makeStyles, Box, Grid, FormControl, FormLabel, Typography, Stack, Container, Select, MenuItem } from "@mui/material";


const MediaAdForm = () => {

    const [formData, setFormData] = useState({
        heading01: '',
        heading02: '',
        businessName: '',
        websiteURL: '',
        description01: '',
        buttonLabel: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Redirect or process form data as needed
    };
    return (
        <>
            <Box m={2} sx={{ boxShadow: '4', borderRadius: '0.5rem' }}>

                <form className={''} noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                        {/* <Grid margin={4}> */}
                        <Typography variant="h5" align="left" gutterBottom> Create Text & Media </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid item >
                                    <FormControl  size="small" fullWidth>
                                        <Typography variant="h6" align="left" gutterBottom>Heading 1</Typography >
                                        <TextField />
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <FormControl fullWidth>
                                        <Typography variant="h6" align="left" gutterBottom>Heading 1</Typography >
                                        <TextField />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="h6" align="left" gutterBottom>Discription</Typography >
                                <TextField
                                    label="Description"
                                    fullWidth
                                    multiline
                                    rows={5} // Adjust the number of rows as needed
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={4}>
                                <Typography variant="h6" align="left" gutterBottom>Landscape Marketing Image</Typography >
                                <TextField label="Text Field 1" fullWidth />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" align="left" gutterBottom>Portrait Marketing Image</Typography >
                                <TextField label="Text Field 2" fullWidth />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" align="left" gutterBottom>Square Marketing Image</Typography >
                                <TextField label="Text Field 3" fullWidth />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} marginTop={2}>
                            <Typography variant="h6" align="left" gutterBottom>Video URL</Typography >
                            <TextField label="Text Field 1" fullWidth />
                        </Grid>

                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" align="left" gutterBottom>Business Name</Typography >
                                <TextField label="Text Field 1" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" align="left" gutterBottom>Button Label</Typography >
                                
                                <Select
                                    sx={{ minWidth: 700 }}
                                    labelId="select"
                                    id="demo-simple-select"
                                    value={'select'}
                                    label="Button Label"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} marginTop={2}>
                            <Typography variant="h6" align="left" gutterBottom>Website URL</Typography >
                            <TextField label="Text Field 1" fullWidth />
                        </Grid>


                        <Stack spacing={4} marginTop={2} direction="row" sx={{ justifyContent: "flex-end" }}>
                            <Button variant="outlined" sx={{ height: "2.5rem", width: "12rem" }}>Back</Button>
                            <Button variant="contained" sx={{ height: "2.5rem", width: "12rem" }}>Submit</Button>
                        </Stack>
                        {/* </Grid> */}
                    </Container>
                </form>
            </Box>
        </>
    );
};

export default MediaAdForm;