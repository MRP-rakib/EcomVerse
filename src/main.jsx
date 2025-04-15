import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import RouteLayout from './routers/RouteLayout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SignUp.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import User from './pages/User.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Product from './components/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<RouteLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='product' element={<Product/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
    </StrictMode>,
)
