import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import TopNav from "../partials/TopNav";
import Header from "../partials/Header";
import axios from "../utils/Axios";

function Home() {
  document.title = "Movie App | Homepage";
  const [header, setHeader] = useState();
  const getHeader = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      let randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setHeader(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    !header &&  getHeader();
    console.log(header);

  },[])
   
  return header ? ( 
    <>
      <div className="w-full h-screen bg-[#1f1e24] text-zinc-200 flex">
        <SideNav />
        <div className="w-[75%] h-full ">
          <TopNav />
          <Header wallpaper={header} />
        </div>
      </div>
    </>
  ) : <h1>Loading</h1>
}

export default Home;
