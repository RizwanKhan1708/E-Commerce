import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap-theme.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Customer/Register";
import Login from "./components/Customer/login";
import Dashboard from "./components/Customer/Dashboard";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/customer/register' element={<Register/>} />
      <Route path='/customer/dashboard' element={<Dashboard/>} />
      <Route path='/customer/login' element={<Login/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
      <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>

  </>
  );
}

export default App;
