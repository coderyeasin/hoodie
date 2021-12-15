import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
 
             {/* <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>  */}
           
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
