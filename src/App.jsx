import InsuranceApp from "./components/InsuranceApp";
import {QuoterProvider} from './context/QuoterProvider'


function App() {
  return (
    <QuoterProvider>
      <InsuranceApp/>
    </QuoterProvider>
  )
}

export default App
