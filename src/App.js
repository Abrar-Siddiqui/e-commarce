import './App.css';
import Navbar from './components/Navbar';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import NotFoundPage from './components/NotFoundPage';
import ProductDetails from './components/Pages/ProductDetails';
import Products from './components/Pages/Products';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="productDetails/:id" element={<ProductDetails />}/>
        <Route path='Cart' element={<Cart />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
