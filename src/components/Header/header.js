import React from "react";
import { User, Mail, Bell, ChevronLeft, ChevronRight } from "lucide-react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white shadow-soft p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 mr-4 rounded-full hover:bg-neutral-100 transition-colors"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </button>
        <h1 className="text-xl font-heading font-semibold text-primary-800">
          ESPI CRM
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative">
          <Mail size={20} className="text-neutral-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-error-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative">
          <Bell size={20} className="text-neutral-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-warning-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <User size={20} className="text-primary-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
