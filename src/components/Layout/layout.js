import React, { useState } from "react";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 py-16">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main
          className={`
            flex-1 bg-neutral-50 p-6 transition-all duration-300 ease-in-out 
            ${isSidebarOpen ? "ml-64" : "ml-16"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
