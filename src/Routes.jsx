import React from "react";
import { Route, Routes as Switch, Link } from "react-router-dom";
import AddNewProductPage1 from "./pages/AddNewProductPage1";
import PhoneNumberVerification from "./pages/PhoneNumberVerification";
import Login from "./pages/Login";
import Help from "./pages/Help";
import DashboardPage from "./pages/DashboardPage";
import Kyc from "./pages/Kyc";
import EmailVerify from "./pages/EmailVerify";
import Home from "./pages/Home";
import EmptyWishlistViewProducts from "./pages/EmptyWishlistViewProducts";
import WishlistViewProducts from "./pages/WishlistViewProducts";
import CreateAccount from "./pages/CreateAccount";
import DeleteProduct from "./components/molecules/deleteProduct";
// Routes Component Containing Routes For All Base Pages.
function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AddNewProductPage1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/email-verification" element={<EmailVerify />} />
      <Route path="/phone-verification" element={<PhoneNumberVerification/>} />

      {/* Protected Pages */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/kyc" element={<Kyc />} />
      <Route path="/products" element={<AddNewProductPage1/>} />
      <Route path="/delete-product" element={<DeleteProduct />} />
      <Route path="/wishlist" element={<WishlistViewProducts />} />
      <Route path="/add-to-wishlist" element={<EmptyWishlistViewProducts />} />
      <Route path="/support" element={<Help />} />
      <Route path="/messages" element={<h1 className="text-3xl font-bold text-red-600">Messages</h1>} />
      <Route path="/wishlist" element={<h1 className="text-3xl font-bold text-red-600">Wishlist</h1>} />
      <Route path="/notifications" element={<h1 className="text-3xl font-bold text-red-600">Notifications</h1>} />
      <Route path="/profile" element={<h1 className="text-3xl font-bold text-red-600">Profile</h1>} />
    </Switch>
  );
}

export default Routes;
