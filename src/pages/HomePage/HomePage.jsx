import React from 'react';

const HomePage = () => {
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'row', // Align items horizontally
      justifyContent: 'space-between', // Space out main elements
      alignItems: 'center', // Vertically align items
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      backgroundColor: '#F8F3EA',
    }}>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%', 
        width: '50%',
        marginLeft: '300px', 
      }}>
        <button style={{
          color: '#0B1957', 
          backgroundColor: '#FA9EBC',
          border: '1px solid #0B1957', 
          padding: '40px 60px', 
          margin: '5px',
          borderRadius: '10px',
          fontSize: '30px',
          marginBottom: '40px',
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


      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
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
          whiteSpace: 'nowrap'
        }}>About Us</h2>

        <p style={{
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

      </div>

    
  )
}

export default HomePage;
