import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
function FindFriend() {
  const [username, setUsername] = useState();
  const [fetchedData, setFetchedData] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const searchUsername = async () => {
    try {
      axios
        .get(`${API_BASE_URL}/api/Account/find-friends?username=${username}`)
        .then((res) => {
          setFetchedData(res.data);
        });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Find your friends top movies
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            placeholder="Enter Friend Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button
            onClick={searchUsername}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Search
          </button>
        </div>
        {fetchedData && (
          <div
            key={fetchedData.userName}
            className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6"
          >
            <h1 className="text-2xl font-bold mb-2">User Info</h1>
            <p className="text-gray-700">
              <strong>Username:</strong> {fetchedData.userName}
            </p>
            <p className="text-gray-700">
              <strong>First Name:</strong> {fetchedData.firstName}
            </p>
            <p className="text-gray-700">
              <strong>Last Name:</strong> {fetchedData.lastName}
            </p>
            <p className="text-gray-700">
              <strong>About:</strong> {fetchedData.describeYourSelf}
            </p>

            <div className="mt-4 flex justify-start">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                href={`user/${username}`}
              >
                Click to see user Fav Movie
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindFriend;
