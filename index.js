import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Routes,
  Link,
  Outlet,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Pdetails from "./Components/Pdetails";

const routing = (
  <Router>
    <div className="container-fluid p-1 pt-0.8 bg-dark text-white text-center">
      <p>
        HELLO! WE LOVE HAVING YOU HERE! &nbsp;
        <a style={{ color: "lightgreen" }} href="/Register">
          <u>JOIN US</u>
        </a>
      </p>
    </div>
    <div className="nav">
      
      <a href="/Home"><img
          className="logo"
          src="https://www.finsmes.com/wp-content/uploads/2015/07/zesty-logo-inline-c.png"
        /></a>
        
        &emsp;
      

      <div className="navb">
        {" "}
        <Link className="link1" to="/Aboutus">
          ABOUT US
        </Link>
        |{" "}
        <Link className="link1" to="/Register">
          REGISTER
        </Link>{" "}
        |
        <Link className="link1" to="/Login">
          LOGIN
        </Link>{" "}
        |
        <Link className="link1" to="/Contact">
          CONTACT
        </Link> 
        
        &emsp;&emsp;&nbsp;&nbsp;
      </div>
    </div>

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Pdetails" element={<Pdetails/>}/>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(routing);
