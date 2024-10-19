import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Team from "./components/Team";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Profiles from "./components/Profiles";
// import Home from "./components/Home";
// import NotFound from "./components/NotFound";
// import Team from "./components/Team";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar /> <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
          <Navbar />
          <Team />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profiles />
          <Footer/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
