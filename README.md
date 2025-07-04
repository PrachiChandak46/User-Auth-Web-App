User Authentication Web App

A complete web-based user authentication system built with **Firebase Authentication**, **HTML/CSS**, and **Vanilla JavaScript** — supports **signup**, **login**, **logout**, and **password reset** with a modern, responsive UI.

 This project solves the problem of building a **secure and user-friendly authentication system** without managing backend servers manually. It uses Firebase to handle login, signup, password reset, and authentication sessions efficiently.


 Features

-  User Signup with email & password
-  Secure Login & Logout
-  Password Reset via email
-  Protected Dashboard page (only after login)
-  Form validation & popup alerts
-  Fully responsive & professionally styled UI


## 🔧 Tech Stack

| Frontend       | Backend/Auth          |
|----------------|------------------------|
| HTML5, CSS3    | Firebase Authentication |
| JavaScript     | Firebase SDK           |


 1. Clone the Repository
```bash
git clone https://github.com/your-username/firebase-auth-app.git
cd firebase-auth-app
# User-Auth-Web-App

2. Setup Firebase
Go to Firebase Console

Create a new project

Enable Email/Password Authentication

Copy your Firebase config from Project Settings → Web SDK

3. Configure Firebase in your code
Open firebase.js and paste your Firebase config:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  ...
};
firebase.initializeApp(firebaseConfig);

# Run with VS Code Live Server or any static server
npx serve .

