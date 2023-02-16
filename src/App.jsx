import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './components/Account';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {

  const checkTheme = () => {
    const body = document.querySelector('body');
    if (localStorage.getItem('dark-theme') === 'true') body.classList.add('dark-theme')
  }
  checkTheme();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
