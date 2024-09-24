import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function UserPage() {
  const { username } = useParams();
  const [fetchedData, setFetchedData] = useState(null);
  const [movies, setMovies] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    console.log(API_BASE_URL);
    console.log(username);
    axios
      .get(`${API_BASE_URL}/api/Account/find-friends?username=${username}`)
      .then((response) => {
        setFetchedData(response.data);
        setMovies(response.data.featureMovieDTOs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-16">
        <div className="flex flex-col items-center gap-4">
          {fetchedData && (
            <div key={fetchedData.username}>
              <div className="text-center">
                <h1 className="text-xl font-bold">{fetchedData.userName}</h1>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">
                  {fetchedData.firstName} {fetchedData.lastName}
                </h1>
                <p className="text-sm text-gray-500">
                  {fetchedData.describeYourSelf}
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5">
            {username}'s top 10 Favorite Movies
          </h2>
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

export default UserPage;
