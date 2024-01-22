import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Items from './components/Items';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Categories/>
      <Items/>
    </div>
  );
}

export default App;
