import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function Layout() {
const [currentPage, setCurrentPage] = useState("หน้าแรก");
  return (
    <div className="">
      <div className="bg-gray-200">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;