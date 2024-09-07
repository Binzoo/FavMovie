function Footer() {
  return (
    <footer className="bg-[#1e1e1e] p-6 md:py-12 w-full text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">MyMovieWorld</h3>
          <p className="text-sm text-gray-400">
            Your one-stop platform for discovering, rating, and discussing
            movies.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Rate
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Discuss
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Join
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; 2024 MyMovieWorld. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
