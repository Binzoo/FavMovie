function Main() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 lg:py-32 bg-[#1e1e1e] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                  Discover, Rate, and Discuss Movies
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-lg lg:text-xl">
                  MyMovieWorld is the ultimate platform for movie enthusiasts to
                  explore, rate, and connect over their shared passion for
                  cinema.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Join Now
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-[#1e1e1e] px-8 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-[#2b2b2b] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Explore Movies
                </a>
              </div>
            </div>
            <img
              src="https://moviebox.link/assets/images/screenshot/01.jpg"
              width="200px"
              height="auto"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover, Rate, and Connect
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg lg:text-base xl:text-xl">
                MyMovieWorld is your one-stop destination for movie enthusiasts.
                Explore a vast library of films, rate your favorites, and
                connect with like-minded movie lovers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Discover</h3>
                    <p className="text-muted-foreground">
                      Explore our extensive collection of movies, from
                      blockbusters to hidden gems.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Rate</h3>
                    <p className="text-muted-foreground">
                      Share your thoughts and rate the movies you've watched to
                      help others discover their next favorite.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Connect</h3>
                    <p className="text-muted-foreground">
                      Join our vibrant community of movie enthusiasts and engage
                      in discussions, share recommendations, and connect over
                      your shared passion.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
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
            <MovieCard
              title="The Shawshank Redemption"
              genre="Drama"
              rating="9.2"
            />
            <MovieCard title="Inception" genre="Science Fiction" rating="8.8" />
            <MovieCard
              title="The Dark Knight"
              genre="Action, Crime"
              rating="9.0"
            />
            <MovieCard
              title="The Godfather"
              genre="Drama, Crime"
              rating="9.2"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg lg:text-base xl:text-xl">
              Hear from our satisfied users about their experience with
              MyMovieWorld.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
            <Testimonial
              quote="MyMovieWorld has completely transformed the way I discover and engage with movies. The community is amazing, and I've found so many hidden gems thanks to the recommendations."
              name="John Doe"
              role="Movie Enthusiast"
            />
            <Testimonial
              quote="As a movie buff, I've tried countless platforms, but MyMovieWorld stands out with its intuitive interface, comprehensive movie library, and the ability to connect with like-minded individuals."
              name="Jane Appleseed"
              role="Movie Critic"
            />
            <Testimonial
              quote="MyMovieWorld has become an indispensable part of my movie-watching experience. The ability to rate and discuss films with others has enriched my understanding and appreciation of cinema."
              name="Sarah Mayer"
              role="Movie Buff"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function MovieCard({ title, genre, rating }) {
  return (
    <div className="border-0 shadow-none">
      <div className="p-0">
        <img
          src="/placeholder.svg"
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
          <Avatar name={name} />
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ name }) {
  return (
    <div className="w-12 h-12">
      <img src="/placeholder-user.jpg" alt={name} className="rounded-full" />
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
