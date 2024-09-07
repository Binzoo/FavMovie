import { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace 'your_api_key' with your actual TMDb API key
    const apiKey = "aa450ce071d85e19a759e05945e3b681";
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 10)); // Get only the first 10 movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden">
            <img
              src="/placeholder-user.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">Software Engineer</p>
            <p className="text-sm text-gray-500">
              I love watching movies and discovering new stories.
            </p>
            <a
              href="#"
              className="inline-flex h-10 mt-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Add Movie
            </a>
          </div>
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
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    width={100}
                    height={150}
                    alt={movie.title}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div className="grid gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{movie.title}</h3>
                      <p className="text-sm text-gray-500">
                        {movie.genre_ids.join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {movie.release_date.split("-")[0]}
                      </span>
                      <div className="w-px h-4 bg-gray-400"></div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">
                          {movie.vote_average}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {movie.overview}
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
