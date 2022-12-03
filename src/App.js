import './App.css';
import { Grocerylist } from './Grocerylist';
import image from './ONE.jpg'
import imageTwo from './TWO.jpg'

function App() {
  return (
    <div className='app'>
      <img src={image} alt='shopping' width='300px'/>
      <h1>Список покупок</h1>
      <Grocerylist/>
      <img src={imageTwo} alt='shoppingTwo' width='300px'/>
    </div>
  );
}

export default App;
