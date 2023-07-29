import React from "react";

import Signup from "./componets/signup/Signup";
import { Route, Routes, } from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return (
    <div>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
        </Routes>
   </div>
  );
}

export default App;
