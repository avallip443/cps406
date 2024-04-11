import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Align items vertically
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={
        {fontSize: 36,
          fontWeight: 'bold',
          marginBottom: '90px',
          color: 'black',
        }
      }>Welcome to Home Page</h1>   
      <h2 style={{
      marginBottom: '20px',
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'black', 
      padding: '10px', 
      borderRadius: '5px',
    }}>About Us</h2>
      <p style={{
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '20px',
        borderRadius: '10px',
        color: 'black',
      }}>
      The Bug Report System (BRS) is a user-friendly program designed for logging bugs and errors into a database. It requires a stable internet connection and specific network capabilities for best performance. The system allows users to open and close bug reports, sending email notifications throughout the repair process. Users must log in to access the form, and the system features a graphical display of the history and frequency of reported bugs. Email notifications are sent upon the resolution of bugs to the reporting developer and other relevant parties.
       
      </p>
    </div>
  )
}

export default HomePage;
