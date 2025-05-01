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
import MyOrders from './pages/MyOrders/MyOrders'
import SellerLogin from './components/Admin/SellerLogin'
import SellerLayout from './pages/Admin/SellerLayout'
import AddProduct from './pages/Admin/AddProduct'
import ProductList from './pages/Admin/ProductList'
import Orders from './pages/Admin/Orders'

function App() {

  const isSellerPath = useLocation().pathname.includes('/seller');
  const {showUserLogin, isSeller} = useAppContext();

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
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
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin/>} >
            <Route index element={isSeller ? <AddProduct/> : null} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path= 'orders' element={<Orders/>} />
          
          </Route>


        </Routes>
      </div>

      {!isSellerPath && <Footer />}
      
    </div>
  )
}

export default App
