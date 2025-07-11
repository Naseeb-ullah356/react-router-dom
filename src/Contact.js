// import React from 'react';
// import { NavLink } from 'react-router-dom';
// const Contact = () => {
//   return (
//     <div>
//          <nav>
//           <ul>
//             <li>
//          <NavLink to="/">home</NavLink>
//            <NavLink to="/contact">Contact</NavLink>
//              <NavLink to="/login">Login</NavLink>
//                <NavLink to="/about">About</NavLink>
//             </li>
//           </ul>
//          </nav>
//       <h1>this this contactpage</h1>
//     </div>
//   );
// }

// export default Contact;
import React from 'react';
import "./index.css"
import { NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <h1>this is contact page!!!</h1>
      <div className='nested'>
        <NavLink to={"youtube"}>Youtube</NavLink>
         <NavLink to={"x"}>X</NavLink>
          <NavLink to={"github"}>Github</NavLink>

      </div>
      <Outlet />

    </>
  );
}

export default Contact;
