import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from './redux/slices/counter'
import './App.css'

function App() 
{
  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter)
  const [ incBy, setIncBy ] = useState(1);
  const incrementByNumber = (e) => setIncBy(e.target.value);

  return (
    <>
      <div className="card">
        <h1>COUNTER APP</h1>
        <p>count is {counter}</p>
        <button onClick={() => dispatch(increment())}>
         + Increment +
        </button>
        <button onClick={() => dispatch(decrement())}>
         - Decrement -
        </button>
        <button onClick={() => dispatch(incrementBy(incBy))}>
          Increment By:
        </button>
        <input type="number" name="incBy" id={incBy} value={incBy} onChange={incrementByNumber} />
      </div>
    </>
  )
}

export default App
