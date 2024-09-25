import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LogAdmin from "./Dashboard/LogAdmin";
import AuthError from "./Dashboard/AuthError";

function App() {
  return (
 
      <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<LogAdmin />} />

          <Route path="/auth-error" element={<AuthError />} />

        </Routes>
        </div>
      </Router>
 
  );
}

export default App;
