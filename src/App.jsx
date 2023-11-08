// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LAG from "./pages/LAG";
function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path="/home"></Route>
      <Route element={<Login></Login>} path="/login"></Route>
      <Route element={<LAG></LAG>} path="/lag"></Route>
      <Route element={<>PAGE NOT FOUND! ERROR 404</>} path="/*"></Route>
    </Routes>
  );
}

export default App;
