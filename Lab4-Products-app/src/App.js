import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AboutUs from "./AboutUs";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App pt-3">
      {/* <input onChange={handleNameChange} />
      <AboutUs name={name} /> */}
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
