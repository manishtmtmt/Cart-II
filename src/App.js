import './App.css';
import Products from './pages/Products';
import { Routes, Route } from "react-router-dom"
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='products/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
