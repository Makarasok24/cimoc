import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ to, icon, label, onClick, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center text-black rounded-md transition-colors ${
        isActive
          ? "text-white bg-primary"
          : "hover:text-gray-500"
      }`}
      onClick={() => onClick(label)}
    >
      <div className="flex items-center p-5">
        <span className="icon">{icon}</span>
        <span className="ml-3">{label}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
