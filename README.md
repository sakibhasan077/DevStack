# 🚀 DevStack

DevStack is a modern technology stack explorer built with React.
It allows users to explore different technologies and create
their own personalized development stack.

## 🛠️ Technologies Used

-  React
- JavaScript
- Tailwind CSS
- React Toastify
- JSON
- Vite

## ✨ Features

- 🎨 Clean and modern layout
- 📱 Responsive design
- 🔍 Explore different technologies with category, difficulty,
  rating, and description.
- ➕ Add technologies to your personal development stack.
- 🗑️ Remove individual technologies or clear the entire stack.
- 💻 Mobile-friendly interface

## 🌐 Live Demo

[Live Website](https://devstack-red-six.vercel.app/)

## 📂 GitHub Repository

[GitHub Repository](https://github.com/sakibhasan077/DevStack)


## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax where we write HTML-like code inside JavaScript. It makes React UI easier to write.

### 2. What is the difference between props and state?

Props are used to pass data from one component to other. State stores data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update changing data in a component. I used it to manage the stack and update it when items were added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders. I used it to load the JSON data when the component first loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the correct items efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when the stack has no items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can communicate back to the parent by lift up the state process.
