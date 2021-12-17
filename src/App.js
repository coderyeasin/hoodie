import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './pages/Home/AdminRoute/AdminRoute';
import AddHoodie from './pages/Dashboard/Admin/AddHoodie';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import MyOrder from './pages/Dashboard/User/MyOrder';
import Explore from './pages/Home/Explore/Explore';
import View from './pages/Home/Hoodies/View';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin';
import ManageAllHoodies from './pages/Dashboard/Admin/ManageAllHoodies';
import ManageAllOrder from './pages/Dashboard/Admin/ManageAllOrder';
import Feedback from 'react-bootstrap/esm/Feedback';
import PayOrder from './pages/Dashboard/User/PayOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/home" element={<Home></Home>}></Route>

          
            <Route path="/explore" element={<Explore></Explore>}></Route>

            <Route path="/details/:id" element={<PrivateRoute><View></View></PrivateRoute>}></Route>

            {/* nested routing */}

            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }>
          
              {/* user */}
              <Route path="/dashboard/myorder" element={
                <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
              }></Route>
              <Route path="/dashboard/feedback" element={
                <PrivateRoute> <Feedback></Feedback> </PrivateRoute>
              }></Route>
              <Route path="/dashboard/payment" element={
                <PrivateRoute> <PayOrder></PayOrder> </PrivateRoute>
              }></Route>


              
              {/* admin */}
            <Route path="/dashboard/addhoodie" element={<AdminRoute>
              <AddHoodie></AddHoodie>
            </AdminRoute>}></Route>

            <Route path="/dashboard/makeAdmin" element={<AdminRoute> <MakeAdmin></MakeAdmin>
            </AdminRoute>}></Route>

            <Route path="/dashboard/allHoodies" element={<AdminRoute> <ManageAllHoodies></ManageAllHoodies>
            </AdminRoute>}></Route>

            <Route path="/dashboard/allOrders" element={<AdminRoute> <ManageAllOrder></ManageAllOrder>
            </AdminRoute>}></Route>


            </Route>



 
             {/* <Route path="/register" element={<Register></Register>}></Route> */}
            <Route path="/login" element={<Login></Login>}></Route> 
           
        </Routes>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
