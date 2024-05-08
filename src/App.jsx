import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import Person from "./Components/Person";

function App() {
  return <>
  
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/trending" element={<Trending />} />
    <Route path="/popular" element={<Popular />} />
    <Route path="/movie" element={<Movie />} />
    <Route path="/tv" element={<Tv />} />
    <Route path="/person" element={<Person />} />
   </Routes>
  </>;
}

export default App;
