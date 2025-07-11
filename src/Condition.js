// import React from "react";

// import { useState } from "react";



// // const Myfun=()=>{
// // let age = 18;
// //  if(age>=18){
// //         return(
// //        <h1>you can vote </h1>
// //        )
// //     }else{
// //         return(
// //             <h1>you can not vote</h1>
// //         )
// //     }

// // }
// const Condition =()=>{
//     let age = 20;
// // let result;
   
// //     if(age>18){
// //         result=<h1>you can vote</h1>
// //     }else{
// //         result=<h1>you can not vote</h1>
// //     }
//     return(
//         <>
//         {/* <Myfun/> */}
//         {/* <div>{result}</div> */}
//         <div>{age>18 ?<h1>Egligible for vote</h1>: <h1>Not Egligible for vote</h1> }</div>
//         </>
//     )

// };
// export default Condition;

// 
// import React,{ useState } from "react";

//  function Condition(){
//     const [count, setCount]= useState(0);
//     const incre =()=>{
//         setCount(count+1)
//     }
    
//  return(
//     <>
//     <div className="box"><h1>{count}</h1>
    
//     <button onClick={incre}>Increment</button>
//     </div>
//     </>
//  )
//  };
//  export default Condition;
//  import React, {useState} from "react";
//  function  Condition(){
//     const [count, setCount]=useState(0);
//     const incre = ()=>{
//         setCount(count+1)
//     }
//     return (
//     <>
//     <div><h1>{count}</h1>
//     <button onClick={incre}>Increment</button></div>
//     </>
//     );
//  } 
 
//  export default Condition;

// import { useState } from "react";
// function Condition(){
//     const [count, setCount]=useState(0);
//     const incre = ()=>{
//         setCount(count+1)
//     }
//     return(
//         <>
//         <div><h1>{count}</h1>
//         <button onClick={incre}>Increment</button></div></>
      
//     )
// }
// export default Condition; 
   
//  import { useState } from "react";
// import './index.css';

// const Clock =()=>{
//     const curTime = new Date().toLocaleTimeString();
//     const [time ,setTime] = useState(curTime);
//     const update =()=>{
        
//     const curTime = new Date().toLocaleTimeString();
//       setTime(curTime)
//     }
//     setInterval(()=>{
//     update();
//     },1000)
//     return(
//         <>
//         <div className="container">
//             <h1>Digital clock</h1>
//         <h1 className="text">{time}</h1>
//         </div>
//         </>
//     )
// };
// export default Clock;


// EVENTS IN REACTJS 
// import React, { useState } from 'react';
// import "./index.css"

// const Condition = () => {
//     const [bg,setBg]=useState("red")
//     const [text,setText]=useState("click here")
//     const changeColor =()=>{

//         setBg("green")
//         setText("changed!!")
//     }
//     const back =()=>{
//         setBg("red")
//     }
//   return (
//   <>
  
//   <div style={{backgroundColor:bg}} className='box'>
//     <button onClick={changeColor} onDoubleClick={back}>{text}</button>

//   </div>
  
//   </>
//   );
// }

// export default Condition;

// import React, { useState } from 'react';

// const Condition = () => {
//   const [fname,setFname]=useState("")
//   const[show , setShow] =useState("");
//   const [lname,setlname]=useState("")
//   const getName =(event)=>{
//     if(event.target.name == "firstname"){
//  setFname(event.target.value)
//     }
// //  console.log(event.target.value)

// if(event.target.name == "lastname"){
//   setlname(event.target.value)
// }

//   }

//   const submitBtn =(event)=>{
// event.preventDefault();
// setShow(fname+lname)
//   }
//   return (
//     <div>
//       <h1>{show}</h1>
//       <form onSubmit={submitBtn} >
//         <label> Enter your firstname</label>
// <input type="text"  name='firstname' onChange={getName} value={fname} />
//     <label> Enter your Lasttname</label>
// <input type="text"  name="lastname" onChange={getName} value={lname} />
// <button type='submit'>submit</button>
//       </form>
//     </div>
//   );
// }

// export default Condition;

// import React, { useState } from 'react';

