import React from 'react';

const GovernmentFooter = () => {
  const footerStyle = {
    backgroundColor: '#2C4B8C',
    color: 'white',
    padding: '40px 20px 20px 20px',
    fontFamily: 'Arial, sans-serif',
    width: '100%'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
    marginBottom: '40px'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px'
  };

  const headingStyle = {
    color: '#F4A261',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  };

  const socialIconStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'white',
    marginRight: '10px'
  };

  const flagStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    marginBottom: '20px'
  };

  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '14px',
    color: '#B8C5D6'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Main footer content */}
        <div style={gridStyle}>
          {/* Ministry of Education */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Ministry of Education</h3>
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>Shastri Bhawan, New Delhi - 110001</p>
              <p style={{ margin: '0 0 8px 0' }}>📞 011-23382698</p>
              <p style={{ margin: '0' }}>🌐 www.education.gov.in</p>
            </div>
          </div>

          {/* Important Links */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Important Links</h3>
            <div>
              <a href="#" style={linkStyle}>RTI</a>
              <a href="#" style={linkStyle}>Grievance</a>
              <a href="#" style={linkStyle}>Public Procurement</a>
              <a href="#" style={linkStyle}>Vigilance</a>
            </div>
          </div>

          {/* Policies */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Policies</h3>
            <div>
              <a href="#" style={linkStyle}>Privacy Policy</a>
              <a href="#" style={linkStyle}>Terms & Conditions</a>
              <a href="#" style={linkStyle}>Copyright Policy</a>
              <a href="#" style={linkStyle}>Accessibility</a>
            </div>
          </div>

          {/* Follow Us */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Follow Us</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="#" style={{...socialIconStyle, backgroundColor: '#3B5998'}}>f</a>
              <a href="#" style={{...socialIconStyle, backgroundColor: '#0077B5'}}>in</a>
              <a href="#" style={{...socialIconStyle, backgroundColor: '#FF0000'}}>▶</a>
            </div>
          </div>
        </div>

        {/* Flag colors */}
        <div style={flagStyle}>
          <div style={{ width: '30px', height: '20px', backgroundColor: '#FF9933' }}></div>
          <div style={{ width: '30px', height: '20px', backgroundColor: 'white' }}></div>
          <div style={{ width: '30px', height: '20px', backgroundColor: '#138808' }}></div>
        </div>

        {/* Copyright */}
        <div style={copyrightStyle}>
          <p style={{ margin: '0 0 5px 0' }}>
            © 2024 Ministry of Education, Government of India. All rights reserved.
          </p>
          <p style={{ margin: '0' }}>
            Last Updated: 13/09/2025 | Visitors: 1,23,45,678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GovernmentFooter;