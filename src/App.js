
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Auth from './pages/Auth';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Auth' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
