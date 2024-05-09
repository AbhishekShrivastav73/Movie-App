import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncloadMovie } from "../actions/MovieActions";
import { removeInfo } from "../reducers/MovieSlice";
import Loading from "../Components/Loading";

function MovieDetails() {
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(removeInfo());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.65)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen p-6 bg-zinc-900 text-zinc-200"
    >
      <div className="flex items-center gap-3">
        <i 
          onClick={() => navigate("/")}
          class="ri-arrow-left-line text-4xl hover:text-[#6556CC] "
        ></i>
        <a className="text-2xl text-white" target="_blank" href={info.detail.homepage}>
        <i class="ri-external-link-fill"></i>
        </a>
        <a  className="text-2xl text-white"target="_blank" href={`https://www.imdb.com/title/${info.external_ids.imdb_id}/`}>IMDB</a>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default MovieDetails;
