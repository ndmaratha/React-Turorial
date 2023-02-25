import React,{useReducer} from 'react'

const reducer=(state,action)=>{
switch(action.o){
    case 1:
        return state+1;
    case 2:
        return state-1;
    case 3:
        return state*2;
     default:
        return state;
}
}
function Usereducer() {
    const [state,dispach]=useReducer(reducer,0)
  return (
    <div>
     <h1>{state}</h1>
      <button onClick={()=>dispach({o:1})}>Increment</button>
      <button onClick={()=>dispach({o:2})}>Decrement</button>
      <button onClick={()=>dispach({o:3})}>Multiply</button>
    </div>
  )
}

export default Usereducer
