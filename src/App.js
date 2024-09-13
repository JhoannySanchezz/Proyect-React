import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="#" element={<h1>404 not found</h1>}/>
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;


/**fetch ('https://rickandmortyapi.com/api') 
 * .then(res => res.json())
 *  .then(res => console.log(res))
*/