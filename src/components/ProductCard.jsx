import React, { useState, useRef } from 'react';

export default function ProductCard({ product, onUpdateProduct, onDeleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const priceInputRef = useRef(null);

  const handleSavePrice = () => {
    const newPrice = priceInputRef.current.value;
    if (newPrice && !isNaN(newPrice)) {
      onUpdateProduct(product.id, { price: newPrice });
      setIsEditing(false);
    } else {
      alert("Please enter a valid numeric price.");
    }
  };

  return (
    <div className="product-card">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3>{product.name}</h3>
          <button 
            onClick={() => onDeleteProduct(product.id)} 
            className="btn-cancel" 
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
          >
            Delete
          </button>
        </div>
        <p className="origin">Origin: {product.origin}</p>
        <p className="description">{product.description}</p>
      </div>
      
      <div className="price-section">
        {isEditing ? (
          <div className="edit-price-group">
            <input 
              type="number" 
              defaultValue={product.price} 
              ref={priceInputRef}
              step="0.01"
              className="price-input"
            />
            <button onClick={handleSavePrice} className="btn-save" style={{ marginRight: '0.25rem' }}>Save</button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">X</button>
          </div>
        ) : (
          <div className="display-price-group" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <span className="price">${product.price.toFixed(2)}</span>
            <button onClick={() => setIsEditing(true)} className="btn-edit">Edit Price</button>
          </div>
        )}
      </div>
    </div>
  );
}