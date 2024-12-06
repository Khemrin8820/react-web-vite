import './App.css';
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import ProductPage from './pages/product/ProductPage';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import MainLayout from './components/layout/MainLayout';
import MainLayoutLogin from './components/layout/MainLayoutLogin';
import LoginPage from './pages/auth/login/LoginPage';
import RegisterPage from './pages/auth/register/RegisterPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route element={<MainLayoutLogin/>}>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
        <Route element={<Outlet/>}>
          <Route path="*" element={<h1>This Link Not Have! 404</h1>}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
