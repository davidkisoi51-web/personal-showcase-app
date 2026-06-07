import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'mini' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {isCollapsed ? "☕" : "☕ Coffee Curator"}
        </div>
        {/* Architectural control button */}
        <button 
          className="btn-toggle" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Canvas" : "Collapse Canvas"}
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>
      
      <nav className="sidebar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
          <span className="nav-icon">🏠</span>
          {!isCollapsed && <span className="nav-text">Dashboard Home</span>}
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? "active-link" : ""}>
          <span className="nav-icon">📦</span>
          {!isCollapsed && <span className="nav-text">Product Inventory</span>}
        </NavLink>
        <NavLink to="/add-product" className={({ isActive }) => isActive ? "active-link" : ""}>
          <span className="nav-icon">➕</span>
          {!isCollapsed && <span className="nav-text">Register Product</span>}
        </NavLink>
      </nav>
    </aside>
  );
}