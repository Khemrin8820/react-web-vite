import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductPage from './pages/product/ProductPage';
import HomePage from './pages/home/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
