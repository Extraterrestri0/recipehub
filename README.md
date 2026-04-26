# 🍽️ RecipeHub

RecipeHub is a React web application for creating and managing recipes.  
It allows users to register, log in, and manage their own recipes through a simple and user-friendly interface.

---

## 📌 Description

The application provides the following features:

- User registration and login
- Creating new recipes
- Editing existing recipes
- Deleting recipes
- Viewing all available recipes
- Restricting actions so only the author can edit/delete their own recipes

---

## 🛠️ Technologies Used

- React (Vite)
- React Router
- Context API (for authentication)
- JSON Server (REST API)
- CSS (custom styling)

---

## 🔐 Authentication

Users can:

- Register
- Login
- Logout

Only authenticated users are allowed to:
- Create recipes
- Edit recipes
- Delete recipes

---

## 🔒 Protected Routes

The following routes are protected:

- `/create`
- `/edit/:id`

If a user is not authenticated, they are redirected to the login page.

---

## 🔄 CRUD Functionality

The application supports full CRUD operations:

- **Create** – Add a new recipe  
- **Read** – View all recipes  
- **Update** – Edit existing recipes  
- **Delete** – Remove recipes  

---

## 🌐 REST API

The project uses `json-server` as a mock backend:
http://localhost:3000/recipes
http://localhost:3000/users

---

## ▶️ Getting Started

To run the project locally:
npm install
npm run server
npm run dev

Then open:
http://localhost:5173

---

## 🎨 Features

- Responsive UI design
- Styled recipe cards
- Display recipe author
- Authorization logic (only the creator can edit/delete)

---

## 👨‍💻 Author

Created by:  
**Extraterrestrio**

---

## 🎯 Project Purpose

This project was created for educational purposes and demonstrates:

- React components
- Routing with React Router
- Form handling
- React Hooks (`useState`, `useEffect`)
- Context API for authentication
- REST API integration
- Git version control with commits

