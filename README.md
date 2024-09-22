
# 30social

30social is a Twitter clone app built using modern web technologies to provide a real-time social media experience, where users can create posts, interact with others, and stay connected. The app features user authentication, secure storage, and a responsive user interface.

## Features

- User authentication with JWT (JSON Web Token)
- Create, edit, and delete posts
- Follow/unfollow other users
- Like and comment on posts
- Upload and display profile pictures using GridFS
- Form validation using Formik and Yup
- Responsive UI with Material-UI (MUI)

## Tech Stack

### Client Side
- **React**: ^18.3.1
- **Redux** (with Redux Toolkit): ^2.2.7
- **Material-UI** (MUI): ^6.1.1
- **Formik** (for form management): ^2.4.6
- **Yup** (for form validation): ^1.4.0
- **React Router** (for navigation): ^6.26.2
- **Redux Persist**: ^6.0.0
- **React Dropzone**: ^14.2.3

### Server Side
- **Express**: ^4.21.0
- **MongoDB** with **Mongoose**: ^8.6.3
- **JWT** (JSON Web Token): ^9.0.2
- **Bcrypt** (for password hashing): ^5.1.1
- **Multer** (for handling file uploads): ^1.4.4
- **Multer-GridFS-Storage** (for storing files): ^5.0.2
- **Helmet** (for securing HTTP headers): ^7.1.0
- **Morgan** (for logging): ^1.10.0

## Installation

### Prerequisites
- Node.js
- MongoDB

### Client Side Setup
1. Navigate to the `client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Server Side Setup
1. Navigate to the `server` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```

## Usage
- After setting up both the client and server, navigate to `http://localhost:3000` to access the application.

## License
This project is licensed under the ISC License.
