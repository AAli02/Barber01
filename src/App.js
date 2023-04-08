import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Landing } from "./Components";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Landing />
      </Router> 
    </div>
  );
}

export default App;
