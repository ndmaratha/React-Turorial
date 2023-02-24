import { useState } from "react";
function App() {
  const [state,setState]=useState(0);
  const handleclick=()=>{
    setState(state+1);

  }
  return (
    <div>
     <button onClick={handleclick}>clicked me {state}</button>
     <button onClick={handleclick}>clicked me {state}</button>
    </div>
  );
}

export default App;
