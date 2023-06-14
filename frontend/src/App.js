import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'

// Assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap-theme.css'

//Website
import Header from "./components/Header"
import Home from "./components/Home"
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import CategoryProducts from "./components/CategoryProducts";
// import TagProducts from "./components/TagProducts";
import AllProducts from "./components/AllProducts";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";

// Customer penal
import Register from "./components/Customer/Register";
import Login from "./components/Customer/login";
import CustomerLogout from "./components/Customer/logout";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Wishlist from "./components/Customer/Wishlist";
import PrfileUpdate from "./components/Customer/ProfileUpdate";
import ChangePassword from "./components/Customer/ChangePassword";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";
import SellerChangePassword from "./components/Seller/SellerChangePassword";
import SellerProfileUpdate from "./components/Seller/SellerProfileUpdate";


//Seller penal
import SellerRegister from "./components/Seller/SellerRegister";
import SellerLogin from "./components/Seller/Sellerlogin";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerProducts from "./components/Seller/SellerProducts";
import SellerAddProducts from "./components/Seller/SellerAddProducts";
import SellerOrders from "./components/Seller/SellerOrders";
import Customers from "./components/Seller/Customers";
import Reports from "./components/Seller/Reports";
import TagProducts from "./components/TagProducts";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/customer/register' element={<Register/>} />
      <Route path='/customer/dashboard' element={<Dashboard/>} />
      <Route path='/customer/orders' element={<Orders/>} />
      <Route path='/customer/wishlist' element={<Wishlist/>} />
      <Route path='/customer/login' element={<Login/>} />
      <Route path='/customer/logout' element={<CustomerLogout/>} />
      <Route path='/customer/updateprofile' element={<PrfileUpdate/>} />
      <Route path='/customer/changepassword' element={<ChangePassword/>} />
      <Route path='/customer/addresses' element={<AddressList/>} />
      <Route path='/customer/add_address' element={<AddAddress/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/order/success' element={<OrderSuccess/>} />
      <Route path='/order/failure' element={<OrderFailure/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
      <Route path='/products/:tag/' element={<TagProducts/>}/>
      <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
    {/*  seller penal*/}
      <Route path='/seller/register' element={<SellerRegister/>} />
      <Route path='/seller/login' element={<SellerLogin/>} />
      <Route path='/seller/dashboard' element={<SellerDashboard/>}/>
      <Route path='/seller/products' element={<SellerProducts/>}/>
      <Route path='/seller/add-product' element={<SellerAddProducts/>}/>
      <Route path='/seller/orders' element={<SellerOrders/>}/>
      <Route path='/seller/customer' element={<Customers/>}/>
      <Route path='/seller/reports' element={<Reports/>}/>
      <Route path='/seller/change-password' element={<SellerChangePassword/>}/>
      <Route path='/seller/update-profile' element={<SellerProfileUpdate/>}/>


    </Routes>
    <Footer/>

  </>
  );
}

export default App;
