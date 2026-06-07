import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({ products, onUpdateProduct, onDeleteProduct }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamic filter logic covering product names and geographic origins
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Product Inventory Management</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {filteredProducts.length === 0 ? (
        <p className="no-results">No products matched your search criteria.</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onUpdateProduct={onUpdateProduct} 
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}