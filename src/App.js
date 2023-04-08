import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing, Info } from "./Components";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Landing />
        <Info />
      </Router> 
    </div>
  );
}

export default App;
