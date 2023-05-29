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

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
    </Routes>
    <Footer/>

  </>
  );
}

export default App;
