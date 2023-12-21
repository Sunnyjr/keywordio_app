import React from 'react';
import { TextField, Button, makeStyles, Box, Grid, FormControl, FormLabel, Typography, Stack, Container } from "@mui/material";


const TextAdForm = () => {
    return (
        <>
            <Box m={2} sx={{ boxShadow: '4', borderRadius: '0.5rem' }}>

                <form className={''} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                        {/* <Grid margin={4}> */}
                        <Typography variant="h5" align='left' gutterBottom> Create Text & Media </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid item >
                                    <FormControl size="sm" fullWidth>
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
                                    rows={4} // Adjust the number of rows as needed
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" align="left" gutterBottom>business Name</Typography >
                                <TextField label="Text Field 1" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" align="left" gutterBottom>Button Label</Typography >
                                <TextField label="Text Field 2" fullWidth />
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

export default TextAdForm;