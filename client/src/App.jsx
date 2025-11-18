import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ExplorePage from './pages/Explore/ExplorePage'
import ManageProducts from './pages/Products/ManageProducts'
import ManageCategories from './pages/Categories/ManageCategories'
import ManageOrders from './pages/Orders/ManageOrders'
import ManageUser from './pages/Users/ManageUser'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/explore' element={<ExplorePage />}></Route>
        <Route path='/manage-products' element={<ManageProducts />}></Route>
        <Route path='/manage-categories' element={<ManageCategories />}></Route>
        <Route path='/manage-orders' element={<ManageOrders />}></Route>
        <Route path='/manage-users' element={<ManageUser />}></Route>
      </Routes>
    </>
  )
}

export default App