import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Description, setDescription] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const RegisterSubmit = (event) => {
    event.preventDefault();
    const postData = {
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: Email,
      describeYourSelf: Description,
      password: Password,
      confirmPassword: ConfirmPassword,
    };

    axios
      .post(`${API_BASE_URL}/api/Account/register`, postData)
      .then((response) => {
        toast.success("Registration successful!");
        setTimeout(() => nav("/login"), 2000);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
        setError("An error occurred while posting data");
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="#"
              className="font-medium text-primary hover:text-primary/90"
              prefetch={false}
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={RegisterSubmit} method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="John"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Last Name"
              className="block text-sm font-medium text-foreground"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="last"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="User Name"
              className="block text-sm font-medium text-foreground"
            >
              User Name
            </label>
            <div className="mt-1">
              <input
                id="last"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Description of yourself
            </label>
            <div className="mt-1">
              <textarea
                id="describe"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-foreground"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="text-sm mt-4">
              <Link
                to={"/login"}
                className="font-medium text-primary hover:text-primary/90"
                prefetch={false}
              >
                Already have an account?
                <span> </span>
                <a className="text-[#ff6b6b]" href="/login">
                  Log In
                </a>
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#ff6b6b] px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Register;
