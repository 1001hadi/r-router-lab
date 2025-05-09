import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  // const [] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
