import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Player from "./containers/Player";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
  );
}
export default App;
