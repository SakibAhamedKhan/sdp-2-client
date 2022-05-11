import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
