import { useState,createContext,useRef,useEffect } from "react";
import Capi1 from "./Components/Capi1";
const newContext=createContext();
function App() {
  const input=useRef();
  const [state,setState]=useState("");

/* useEffect(()=>{
  ref.current=ref.current+1;
}) */  
  const handleclick=()=>{
    input.current.style.color="red";
  }
  const formhandler=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <newContext.Provider value={state}>
      <input type="text"  value={state} onChange={formhandler}/>
    <button ref={input} onClick={handleclick}>clicked me</button>
  {/*   <h1>rendered {ref.current}</h1> */}
    </newContext.Provider>

    </div>
  );
}

export default App;
export {newContext}