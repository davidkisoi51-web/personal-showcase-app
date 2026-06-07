import React, { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProductForm({ onAddProduct }) {
  const navigate = useNavigate();
  
  const nameId = useId();
  const originId = useId();
  const priceId = useId();
  const descId = useId();

  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.origin || !formData.price) {
      alert("Please fill out all required validation points.");
      return;
    }
    
    onAddProduct(formData);
    navigate('/products');
  };

  return (
    <div className="page form-page">
      <h2>Add New Catalog Item</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor={nameId}>Product Name *</label>
          <input 
            id={nameId} type="text" name="name" 
            value={formData.name} onChange={handleChange} required 
          />
        </div>

        <div className="form-group">
          <label htmlFor={originId}>Geographic Origin *</label>
          <input 
            id={originId} type="text" name="origin" 
            value={formData.origin} onChange={handleChange} required 
          />
        </div>

        <div className="form-group">
          <label htmlFor={priceId}>Base Price ($ USD) *</label>
          <input 
            id={priceId} type="number" name="price" step="0.01"
            value={formData.price} onChange={handleChange} required 
          />
        </div>

        <div className="form-group">
          <label htmlFor={descId}>Item Description</label>
          <textarea 
            id={descId} name="description" rows="4"
            value={formData.description} onChange={handleChange} 
          />
        </div>

        <button type="submit" className="btn-submit">Register Product</button>
      </form>
    </div>
  );
}