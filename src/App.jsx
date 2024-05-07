import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";

function App() {
  return <>
  
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/trending" element={<Trending />} />
   </Routes>
  </>;
}

export default App;
