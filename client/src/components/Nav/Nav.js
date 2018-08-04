import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => (
  <ul className="nav nav-tabs">
       <li className="nav-item">
         <Link 
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home 
        </Link>
       </li>
       <li className="nav-item">
         <Link
          to="/SearchHorses"
          className={
            window.location.pathname === "/SearchHorses" ? "nav-link active" : "nav-link"
          }
        >
          Search Horses
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/AddHorse"
          className={
            window.location.pathname === "/AddHorse" ? "nav-link active" : "nav-link"
          }
        >
          Add Horse 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/AllHorses"
          className={
            window.location.pathname === "/AllHorses" ? "nav-link active" : "nav-link"
          }
        >
          View All Horses
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Yearlings"
          className={
            window.location.pathname === "/Yearlings" ? "nav-link active" : "nav-link"
          }
        >
          Yearlings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Weanlings"
          className={
            window.location.pathname === "/Weanlings" ? "nav-link active" : "nav-link"
          }
        >
          Weanlings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={
            window.location.pathname === "/About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
    </ul>
  );


export default Navbar;
