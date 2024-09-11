import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
     <NavBar />
     <ItemListContainer title={'Una Frangancia Para Cada Día'} />
     <ItemDetailContainer />
     
    </div>
  );
}

export default App;


/**fetch ('https://rickandmortyapi.com/api') 
 * .then(res => res.json())
 *  .then(res => console.log(res))
*/