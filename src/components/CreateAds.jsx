import { Checkbox, Container, Card, CardMedia, CardContent, Typography, CardHeader, FormControlLabel, Box, Grid, Button } from '@mui/material';
import React from 'react';
import mobileImg from '../image/mobileimg (2).png';

const CreateAds = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <Box m={2} sx={{ boxShadow: '4', borderRadius: '0.5rem' }}>
                <Typography variant="h6" align="left" gutterBottom>Create Ads</Typography>

                <Container component="main" maxWidth="xl" >
                    <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Grid item xs={6} sm={4} md={3}>
                            <Card sx={{ maxWidth: 320 }}>
                                <CardHeader
                                    avatar={
                                        <FormControlLabel control={<Checkbox />} label="" />
                                    }
                                />
                                <Box width="20">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={mobileImg}
                                        alt="mobile view"
                                    />
                                </Box>
                                <CardContent sx={{ bgcolor: 'lightgray', flexGrow: 1 }}>
                                    <Typography color="text.secondary">
                                        Create
                                    </Typography>
                                    <Typography variant="h6" >
                                        Text Ad
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <Card sx={{ maxWidth: 320 }}>
                                <CardHeader
                                    avatar={
                                        <FormControlLabel control={<Checkbox />} label="" />
                                    }
                                />
                                <Box width="20">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={mobileImg}
                                        alt="mobile view"
                                    />
                                </Box>
                                <CardContent sx={{ bgcolor: 'lightgray' }}>
                                    <Typography color="text.secondary">
                                        Create
                                    </Typography>
                                    <Typography variant="h6" >
                                        Media Ad
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Button variant="contained" sx={{ height: "2.5rem", width: "12rem", marginLeft: "auto" }}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>


                </Container>
            </Box>
        </>
    );
};

export default CreateAds;