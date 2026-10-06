# 🚀 Module 4 - Task 4: React User API

## 📌 Description

This project is a React application that fetches user details from the JSONPlaceholder API and displays them in a table.

## 🛠️ Technologies Used

- ⚛️ React
- 🟨 JavaScript
- ⚡ Vite
- 🔄 useState()
- 🔁 useEffect()
- 🌐 Fetch API

## 🌐 API

https://jsonplaceholder.typicode.com/users

## ✨ Features

- 📥 Fetches user data from the API
- 🆔 Displays User ID
- 👤 Displays Name
- 🔤 Displays Username
- 📧 Displays Email
- ⏳ Shows `Loading...` while fetching data
- ❌ Shows an error message if the API request fails

## 🧠 React Concepts Used

### 🔄 useState()

`useState()` is used to store:

- 👥 User data
- ⏳ Loading state
- ❌ Error state

### 🔁 useEffect()

`useEffect()` is used to fetch the user data when the component loads.

### 🌐 fetch()

The Fetch API is used to retrieve data from JSONPlaceholder.

## 📂 Project Structure

```text
task4/
├── 📁 src/
│   ├── App.jsx
│   ├── user.jsx
│   ├── App.css
│   └── main.jsx
├── 📁 public/
├── package.json
├── vite.config.js
└── README.md