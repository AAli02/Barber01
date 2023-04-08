import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing, Info, Cards } from "./Components";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Landing />
        <Info />
        <Cards />
      </Router> 
    </div>
  );
}

export default App;
