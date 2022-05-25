import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';
import Home from './Pages/Home/Home';
import UserDashboard from './Pages/User/UserDashboard/UserDashboard';
import PoliceDashboard from './Pages/Police/PoliceDashboard/PoliceDashboard';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Profile2 from './Pages/Police/Profile/Profile';
import Profile1 from './Pages/User/Profile/Profile';
import Register2 from './Pages/Police/Register/Register';
import PoliceRegisteredDetails from './Pages/Police/PoliceRegisteredDetails/PoliceRegisteredDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Thana from './Pages/User/Thana/Thana';
import ThanaDetails from './Pages/User/Thana/ThanaDetails';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        {/* user */}
        <Route path='/userDashboard' element={
          <RequireAuth>
            <UserDashboard></UserDashboard>
          </RequireAuth>
        }></Route>

        <Route path='/userProfile' element={
          <RequireAuth>
            <Profile1></Profile1>
          </RequireAuth>
        }></Route>

        <Route path='/thana' element={
          <RequireAuth>
            <Thana></Thana>
          </RequireAuth>
        }></Route>

        <Route path='/thanaDetails/:thana_id' element={
          <RequireAuth>
            <ThanaDetails></ThanaDetails>
          </RequireAuth>
        }></Route>




        {/* police */}
        <Route path='/policeDashboard' element={
          <RequireAuth>
            <PoliceDashboard></PoliceDashboard>
          </RequireAuth>
        }></Route>

        <Route path='/policeProfile' element={
          <RequireAuth>
            <Profile2></Profile2>
          </RequireAuth>
        }></Route>

        <Route path='/policeRegister' element={
          <RequireAuth>
            <Register2></Register2>
          </RequireAuth>
        }></Route>
        <Route path='/policeRegisterDetails' element={
          <RequireAuth>
            <PoliceRegisteredDetails></PoliceRegisteredDetails>
          </RequireAuth>
        }></Route>

        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
