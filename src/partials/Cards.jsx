import React from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <>
    {data.map((d,idx)=>{
        return (
            <div key={idx} className="w-52 h-72 shrink-0 mb-4">
            <Link className="w-full h-[90%] inline-block">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.profile_path || d.poster_path
                }`}
                alt=""
              />
            </Link>
            <h1 className="text-lg tracking-tight font-semibold text-zinc-400">{d.original_title || d.title || d.name}</h1>
          </div>
        )
    })}
     
    </>
  );
}

export default Cards;
