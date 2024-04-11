import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', 
      height: '100vh',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
      alignItems: 'center', 
      backgroundColor: '#FFDBD1'
    }}>
      <h1 style={{
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: '90px',
        color: '#0B1957',

      }}>Welcome to Home Page</h1>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        width: '100%', 
        marginLeft:'50px',
      }}>
        <h2 style={{
          
          color: '#0B1957',
          backgroundColor: '#F8F3EA',
          fontSize: '32px',
          fontWeight: 'bold',
          border: '1px solid #0B1957', 
          padding: '10px',
          paddingLeft:'130px',
          paddingRight:'132px', 
          borderRadius: '10px',
          marginBottom:'20px',
        }}>About Us</h2>

        <p style={{
          marginTop: '0',
          color: '#0B1957',
          maxWidth: '600px',
          backgroundColor: '#F8F3EA',
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid #0B1957', 
          width: '400px',
        }}>
        The Bug Report System (BRS) is a user-friendly program designed for logging bugs and errors into a database. It requires a stable internet connection and specific network capabilities for best performance. The system allows users to open and close bug reports, sending email notifications throughout the repair process. Users must log in to access the form, and the system features a graphical display of the history and frequency of reported bugs. Email notifications are sent upon the resolution of bugs to the reporting developer and other relevant parties.
        </p>
      </div>
      <div style={{ 
        position: 'absolute', // Use absolute positioning
        top: '50%', // Center vertically
        marginRight: '-300px',
        transform: 'translateY(-50%)', // Adjust for perfect vertical centering
        display: 'flex',
        flexDirection: 'row', // Align buttons horizontally
      }}>
        <button style={{
          color: '#0B1957', 
          backgroundColor: '#FA9EBC',
          border: '1px solid #0B1957', 
          padding: '40px 60px', 
          margin: '5px',
          borderRadius: '10px',
          marginRight: '50px',
          fontSize: '30px',
        }}>
          View Reports
        </button>
        <button style={{
          color: '#0B1957', 
          backgroundColor: '#FA9EBC',
          border: '1px solid #0B1957', 
          padding: '40px 60px',
          margin: '5px',
          borderRadius: '10px',
          fontSize: '30px',

        }}>
          Make a report
        </button>
      </div>

    </div>
  )
}

export default HomePage;
