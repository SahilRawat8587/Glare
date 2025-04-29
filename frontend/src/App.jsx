import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProduct from './pages/AllProducts/AllProduct'
import ProductCategory from './pages/ProductCategory/ProductCategory'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import AddAddress from './pages/AddAddress/AddAddress'

function App() {

  const isSellerPath = useLocation().pathname.includes('/seller');
  const {showUserLogin} = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar /> }
      
       {showUserLogin ? <Login /> : null} 

      <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />


        </Routes>
      </div>

      {!isSellerPath && <Footer />}
      
    </div>
  )
}

export default App
