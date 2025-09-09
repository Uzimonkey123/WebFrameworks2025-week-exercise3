import "./App.css";
import CostCaculator from "./CostCalculator";

function App(props: {priceOfSingleVMPerHour: number}) {
  return (
    <>
      <CostCaculator priceOfSingleVMPerHour={props.priceOfSingleVMPerHour}/>
    </>
  )
}

export default App;
