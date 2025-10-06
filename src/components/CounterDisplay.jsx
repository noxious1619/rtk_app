import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div
      style={{
        display: "flex",               
        alignItems: "center",         
        flexDirection: "column",
        }}
    >
        <h1>Shared state</h1>
        <h1>Count: {count}</h1>
        
    </div>
  )
}
 
export default CounterDisplay;