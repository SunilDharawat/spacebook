import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return (
    <div>
        <Routes>
        <Route path="" element={<Home/>} />
        </Routes>
   </div>
  );
}

export default App;
