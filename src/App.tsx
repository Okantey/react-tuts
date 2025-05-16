import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Details from "./pages/details";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    // theme provider wraps around all the routes we want to use the global state in
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

// https://www.youtube.com/watch?v=njE2VwTIxLQ&ab_channel=TheSunSport
