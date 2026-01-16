[![Vercel Deployment](https://vercel.com/button)](https://karthi-react-todo.vercel.app/)


# React Todo App – Production-Ready Workflow

A modern **React + TypeScript Todo application** built to demonstrate **real-world frontend engineering practices**, not just basic CRUD.

This project focuses on **clean architecture, predictable state management, performance optimization, persistence, and testing** — the same workflow used in production React applications.

---

## 🚀 Features

- Add / Edit / Delete todos (CRUD)
- Toggle todo completion
- Search todos (with debouncing)
- Filter todos (All / Active / Completed)
- Persist data using `localStorage`
- Optimized rendering for performance
- Unit & end-to-end testing
- Clean, responsive UI using Tailwind CSS

---

## 🧠 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

### State Management & Logic
- useReducer – centralized, predictable state updates
- useMemo – derived state & performance optimization
- useEffect – side effects (persistence)
- Lazy initialization – safe localStorage hydration

### Performance
- React.memo – avoid unnecessary re-renders
- Debounced search – reduce recomputation during typing

### Testing
- Vitest – unit & component tests
- React Testing Library – behavior-based UI testing
- Playwright – end-to-end (E2E) browser testing

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── TodoInput.tsx
 │   ├── SearchBar.tsx
 │   ├── Filters.tsx
 │   ├── TodoItem.tsx
 │   └── TodoList.tsx
 │
 ├── reducer/
 │   └── todoReducer.ts
 │
 ├── hooks/
 │   └── useDebounce.ts
 │
 ├── types/
 │   └── todo.ts
 │
 └── App.tsx
```

---

## 🧠 Architecture & Design Decisions

### Why useReducer?
- Centralizes all todo-related logic
- Makes state transitions explicit and predictable
- Scales better than multiple useState calls
- Mirrors real-world Redux-style patterns (without extra libraries)

### Why Derived State (useMemo)?
- Prevents duplicated state
- Always stays in sync
- Improves performance
- Avoids subtle bugs

### Why Lazy Initialization for localStorage?
- Loads persisted data before first render
- Prevents overwriting stored data on refresh
- Fixes common useEffect timing issues

### Why Debounced Search?
- Prevents filtering logic from running on every keystroke
- Improves performance for larger lists
- Matches real-world search UX

### Why React.memo?
- Prevents unnecessary re-renders of unchanged todo items
- Improves performance as the list grows

---

## 🧪 Testing Strategy

### Unit / Component Testing
- Vitest
- React Testing Library
- Focused on user-visible behavior

### End-to-End Testing
- Playwright
- Real browser testing
- Covers complete user workflows:
  - Add todo
  - Toggle completion
  - Search & filter
  - Persistence after refresh

---

## 🔄 Development Workflow

1. Build UI first with Tailwind CSS
2. Implement CRUD functionality step by step
3. Introduce reducer-based state management
4. Add persistence with localStorage
5. Optimize rendering and derived state
6. Add debounced search
7. Write unit tests
8. Add E2E tests with Playwright

---

## 🏆 Skills Demonstrated

- React Hooks (useReducer, useMemo, useEffect)
- State management & data flow
- Performance optimization
- TypeScript best practices
- Testing strategies (unit + E2E)
- Debugging real production issues
- Modern frontend tooling
- Clean, maintainable code structure

---

## ▶️ How to Run the App Locally

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

Open:
http://localhost:5173

---

## 🧪 Run Tests

### Unit tests
```bash
npm test
```

### End-to-end tests
```bash
npx playwright test
```

### Playwright UI mode
```bash
npx playwright test --ui
```

---

## 📌 Final Note

This is not just a Todo app.  
It is a **reference implementation of how I approach React development** with scalability, performance, maintainability, and testing in mind.
