import React from 'react';

export default function Home({ storeInfo }) {
  if (!storeInfo) return <p>Loading store metadata...</p>;

  return (
    <div className="page home-page">
      <header className="hero-section" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to the {storeInfo.name} Management Suite</h1>
        <p className="tagline" style={{ fontSize: '1.2rem', color: '#6e6e6a', fontStyle: 'italic' }}>{storeInfo.description}</p>
      </header>
      
      <div className="dashboard-summary">
        <h2>Admin Overview</h2>
        <div className="info-card" style={{ background: '#fff', padding: '2rem', border: '1px solid #e5e5e0', maxWidth: '400px' }}>
          <p style={{ margin: '0 0 1rem 0' }}><strong>Support Hotline:</strong> {storeInfo.phone_number}</p>
          <p style={{ margin: '0 0 1rem 0' }}><strong>System Status:</strong> Operational</p>
          <p style={{ margin: '0' }}><strong>Environment:</strong> Production Sandbox</p>
        </div>
      </div>
    </div>
  );
}