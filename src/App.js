import Header from './Components/Utils/Header';
import './index.css';
import Crousels from './Components/Utils/Crousels';
import { SliderData } from './Components/Utils/SliderData';
function App() {
  return (
    <div className="App">
      <Header />
      <Crousels slides={SliderData} />
    </div>
  );
}

export default App;
