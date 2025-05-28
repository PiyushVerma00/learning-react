import React from "react";
import {Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white fixed p-4 w-full shadow">
      <nav className="flex gap-6  items-center justify-between px-8">
        <div >
          <Link to='/'>
             <img
              src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="mr-3 h-12 rounded-4xl object-cover shadow  shadow-gray-400 "
              alt="Logo"/>     
                   
          
          </Link>
        </div>
        <div className="space-x-16">
        <NavLink
          to="/"
          className={({ isActive }) => 
            ` hover:text-gray-400  ${isActive ? "text-gray-400" : "text-white"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive ? "text-gray-400" : "text-white"}`
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            `  hover:text-gray-400 ${isActive ? "text-gray-400" : "text-white"}`
          }
        >
          Add Job
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` hover:text-gray-400 ${isActive ? "text-gray-400" : "text-white"}`
          }
        >
          About
        </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
