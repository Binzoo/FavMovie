import axios from "axios";
import { useEffect, useState } from "react";

function Main() {
  const token = localStorage.getItem("jwt");
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Include the token in the headers
        const response = await axios.get(
          `${API_BASE_URL}/api/Movie/featured-movies`
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 lg:py-32 bg-[#1e1e1e] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                  Add and Share
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-lg lg:text-xl">
                  Add your top 10 movies and share with friends.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                {token ? (
                  <a
                    href="/addmovie"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Add Movie
                  </a>
                ) : (
                  <a
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Join Now
                  </a>
                )}

                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-[#1e1e1e] px-8 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-[#2b2b2b] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Explore Movies
                </a>
              </div>
            </div>
            <img
              src="src/assets/011.png"
              width="200px"
              height="auto"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Movies
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg lg:text-base xl:text-xl">
              Discover our curated selection of the latest and greatest movies
              on MyMovieWorld.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
            {data.map((e) => (
              <MovieCard
                key={e.title}
                title={e.title}
                genre={e.releaseDate}
                rating={e.rating}
                image={e.movieImage}
              />
            ))}
            ;
          </div>
        </div>
      </section>
    </main>
  );
}

function MovieCard({ title, genre, rating, image }) {
  return (
    <div className="border-0 shadow-none">
      <div className="p-0">
        <img
          src={image}
          width={300}
          height={450}
          alt="Movie Poster"
          className="object-cover aspect-[2/3] rounded-t-lg"
        />
      </div>
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{genre}</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <StarIcon className="h-5 w-5" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <div className="border-0 shadow-none">
      <div className="p-6 bg-[#f5f5f5] rounded-lg">
        <blockquote className="text-lg font-semibold leading-snug">
          {quote}
        </blockquote>
        <div className="flex items-center gap-4 mt-4">
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
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

export default Main;
