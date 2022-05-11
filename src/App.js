import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';
import Home from './Pages/Home/Home';
import UserDashboard from './Pages/User/UserDashboard/UserDashboard';
import PoliceDashboard from './Pages/Police/PoliceDashboard/PoliceDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        {/* user */}
        <Route path='/userDashboard' element={<UserDashboard></UserDashboard>}></Route>



        {/* police */}
        <Route path='/policeDashboard' element={<PoliceDashboard></PoliceDashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
