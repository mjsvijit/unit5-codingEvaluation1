import "./App.css"
import { Vegitables } from './Components/Vegitables';
import { Wishlist } from './Components/Wishlist';

function App() {
  return (
    <div >
     <Wishlist />
    <div id="vr"></div>
      <Vegitables /> 
    </div>
  );
}

export default App;
