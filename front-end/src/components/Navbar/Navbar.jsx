import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("jwt");
  const nav = useNavigate();
  const handleLogout = () => {
    // Remove JWT from localStorage and redirect to login page
    localStorage.removeItem("jwt");
    nav("/login");
  };
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="/" className="flex items-center justify-center">
          <FilmIcon className="h-6 w-6" />
          <span className="text-2xl font-bold">MyMovieWorld</span>
        </a>
        <nav className="ml-auto flex gap-2 sm:gap-4 md:gap-6">
          <td>
            <a
              href="/findfriend"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Find Friends
            </a>
          </td>
          {token ? (
            <>
              <td>
                <a
                  href="/movielisting"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Your Movie Listing
                </a>
              </td>

              <td>
                <a
                  href="/addmovie"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Add Movie
                </a>
              </td>

              <td>
                <a
                  href="/login"
                  onClick={handleLogout}
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Logout
                </a>
              </td>
            </>
          ) : (
            <td>
              <a
                href="/login"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Join
              </a>
            </td>
          )}
        </nav>
      </header>
    </>
  );
}

function FilmIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

export default Navbar;
