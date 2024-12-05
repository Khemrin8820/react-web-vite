import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductPage from './pages/product/ProductPage';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<ProductPage />} />
        <Route path="/register" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
