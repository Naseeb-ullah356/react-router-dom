// import './App.css';
// // import img from "./images/portfolio.png"
// import React from 'react';
// function App() {
//   return (
//    <>
//  {/* {   
// <h1>hello world my name is :{props.name}</h1> }

//  <img src="./images/portfolio.png" alt="img" style={{width:"50%",height:"50%"}} />

 
// <img src={require("./images/portfolio.png")} alt="img" style={{width:"50%",height:"50%"}} />  */}
// </>
// );
//  }

// export default App;
// import CA from './CA';
// import React from 'react';
 
// const App = () => {
//    const name = "naseeb khan "
//   return (
//     <div>
//       <h1>Props drilling</h1>
//       <CA name={name}/>
//     </div>
//   );
// }

// export default App;
//  import React from 'react';
//  import CA from './CA';
//  const App = () => {
//   const name =  "naseeb ullah";
//    return (
//      <div>
//        <h1>prps drilling</h1>
//        <CA name={name}/>
//      </div>
//    );
//  }
 
//  export default App;
//  context Api
//  createcontext, provider consumer
// import React, { createContext } from 'react';
// import CA from './CA';
//  const fname = createContext();
//  const lname = createContext();
// const App = () => {
//   return (
//     <div>
// <lname.Provider value={"ullah"}>

   
//    <fname.Provider value={"naseeb"}>
//            <CA/>
//        </fname.Provider>
// </lname.Provider>
      
     
//     </div>
//   );
// }  
//  export {fname,lname};
// export default App;
//  import React, {useMemo, useState } from 'react';
 
//  const App = () => {
//    const [add,setAdd]=useState(0);
//    const [state,setState]=useState(false);

//    const addition = ()=>{
//   setAdd(add+1);
//    }
//     function count (add){
//       console.log("function calling ",add)
//      for (let i=0;i<=10000000;i++){};
//      return add;

//     }
//    let number = useMemo(()=>{
//         return count (add);
//     },[add])
   

//    return (
//      <div>
//        <h1> USE MEMO HOOK </h1>
            
//         <button onClick={addition}>Addition</button>
//         <h1>{number}</h1>
//         <button onClick={()=> setState(!state)}>please click</button>
//         <h1>{state? "you clicked": "please clicked"}</h1>
//      </div>
//    );
//  }
 
//  export default App;
//   import {memo} from 'react';
  
//   const App = ({todos, data}) => {
//     console.log("todo function")
//     return (
//       <div>
//         <h1>use call back hook</h1>
// {
//   data.map((curVal, index)=>{
//     return <h1 key={index}>{curVal+index}</h1>
//   })}

//  <button onClick={todos}>Add todo</button>

//   </div>
//     );
//   }
  
//   export default memo(App);
  
 //use memo hook in react js
// import React, { useMemo, useState } from 'react';
// const App = () => {
//   const [add, setAdd]=useState(0)
//   const [state, setState]=useState(false)
//   const addition =()=>{
//  setAdd(add+1)
//   }
//    function count(add){
//     console.log("function calling",add)
//     for (let i=0;i<=100000000;i++){}
//      return add 
//    }
//  const num =  useMemo(()=>{
//      return  count(add)
//    },[add])
   
//   return (
//     <div>
//    <button onClick={addition}>addition</button>
//    <h1>{num}</h1>
//     <button onClick={()=>setState(!state)}>pleaseclick</button>
//     <h1>{state?"you click":"please click"}</h1>
//     </div>
//   );
// }

// export default App;


//  import React, { useMemo, useState } from 'react';
 
//  const App = () => {
//   const [add, setAdd]=useState(0);
//   const [state,setState]=useState(false)
//   const addition =()=>{
//     setAdd(add+1)
//  }
//  function count(add){
//   console.log("function is running",add)
//   for (let i =0; i<=1000000000 ; i++)
//   return add
//  } 
//   let num = useMemo(()=>{
//   return count (add)
//  },[add])
 

//    return (
//      <div>
//        <button onClick={addition}>addition</button>
//          <h1>{num}</h1>
     
//         <button onClick={()=>setState(!state)}>pleaseclick</button>
//        <h1>{state? "you clicked":"please clicke"}</h1> 
     
//      </div>
//    );
//  }
 
//  export default App;
//    how to use material ui in  react js 
import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Contact from './Contact';
import About from './About';
import Error from './Eror'
import  YouTube  from './Youtube';
import Github from './Github';
import X from './X'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      
        <Route path="/"element={<Home/>} />
        <Route path="/login"element={<Login/>} />
        {/* nested routing */}
       <Route path='/contact/'element={<Contact/>}>
       <Route path='youtube' element={<YouTube/>}/>
           <Route path='x' element={<X/>}/>
           <Route path='github' element={<Github/>}/>

       </Route>
        <Route path="/about" element={<About/>} />
        {/* multiply sign mean when the user found page but the page is not available */}
        <Route path='*' element={<Error/>} />
        
        

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

//  <Route path="/contact/" element={<Contact/>}/>
//          <Route path='youtube' element={<YouTube/>}/>
//           <Route path='x' element={<X/>}/>
//             <Route path='github' element={<Github/>}/>
// <Route/>