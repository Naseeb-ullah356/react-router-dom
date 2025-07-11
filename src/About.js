import React from 'react';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <div>
        <nav>
    <ul>
      <li>
   <NavLink to="/">home</NavLink>
     <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/login">Login</NavLink>
         <NavLink to="/about">About</NavLink>
      </li>
    </ul>
   </nav>
      <h1>this is ABout page</h1>
    </div>
  );
}

export default About;
