
import {useState,useEffect} from 'react'
function UseCustomhook(url) {
   
    const [data, setData]= useState([]);

    useEffect(()=>{
       async function getdata(){
        const call=await fetch(url);
        const res=await call.json();
        setData(res);
       }
       getdata();
    },[])
  return [data];
}

export default UseCustomhook
