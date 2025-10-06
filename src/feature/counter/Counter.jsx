import { useDispatch, useSelector } from "react-redux"; 
import { decrement, increment } from "./counterSlice";


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>

    </div>
  )
}

export default Counter;
