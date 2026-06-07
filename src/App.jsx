import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useApi } from './hooks/useApi';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AddProductForm from './pages/AddProductForm';
import './App.css';

export default function App() {
  const { data, loading, postProduct, patchProduct, deleteProduct } = useApi();
  // State hook to globally track layout width modes
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (loading || !data) {
    return <div className="loading-screen">Synchronizing Portal Database...</div>;
  }

  return (
    <Router>
      {/* We apply a dynamic class name if the state is collapsed */}
      <div className={`app-layout ${isSidebarCollapsed ? 'sidebar-hidden' : ''}`}>
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed} 
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home storeInfo={data.store_info} />} />
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  products={data.coffee} 
                  onUpdateProduct={patchProduct} 
                  onDeleteProduct={deleteProduct} 
                />
              } 
            />
            <Route 
              path="/add-product" 
              element={<AddProductForm onAddProduct={postProduct} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}