import React, { useState } from "react";
import "./App.css";




export default function App() {

  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);    
  const doubleNumber = React.useMemo(()=>{
   return slowFunction(number)
  },[number]) // useMemo check wheter the number is exactly the same
              // as last time so react didn't recall the function.

  const themeStyles =React.useMemo(()=>{
    return {
      backgroundColor:  dark ? "#000" : "#ffff",
      color: dark ? "#fff" : "#000",
  
    }

  },[dark]) 

  React.useEffect(()=>{
       console.log("Theme changed")

  },[themeStyles])



  return (
    <>
     <input  type="number" value={number}  onChange={(e)=> setNumber(parseInt(e.target.value))}    />
     <button  onClick={()=> setDark((prevDark)=> !prevDark )}   >Change Theme</button>
      <div style={themeStyles}  >{doubleNumber}</div>   
   
   
    </>
  );
}

function slowFunction(num) {
  console.log("Calling slow function") 
  for(let i= 0 ; i<= 1000000000 ; i++){}
  return  num *2 ;
}



