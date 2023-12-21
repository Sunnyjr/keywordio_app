import { TextField, Button, makeStyles, Box, Grid, FormControl, FormLabel, Typography, Stack, Container } from "@mui/material";
import "./App.css";
// import { Route, Routes, useParams } from "react-router-dom";
import React, { useState } from 'react';
import CreateAds from "./components/CreateAds";
import MediaAdForm from "./components/MediaAdForm";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./components/Dashboard";



function App() {

  return (
    <div className="App ">
      <NavBar />
      <Dashboard />
      {/* <CreateAds /> */}
      {/* <MediaAdForm /> */}


      {/* <Header />
      <MenuSecond />
      <Routes>
        <Route path="/success/:success" element={<Success />} />
        <Route path="/" element={<Home />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;



