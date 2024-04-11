import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f3ea",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#0B1957", fontSize: "36px", fontWeight: "bold" }}>
        Welcome to Home Page
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            color: "#0B1957",
            backgroundColor: "#F8F3EA",
            fontSize: "32px",
            fontWeight: "bold",
            
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "20px",
            width: "fit-content",
          }}
        >
          About Us
        </h2>

        <p
          style={{
            color: "#0B1957",
            maxWidth: "600px",
            backgroundColor: "#ffdbd1",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #0B1957",
            width: "fit-content",
            textAlign: "center"
          }}
        >
          The Bug Report System (BRS) is a user-friendly program designed for
          logging bugs and errors into a database. It requires a stable
          internet connection and specific network capabilities for best
          performance. The system allows users to open and close bug reports,
          sending email notifications throughout the repair process. Users must
          log in to access the form, and the system features a graphical
          display of the history and frequency of reported bugs. Email
          notifications are sent upon the resolution of bugs to the reporting
          developer and other relevant parties.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <button
          style={{
            color: "#0B1957",
            backgroundColor: "#FA9EBC",
            border: "1px solid #0B1957",
            padding: "20px 40px",
            margin: "5px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          View Reports
        </button>
        <button
          style={{
            color: "#0B1957",
            backgroundColor: "#FA9EBC",
            border: "1px solid #0B1957",
            padding: "20px 40px",
            margin: "5px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          Make a report
        </button>
      </div>
    </div>
  );
};

export default HomePage;
