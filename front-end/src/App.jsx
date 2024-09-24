import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import MovieListing from "./pages/MovieListing";
import RegisterPage from "./pages/RegisterPage";
import AddMoives from "./pages/AddMoives";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import FindFriends from "./pages/FindFriends";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/movielisting"
          element={
            <ProtectedRoute>
              <MovieListing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addmovie"
          element={
            <ProtectedRoute>
              <AddMoives />
            </ProtectedRoute>
          }
        />

        <Route path="/findfriend" element={<FindFriends />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
