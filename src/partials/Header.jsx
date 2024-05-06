import React from "react";

function Header({ wallpaper }) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path ||
          wallpaper.profile_path ||
          wallpaper.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[65vh] "
    ></div>
  );
}

export default Header;
