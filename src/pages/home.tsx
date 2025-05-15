import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { movies } from "../posts.data";
import { Link } from "react-router-dom";
import { useState } from "react";

export type MovieItem = {
  id?: number;
  title?: string;
  description?: string;
  rating?: number;
  image?: string;
};

const Home = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const Login = () => {
    const response = fetch("", {
      method: "",
      body: JSON.stringify({ email, password }),
    });
  };
  return (
    <>
      <Navbar />
      {/* <h1 className="text-4xl font-bold text-red-800 ">
        View my blog posts below
      </h1> */}

      <div
        className="mt-10"
        style={{ backgroundColor: theme === "light" ? "white" : "black" }}
      >
        <span
          className="bg-red-800 p-3 text-white cursor-pointer"
          onClick={() => handleDecrement()}
        >
          -
        </span>
        <span
          className="p-3 font-bold text-2xl"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {count}
        </span>
        <span
          className="bg-blue-800 p-3 text-white cursor-pointer"
          onClick={() => handleIncrement()}
        >
          +
        </span>
        <h1
          className="my-10 text-secondary font-poppins
          "
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          You have selected {count} items to add to cart
        </h1>
      </div>

      <button
        onClick={() => handleThemeChange()}
        className="bg-black text-white px-8 py-2 rounded-2xl"
      >
        {theme === "light" ? "sun" : "moon"}
      </button>

      {/* login to your account */}

      <form action="" className="border w-[50%] m-auto p-5 my-96 shadow-lg">
        <h1 className="font-bold text-3xl text-center my-4">Welcome Back!</h1>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="py-2 border border-blue-800 mb-4 w-full pl-2 rounded-lg"
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          className="py-2 border border-blue-800 mb-4 w-full pl-2 rounded-lg"
        />

        <h1>this is the {email}</h1>
        <h1>this is my {password}</h1>
        <button className="py-2 px-6 text-center bg-green-800 text-white w-full rounded-lg shadow-lg">
          Login
        </button>
      </form>
      {/* <div className="grid grid-cols-4 gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="hover:translate-y-1 ease-in-out transition-all"
            style={{ border: "1px solid black", padding: 5 }}
          >
            <img
              src={movie.image}
              alt="picture"
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <h1 className="text-gray-600 font-black" style={{ fontSize: 15 }}>
              {movie.title}
            </h1>
            <p>{movie.description}</p>
            <Link to={`/details/${movie.id}`}>View More</Link>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Home;
