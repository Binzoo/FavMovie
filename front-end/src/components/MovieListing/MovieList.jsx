import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const nav = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("jwt");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const textRef = useRef(null);
  const domain = window.location.origin;

  const copyToClipboard = () => {
    const text = textRef.current;
    text.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError(new Error("No token found"));
        setLoading(false);
        return;
      }
      try {
        // Include the token in the headers
        const response = await axios.get(
          `${API_BASE_URL}/api/Account/getUserInfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Set the Authorization header
            },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      try {
        const responseMovie = await axios.get(
          "http://localhost:5119/api/Movie",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Set the Authorization header
            },
          }
        );
        setMovies(responseMovie.data);
        console.log(responseMovie.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  async function deleteMovie(id) {
    console.log("Im here");
    console.log(id);

    const response = await axios.delete(`${API_BASE_URL}/api/Movie?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Set the Authorization header
      },
    });

    console.log(response.data);
    window.location.reload();
  }
  if (loading) return <p>Loading...</p>;

  if (error) {
    nav("/error");
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-16">
        <div className="flex flex-col items-center gap-4">
          {data && (
            <div key={data.username}>
              <div className="text-center">
                <h1 className="text-xl font-bold">{data.username}</h1>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">
                  {data.firsName} {data.lastName}
                </h1>
                <p className="text-sm text-gray-500">{data.description}</p>
                <a
                  href="/addmovie"
                  className="inline-flex h-10 mt-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Add Movie
                </a>
              </div>
              <div>
                <input
                  className="mt-10 h-18"
                  type="text"
                  value={`${domain}/user/${data.username}`}
                  ref={textRef}
                  readOnly
                  size={25}
                />
                <button
                  onClick={copyToClipboard}
                  className="inline-flex h-10 mt-2 items-center justify-center rounded-md bg-[#42ae33] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4dff50] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Copy Link and Share
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">My Favorite top 10 Movies</h2>
          <div className="grid gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-[100px_1fr] gap-4 p-4">
                  <img
                    src={movie.movieImage}
                    width={100}
                    height={150}
                    alt={movie.movieImage}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div className="grid gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{movie.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {movie.releaseDate}
                      </span>
                      <div className="w-px h-4 bg-gray-400"></div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">
                          {movie.movieRating}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-2">
                      {movie.movieDescription}
                    </p>
                    <button
                      className="inline-flex h-10 mt-10 items-center justify-center rounded-md bg-[#3a71d0] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#4d85ff] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      onClick={() => deleteMovie(movie.id)}
                    >
                      Delete Movie from your list.
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
