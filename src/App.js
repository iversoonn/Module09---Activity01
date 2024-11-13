import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LogAdmin from "./Dashboard/LogAdmin";
import AuthError from "./Dashboard/AuthError";
import MyHome from "./components/MyHome";
import MyProfile from "./components/MyProfile";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";
import MyMainForms from "./MyMainForms/MyMainForm";

function App() {
  return (
 
      // <Router>
      //   <div className="App">
      //   <Routes>
      //     <Route path="/" element={<LogAdmin />} />

      //     <Route path="/auth-error" element={<AuthError />} />

      //   </Routes>
      //   </div>
      // </Router>
      <Router>
        <Nav/>
        <div className="container">
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/mymainforms/*" element={<MyMainForms />} />
            <Route path="*" element={<h2>404 Not Found</h2>}/>
          </Routes>
        </div>
      </Router>
 
  );
}

export default App;
