import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../styles/Layout.css";
function MainLayout() {
  return (
    <>
      <Navbar/>
      <div className="layout-content">
      <Sidebar/>
      <main className="main-content">
      <Outlet /></main>
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;