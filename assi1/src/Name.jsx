import React,{useState} from 'react'

function Name() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [data,setData]=useState([]);

    const handleckick=(e)=>{
        e.preventDefault()
        setData([...data,{name,email}]);
       
    }
  return (
    <div onSubmit={handleckick}>
      <form >
       Name <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
       email <input type="text" 
       value={email} 
       onChange={(e)=>setEmail(e.target.value)} />
       <button onClick={handleckick}>add</button>
      </form>
     {
        data.map((event,index)=>{
            return(
                <div key={index}>
                <li>{event.name}</li>
                <li>{event.email}</li>
                </div>
            )
        })
     }
    </div>
  )
}

export default Name
