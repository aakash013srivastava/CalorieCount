import Food from './components/food'
import {nutritionFacts} from './nutritionFacts'
function App() {
  return (
    <div className="App">
      <Food nutritionFacts={nutritionFacts}/>
    </div>
  );
}

export default App;
