import AuthControl from "./components/AuthControl";
import CounterControl from "./components/counterControl";
import CounterDisplay from "./components/counterDisplay";
import UserComponent from "./components/userComponent";


const App = () => {
   

  return (
    <div
      style={{
        display: "flex",              
        alignItems: "center",         
        height: "100vh",
        width: "100vw",              
        flexDirection: "column",     
      }}
    >
      <h1>Welcome to react App</h1>
      
      <CounterDisplay /> 
      <CounterControl />
      <AuthControl />
      <UserComponent /> 

    </div>
  )
}
 

export default App;