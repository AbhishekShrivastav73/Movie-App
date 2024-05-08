import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";

function App() {
  return <>
  
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/trending" element={<Trending />} />
    <Route path="/popular" element={<Popular />} />
   </Routes>
  </>;
}

export default App;
