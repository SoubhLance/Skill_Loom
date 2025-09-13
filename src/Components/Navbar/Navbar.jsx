import React from 'react';

const GovernmentNavbar = () => {
  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Top utility bar */}
      <div style={{
        backgroundColor: '#374151',
        color: 'white',
        fontSize: '12px',
        padding: '4px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>Skip to main content</span>
          <span>Screen Reader Access</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ cursor: 'pointer' }}>🔍</span>
          <span style={{ cursor: 'pointer' }}>A-</span>
          <span style={{ cursor: 'pointer' }}>A</span>
          <span style={{ cursor: 'pointer' }}>A+</span>
          <span style={{ cursor: 'pointer' }}>हिंदी</span>
        </div>
      </div>

      {/* Main header */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Government emblem */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#1e3a8a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ color: '#fbbf24', fontSize: '24px', fontWeight: 'bold' }}>⚡</div>
            </div>
            <div>
              <div style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '18px' }}>भारत सरकार</div>
              <div style={{ color: '#1e3a8a', fontWeight: '600' }}>Government of India</div>
              <div style={{ color: '#1d4ed8', fontSize: '14px' }}>शिक्षा मंत्रालय | Ministry of Education</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {/* Digital India logo/text */}
          <div style={{
            color: '#2563eb',
            fontWeight: 'bold',
            fontSize: '24px',
            fontFamily: 'serif'
          }}>
            डिजिटल इंडिया
          </div>
          
          {/* PM image */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#fb923c',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                backgroundColor: '#fdba74',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>PM</span>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Hon'ble PM</span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div style={{ backgroundColor: '#2563eb', color: 'white' }}>
        <nav style={{ display: 'flex', alignItems: 'center', padding: '12px 24px' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'}
               onMouseOut={(e) => e.target.style.color = 'white'}>Home</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'}
               onMouseOut={(e) => e.target.style.color = 'white'}>Internship Guidelines</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'}
               onMouseOut={(e) => e.target.style.color = 'white'}>Education</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'}
               onMouseOut={(e) => e.target.style.color = 'white'}>About Us</a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'}
               onMouseOut={(e) => e.target.style.color = 'white'}>Contact</a>
          </div>
        </nav>
      </div>

      {/* Breadcrumb/scrolling text */}
      <div style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '8px 24px',
        fontSize: '14px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflow: 'hidden'
        }}>
          <span style={{ whiteSpace: 'nowrap' }}>
            Government Programs • Higher Education Reforms • Research and Innovation Excellence • Quality Assurance in Education
          </span>
          <span style={{ whiteSpace: 'nowrap', marginLeft: '32px' }}>
            National Education Policy 2020 Implementation • Digital Education Revolution • Skill Development Programs • Higher Education
          </span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentNavbar;