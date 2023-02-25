import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc,Dec } from './States/Reducers/Index';

function App() {
  const curState=useSelector((state)=>state.number)
  const dispach=useDispatch();
  return (
    <div >
      <h1 className='App-header'>React Redux</h1>
      <div className='one'>
        <h1>{curState}</h1>
        <div>
        <button onClick={()=>dispach(Inc(10))}>Inc</button>

        <button onClick={()=>dispach(Dec(5))}>Dec</button>
       </div>
      </div>
    </div>
  );
}

export default App;
