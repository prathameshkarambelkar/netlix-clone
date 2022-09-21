import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2 ">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p className="white-space-normal text-xs md:text-small flex justify-center h-full text-center items-center font-bold">
                  {item?.title}
                </p>
                <p className="">
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-300 " />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-gray-300 "  />
                  )}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