// const Condition = () => {
//   const [value, setValue]=useState(0)
//   const incre =()=>{
//     setValue(value+1)
//   }
//   const decre=()=>{
//     if(value == 0){
//       alert("0 will not be decrement")
//     }else{
//       setValue(value-1)
//     }
   
//   }
//   return (
//     <>
    
    
//     <div>
//       <h1>{value}</h1>
//       <button onClick={incre}>Increment</button>
//       <button onClick={decre}>decrement</button> 
//     </div>
//     </>
//   );
// }

// export default Condition;

// USE EFFECT HOOKS 
//   import React, { useEffect, useState } from 'react';
//    import './index.css';

// const Condition = () => {
//   const [value, setValue]=useState(0)
//   const [data ,setData]=useState("code ")
//   const incre =()=>{
//     setValue(value+1)
//   }
//   const decre=()=>{
//     if(value == 0){
//       alert("0 will not be decrement")
//     }else{
//       setValue(value-1)
//     }
   
//   }
//   const change =()=>{
//     setData("with naseeb")
//   }
//   useEffect(()=>{
//     // console.log("running useeffect")
//     alert("running use effect")
//   },[data])
//   return (
//     <>
    
    
//     <div>
//         <h1>{data}</h1>
//       <h1>{value}</h1>
//       <button onClick={incre}>Increment</button>
//       <button onClick={decre}>decrement</button> 
//       <button onClick={change}> change</button>
//     </div>
//     </>
//   );
// }

// export default Condition;

// useref hooks
// import React, { useEffect, useRef, useState } from 'react';

// const Condition = () => {
//     const [val,setVal]=useState("")
     
// const refElem = useRef(); 
// console.log(refElem.current)


//     const change =(event)=>{
// setVal(event.target.value);
//     }
//     const submit =()=>{
//       // refElem.current.style.color="red"
//     }
//     // useEffect(()=>{
//     //     setNum(num+1)
//     // })
//   return (
//     <>
//      <div>
//         <h1>use ref hook </h1>
//         <input type="text" ref={refElem} value={val} onChange={change} />
//         <button onClick={submit}>submit</button>
//         <h1>Count :{refElem.current}</h1>
//      </div>
//     </>
//   );
// }

// export default Condition;
//  import React, { useEffect, useRef, useState } from 'react';
 
//  const Condition = () => {
//   const [val, setVal]=useState("");
//     const [num, setNum]=useState(0);
//   const change =(event)=>{
//     setVal(event.target.value)
//   }
//    const refElem = useRef("sufiyan")

//    console.log(refElem.current)
//   // useEffect(()=>{
//   //   setNum(num+1)
//   // })
//    return (
//     <>
    
// <h1>use ref hook</h1>
// <input type="text" value={val} onChange={change} />
// <h1>count:{num}</h1>
//     </>
//    );
//  }
 
//  export default Condition;
//  import React, { useState } from 'react';
 
//  const Condition = () => {
//  const [val,setVal]=useState("");

// const change =(event)=>{
//    setVal(event.target.value)
// }

//    return (


//      <div>
//        <h1>use Ref hook </h1>
//        <input type="text" value={val} onChange={change} />
//      </div>
//    );
//  }
 
//  export default Condition;


// import React, { useEffect, useRef, useState } from 'react';

// const Condition = () => {
//   const [val , setVal]=useState("");
//   const [num,setNum]=useState(0)
//   const refElem= useRef(0)
//   console.log(refElem.current)

//   const change =(event)=>{
//  setVal(event.target.value);

// // refElem.current= refElem.current+1;
//   }
//  const submit =()=>{
// //   refElem.current.style.color ="red";
// //    refElem.current.style.backgroundColor ="yellow";
//    setVal("");
//    refElem.current.focus()
//  }
//   // useEffect(()=>{
//   //   setNum(num+1)
//   // })
//   return (
//     <div>
//       <h1>useref hook</h1>
//       <input type="text" value={val}  ref={refElem} onChange={change} />
//       <button onClick={submit} >submit</button>
//       {/* <h1>count:{refElem.current}</h1> */}
//     </div>
//   );
// }

// export default Condition;

 