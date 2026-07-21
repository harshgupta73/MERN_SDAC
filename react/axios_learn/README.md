# ⚛️ React Hooks Demo

A React application built with **Vite** to demonstrate the usage of some of the most commonly used React Hooks, including **useEffect**, **useReducer**, and the **Context API**. The project also fetches data from a public REST API and implements a light/dark theme toggle using Context.

---

# ✨ Features

* 📄 Fetch and display multiple posts using `useEffect`
* 📌 Fetch a single post by ID
* 🔄 State management using `useReducer`
* 🎨 Light/Dark Theme Toggle using Context API
* ⚡ Built with Vite for fast development
* 📱 Responsive and clean UI

---

# 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS
* Context API
* useEffect
* useReducer
* Fetch API

---

# 📂 Project Structure

```text
react-hooks-demo/
│── public/
│── screenshots/
│   ├── post.png
│   └── posts.png
│── src/
│   ├── components/
│   │   ├── FetchMultiPost.jsx
│   │   ├── FetchSinglePost.jsx
│   │   ├── UseReducer.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ThemedComponent.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│── package.json
│── vite.config.js
│── README.md
```

---

# 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd react-hooks-demo
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 📸 Screenshots

## Multiple Posts

![Multiple Posts](./screenshots/posts.png)

---

## Single Post

![Single Post](./screenshots/post.png)

---

# 📖 Concepts Covered

### useEffect

* Fetching API data
* Handling side effects
* Component lifecycle

### useReducer

* Managing complex state
* Dispatching actions
* Reducer functions

### Context API

* Creating Context
* Providing Context using `ThemeProvider`
* Consuming Context with `useContext`
* Theme switching (Light/Dark)

---

# 🎯 Learning Outcomes

After completing this project, you will understand how to:

* Fetch data from REST APIs
* Display lists of data in React
* Manage state using `useReducer`
* Share data across components using Context API
* Implement a Light/Dark Theme
* Organize React components effectively

---

# 📄 License

This project is created for learning and educational purposes.
