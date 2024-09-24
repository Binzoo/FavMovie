import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const token = localStorage.getItem("jwt");
  const nav = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleAddToList = (movie) => {
    setUserMovies([...userMovies, movie]);
    const postData = {
      title: movie.title,
      releaseDate: movie.release_date,
      movieRating: movie.vote_average.toString(),
      movieDescription: movie.overview,
      movieImage: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };

    axios
      .post(`${API_BASE_URL}/api/Movie`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Movie saved:", response.data);
        toast.success("Movie has been added!");
        setTimeout(() => nav("/movielisting"), 2000);
      })
      .catch((error) => {
        console.error(
          "Error saving movie:",
          error.response?.data || error.message
        );
        toast.error("You have added your top 10 movies!");
      });
  };

  const toggleDescription = (movieId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [movieId]: !prevState[movieId],
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Movie Search</h1>
          <Link
            to="/my-list"
            className="text-blue-600 hover:text-blue-800 transition duration-200"
          >
            View My List
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#ff6b6b] "
          />
          <button
            onClick={handleSearch}
            className="bg-[#ff6b6b]  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[450px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {movie.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Rating: {movie.vote_average}
                </p>

                {/* Movie Description with Show More/Less */}
                <p className="text-gray-600 text-sm mb-4">
                  {expandedDescriptions[movie.id]
                    ? movie.overview
                    : `${movie.overview.substring(0, 100)}...`}{" "}
                  {/* Show limited text if collapsed */}
                  <span
                    onClick={() => toggleDescription(movie.id)}
                    className="text-blue-500 cursor-pointer"
                  >
                    {expandedDescriptions[movie.id]
                      ? " Show Less"
                      : " Show More"}
                  </span>
                </p>

                <button
                  onClick={() => handleAddToList(movie)}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                >
                  Add to List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddMovies;
