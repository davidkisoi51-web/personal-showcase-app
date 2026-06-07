import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
// Add this line to import the DOM matchers manually:
import '@testing-library/jest-dom/vitest'; 

import ProductCard from '../ProductCard';

const mockProduct = {
  id: 1,
  name: "Vanilla Bean",
  origin: "Colombia",
  description: "Medium Roast",
  price: 10.00
};

describe('ProductCard Component', () => {
  it('renders standard product attributes correctly', () => {
    render(<ProductCard product={mockProduct} onUpdateProduct={vi.fn()} />);
    expect(screen.getByText('Vanilla Bean')).toBeInTheDocument();
    
    // Note: To match how toFixed(2) renders in the component, use '$10.00'
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('reveals edit fields when update process is selected', () => {
    render(<ProductCard product={mockProduct} onUpdateProduct={vi.fn()} />);
    const editButton = screen.getByText('Edit Price');
    fireEvent.click(editButton);
    
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});