import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import PopularItems from './components/PopularItems';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Categories/>
      <PopularItems />
    </div>
  );
}

export default App;
