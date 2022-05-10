import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  />
        {/*Rutas Privadas*/}
        <Route>
          <Route path='/' />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' />
          <Route path='/cart' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
