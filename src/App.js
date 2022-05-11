import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  />
        {/*Rutas Privadas*/}
        <Route element={<ProtectedPages />} >
          <Route path='/' />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
