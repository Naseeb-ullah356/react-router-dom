// import React from "react";
// // import "./index.css";
// const Home =(props)=>{
//   console.log(props)
//     return(
//         <>
//     <h1>about my name is {props.name} </h1>  

//         </>
//     )
// }
// export default Home;
// import React from 'react';
// import "./index.css"
// import {Link} from "react-router-dom";
// const Home = () => {
//   return (
//     <div>
//     <nav>
//         <ul>
        
          // <li><Link to="/">Home</Link></li>
          // <li><Link to="/contact">Contact</Link></li>
          // <li><Link to="/login">Login</Link></li>
          // <li><Link to="/app">App</Link></li>

//         </ul>
//         </nav>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { NavLink} from 'react-router-dom';
import './index.css'

const Home = () => {
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
   <h1>this is home page1</h1>
    </div>
  );
}

export default Home;
