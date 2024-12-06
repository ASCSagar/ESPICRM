import React from "react";
import {
  Files,
  LogOut,
  WalletCards,
  LayoutDashboard,
  FileChartColumnIncreasing,
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", active: true },
  { icon: <FileChartColumnIncreasing />, label: "Detail Enquiry" },
  { icon: <Files />, label: "Assessment" },
  { icon: <WalletCards />, label: "Payment" },
  { icon: <LogOut />, label: "Logout" },
];
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`
      bg-white shadow-elevated 
      fixed top-16 bottom-0 left-0 z-20
      transition-all duration-300 ease-in-out
      ${isSidebarOpen ? "w-64" : "w-16"}
      overflow-hidden
    `}
    >
      <nav className="p-4 mt-2 h-full space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center ${
                isSidebarOpen ? "space-x-3" : "justify-center"
              } p-2 rounded-lg transition-all cursor-pointer group
              ${
                item.active
                  ? "bg-primary-100 text-primary-800"
                  : "hover:bg-neutral-100 text-neutral-800"
              }
            `}
          >
            <div
              className={`
                ${
                  item.active
                    ? "text-primary-600"
                    : "text-neutral-600 group-hover:text-primary-600"
                } transition-colors
              `}
            >
              {item.icon}
            </div>
            {isSidebarOpen && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
