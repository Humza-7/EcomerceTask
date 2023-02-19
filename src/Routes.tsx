import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/notFound";
import Footer from "./Components/footer";
import Header from "./Components/header";
import ProductListing from "./pages/productListing";

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productlist" element={<ProductListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default ProjectRoutes;