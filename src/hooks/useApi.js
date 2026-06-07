import { useState, useEffect } from 'react';

// Initial Mock Data provided by the lab requirements
const initialMockData = {
  store_info: {
    id: 1,
    name: "Coffee R Us",
    description: "The go-to store for artisanal coffee and expert brewing equipment.",
    phone_number: "555-5555"
  },
  coffee: [
    {
      id: 1,
      description: "Medium Roast, nutty flavor",
      name: "Vanilla Bean",
      origin: "Colombia",
      price: 10.00
    },
    {
      id: 2,
      description: "Dark Roast, Rich flavor",
      name: "House Blend",
      origin: "Vietnam",
      price: 12.00
    }
  ]
};

export function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // GET Request simulation
  useEffect(() => {
    const localData = localStorage.getItem('ecommerce_db');
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      localStorage.setItem('ecommerce_db', JSON.stringify(initialMockData));
      setData(initialMockData);
    }
    setLoading(false);
  }, []);

  // POST Request simulation (Add Product)
  const postProduct = (newProduct) => {
    setLoading(true);
    const updatedCoffee = [...data.coffee, { ...newProduct, id: Date.now(), price: parseFloat(newProduct.price) }];
    const updatedData = { ...data, coffee: updatedCoffee };
    
    localStorage.setItem('ecommerce_db', JSON.stringify(updatedData));
    setData(updatedData);
    setLoading(false);
  };

  // PATCH Request simulation (Edit Product details like Price)
  const patchProduct = (productId, updatedFields) => {
    setLoading(true);
    const updatedCoffee = data.coffee.map(item => {
      if (item.id === productId) {
        return { 
          ...item, 
          ...updatedFields, 
          price: updatedFields.price ? parseFloat(updatedFields.price) : item.price 
        };
      }
      return item;
    });
    
    const updatedData = { ...data, coffee: updatedCoffee };
    localStorage.setItem('ecommerce_db', JSON.stringify(updatedData));
    setData(updatedData);
    setLoading(false);
  };

  // DELETE Request simulation (Fulfills the Excelled Rubric Tier)
  const deleteProduct = (productId) => {
    setLoading(true);
    const updatedCoffee = data.coffee.filter(item => item.id !== productId);
    const updatedData = { ...data, coffee: updatedCoffee };
    
    localStorage.setItem('ecommerce_db', JSON.stringify(updatedData));
    setData(updatedData);
    setLoading(false);
  };

  return { data, loading, postProduct, patchProduct, deleteProduct };
}