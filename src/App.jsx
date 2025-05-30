import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewsGrid from './pages/NewsGrid';
import NewsDetails from './pages/NewsDetails';
import ShopProducts from './pages/ShopProducts';
import ShopProductSidebar from './pages/ShopProductSidebar';
import ShopCart from './pages/ShopCart';
import ShopCheckout from './pages/ShopCheckout';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Testimonial from './pages/Testimonial';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserSignup from './pages/UserSignup';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import UserLogin from './pages/UserLogin';
import AddAddress from './pages/AddAddress';
import ShopWishlist from './pages/ShopWishlist';
import UserProfile from './pages/UserProfile';

import AdmPrdtLst from './pages/admin/AdmPrdtLst';
import AdmRvw from './pages/admin/AdmRvw';
import PrdtDtls from './pages/PrdtDtls';
import Prdts from './pages/prdts';


function App() {

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-about" element={<About />} />
        <Route path="/page-contact" element={<Contact />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="/news-details" element={<NewsDetails />} />
        {/* <Route path="/shop-products" element={<ShopProducts />} /> */}
        <Route path="/prdts" element={<Prdts />} />
        <Route path="/prdts/:id" element={<PrdtDtls />} />
        <Route path="/shop-products-sidebar" element={<ShopProductSidebar />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/shop-wishlist" element={<ShopWishlist />} />
        <Route path="/shop-checkout" element={<ShopCheckout />} />
        <Route path="/page-services" element={<Services />} />
        <Route path="/page-team" element={<Team />} />
        <Route path="/page-team-details" element={<TeamDetails />} />
        <Route path="/page-testimonial" element={<Testimonial />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/prdtLst" element={<AdmPrdtLst />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/admRvw" element={<AdmRvw />} />

      </Routes>
    </Router>
  );
}

export default App;
