import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../feature/counter/counterSlice";

const CounterControl = () => {
  const dispatch = useDispatch(); 

  return (
    <div>
      
        <button onClick={() => dispatch(increment())}>+</button> {" "}
        <button onClick={() => dispatch(decrement())}>-</button> {" "}
        <button onClick={() => dispatch(reset())}>reset</button>
      
    </div>
  )
}
 
export default CounterControl;