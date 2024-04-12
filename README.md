# Bug Report System (BRS) 

## Table of Contents
- [Contributors](#contributors)
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Instructions](#Instructions)
- [Package Contents](#package-contents)
- [Feature and Usage](#Feature-and-Usage)
- [Technical Architecture](#Technical-Architecture)
- [Other Dependencies](#Other-Dependencies)
  

## Contributors
Parnia Zare  
Carole Youssef  
Arathi Vallipuranathan  
Micah Pascua  
Lingyun Du  

## Overview

This program, the Bug Report System (BRS), is designed to facilitate the input of bugs and errors into a database, offering users a straightforward and user-friendly script for seamless implementation. A stable internet connection and specific network capabilities are required for optimal functionality of the web form. Users can initiate new bug reports and close them as needed, with email notifications provided at each stage of the bug repair process. Access to the bug report form requires logging in with a valid username and password. Additionally, a graphical representation of past bug occurrences and their frequency will be available. Upon bug resolution, notifications will be sent via email to the reporting developer and any other involved parties.

This package encapsulates the key components of the second iteration of the BRS development cycle, including a Product Backlog, a Test Plan, and a Team Velocity.
## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js](https://nodejs.org/).
* You have a `<Windows/Linux/Mac>` machine. This project may not work as intended on other operating systems.
  
## Instructions
To install this project, follow these steps:

1. **Install Node.js**

   Node.js is required to run this project. Download and install it from [here](https://nodejs.org/).

2. **Install npm**

   npm is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer. Verify the installation of Node.js and npm with:

   ```bash
   node -v
   npm -v
   
3.  **Install vite**
   This project uses Vite for its build system. You can install Vite globally using npm:
      ```bash
      npm install -g vite

5. **Clone the repository**
   Use the following git command to clone the project:
    ```bash
   git clone [https://github.com/your/repository](https://github.com/avallip443/cps406.git)
   
7. **Navigate to the project directory**
8. **Install project dependencies**
   Run the following command to install the necessary dependencies:
    ```bash
    npm install
10. **Start the development server**
    To start the local development server which will build the app and serve it at  http://localhost:5173/ by default, you can run:
      ```bash
     npm run dev
  After running the development server, you should see a message indicating it's running and listing the local URL to access it.

## Package Contents:

### **1. Product Backlog**

The product backlog for this iteration contains a prioritized list of features and enhancements for the BRS.  

More specifically, it contains: 

- **User Stories:** Contains all user stories for this iteration. User stories detail the functionality from an end-user perspective and prioritize them based on their importance to the product

- **Task Breakdown:** Specific tasks necessary for the implementation of each user story and includes key tools/technologies to use and essential functionalities.

- **Effort Estimation:** Estimated and actual effort values for each completed user story and task. Effort estimation helps in understanding the resources required for each item on the backlog and enables tracking of progress against initial estimates

- **Team Velocity Diagram:** A visual representation of the team's velocity, showing the amount of work completed in this iteration. This diagram aids in evaluating the team's productivity and in making informed decisions regarding future iterations.

 
### **2. Revised Estimates**

The "Revised Estimates" section provides updated time estimates for the remaining stories and tasks slated for iteration 3, taking into account the outcomes and learnings from iteration 2.

This section contains:
- **Updated Time Estimates:** Based on the outcomes and learnings from the previous iteration, the time required to complete the remaining stories and tasks for iteration 3 was reassesed.

- **Indicated Effort Estimates:** Clear indication is provided for the estimated effort required for all stories and tasks. By indicating the anticipated effort for each item, a outline for resource allocation and project planning was established.

- **Tracked Actual Effort:** Actual effort values for each of the finished stories and tasks from the previous iteration are documented. This allows for a comparison between the initially estimated effort and the actual effort required.

By consistently reviewing and updating our estimates based on the actual outcomes, there will be an increase to predictability and efficiency of BRS project planning and execution processes.


### **3. Test Plan**  

Describes the testing approach for the final iteration, ensuring thorough coverage of all features. Detailed test plan outlining:  

- **Test conditions:** Specific conditions under which each test will be conducted.

- **Test inputs:** Detailed inputs to be used for each test case.

- **Expected outputs:** Defined expected outcomes for each test to help with easy identification of discrepancies during testing.  

This plan is pivotal for ensuring the quality and robustness of the final iteration.  

### **4. ReadMe File**

The "ReadMe File" section provides a comprehensive overview of the contents and purpose of the delivery package for the current iteration.

This section contains:

- **Contents Description:** A detailed description of the contents included in the delivery package is provided. 

- **Purpose Clarification:** The purpose of the delivery package is clearly outlined, highlighting its intended use, functionality, and significance.

- **List of Team Members:** The names of all team members who contributed to this iteration are listed.

## Feature-and-Usage
- User Authentication: Log in, register, and logout functionalities are provided using Firebase authentication.
- Bug Reporting: Users can create, edit, and close bug reports through a form-based interface.
- Real-Time Updates: Email notifications are sent at each stage of the bug repair process.

## Technical-Architecure
The BRS uses React for the frontend and Firebase for backend services including authentication and database management. It is styled with Tailwind CSS and uses Vite as the build system.

## Other-Dependencies
The following dependencies are used:
- React Firebase hooks
- React icons
- React router














