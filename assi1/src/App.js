import './App.css';
import Name from "./Name";
import Usereducer from "./usereducer";
import Useffect from './Useffect';
import UseCustomhook from './useCustomhook';
export default function App() {
  const [data]=UseCustomhook("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
  return (
    <div>
    <Useffect></Useffect>
    <Name></Name>
   <Usereducer></Usereducer>
  {
    data.map((e,index)=>{
      return(
        <div>
          <li>{e.firstName}</li>
          <li>{e.lastName}</li>
          <li>{e.email}</li>
        </div>
      )
    })
  }
    </div>
  );
}
