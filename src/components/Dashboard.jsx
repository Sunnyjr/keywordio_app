import React from 'react';
import { Checkbox, Container, Card, CardMedia, CardContent, Typography, CardHeader, FormControlLabel, Box, Grid, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Switch, Avatar, IconButton, } from '@mui/material';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';


function createData(name, amount, cost, convo, revenue) {
    return { name, amount, cost, convo, revenue };
}
const rows = [
    createData('Cosmetics', 159, 'USD 4,272', 24, "USD 4,272"),
    createData('Serums', 367, "USD 12,272", 367, "USD 4,272"),
    createData('Facewash', 262, "USD 7,272", 24, "USD 4,272"),
    createData('Shampoos', 205, "USD 34,3444", 67, "USD 623,106"),
    createData('Conditioners', 356, "USD 4,272", 409, "USD623,106"),
    createData('Facewash 2', 356, "USD 4,272", 49, "USD623,106"),
    createData('Total', "26,510", "USD 1,43,892", 489, "USD 15,73,563"),
];
const rows2 = [
    createData('Male', 348, 'USD 12,272', 24, "USD 63,118"),
    createData('Female', 692, "USD 24,272", 367, "USD 5,174"),
    createData('Unknown', 105, "USD 7,272", 24, "USD 4,272"),
    createData('Total', "1,230", "USD 41,892", 489, "USD 71,782"),
];

const Dashboard = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Container component="main" maxWidth="xl" >
                <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '100vh' }}>
                    <Grid item >
                        {/* table */}
                        <TableContainer component={Paper} sx={{ minWidth: 700, height: 450 }}>
                            <Table sx={{ minWidth: 700 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow><TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Ad Insights</TableCell></TableRow>
                                    <TableRow >
                                        <TableCell sx={{ fontWeight: "bold", }}>Campaigns </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Clicks</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Cost</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Conversion</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Revenue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                            <TableCell align="right">{row.cost}</TableCell>
                                            <TableCell align="right">{row.convo}</TableCell>
                                            <TableCell align="right">{row.revenue}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item >
                        <TableContainer component={Paper} sx={{ minWidth: 700, height: 450 }}>
                            <Table sx={{ minWidth: 700 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow><TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Ad Insights</TableCell></TableRow>
                                    <TableRow >
                                        <TableCell sx={{ fontWeight: "bold", }}>Group </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Clicks</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Cost</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Conversion</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", }} align="right">Revenue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows2.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                            <TableCell align="right">{row.cost}</TableCell>
                                            <TableCell align="right">{row.convo}</TableCell>
                                            <TableCell align="right">{row.revenue}</TableCell>
                                        </TableRow>
                                    ))}

                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={checked}
                                                onChange={handleChange}
                                                color="primary"
                                                name="checked"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        }
                                        label={<LockOutlinedIcon />}

                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', }}> {/* Use a flexbox for layout */}
                                        <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                        <Avatar sx={{ m: 1, bgcolor:'red' }}>
                                            <LockOutlinedIcon />
                                        </Avatar>
                                    </Box>
                                   
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Dashboard;