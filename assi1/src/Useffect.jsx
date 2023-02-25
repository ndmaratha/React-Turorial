import React,{useState,useEffect} from 'react'

function Useffect() {
 const [item,setItem]= useState(2);
 const [data, setData]= useState([]);

 useEffect(()=>{
    async function getdata(){
      const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${item}&idStarts=1001`);
    
      const res= await get.json();
      setData(res);
    }
    getdata();
    
    document.title=`(${item} Employee online)`;
      },[item]);

  return (
    <div>
       <button onClick={()=>setItem(item+2)}>Add{item}</button>
       {
      data.map((event,index) =>{
        return( 
          <div className="one" key={index}>
            <li>{event.id}</li>
            <li>{event.firstName}</li>
            <li>{event.lastName}</li>
            <li>{event.email}</li>
          </div>
        )
      })
    }
    </div>
  )
}

export default Useffect
