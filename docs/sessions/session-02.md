# DevTrack - Session 2

## Topic
Frontend Architecture & React Router

## Objective
Design a scalable frontend architecture and implement client-side routing using React Router.

---

## Concepts Learned

### 1. Pages vs Components

**Pages**
- Represent complete screens.
- Mapped to routes.
- Example:
    - Dashboard
    - Projects
    - Tasks
    - NotFound

**Components**
- Reusable UI elements.
- Used inside pages.
- Example:
    - Navbar
    - Footer
    - Button

---

### 2. Layout Components

Created a shared layout using:

- Navbar
- Outlet
- Footer

The layout is reused across all pages.

---

### 3. React Router

Installed:

```bash
npm install react-router-dom
```

Learned:

- BrowserRouter
- Routes
- Route
- Nested Routes
- Outlet

---

### 4. BrowserRouter

Keeps the React application synchronized with the browser URL without reloading the page.

---

### 5. Routes

Container that stores all route definitions.

---

### 6. Route

Maps a URL to a React component.

Example:

```jsx
<Route path="/projects" element={<Projects />} />
```

---

### 7. Outlet

A placeholder inside the layout where child routes are rendered.

Example:

```
Navbar

<Outlet />

Footer
```

When visiting `/projects`, the Outlet renders:

```
Projects
```

---

### 8. Project Structure

```
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
│
├── pages/
│   ├── Dashboard/
│   ├── Projects/
│   ├── Tasks/
│   └── NotFound/
│
├── hooks/
├── services/
├── utils/
├── context/
├── constants/
├── routes/
├── styles/
└── App.jsx
```

---

### 9. JavaScript Modules

Learned:

- export default
- named exports
- import
- index.jsx

Example:

```jsx
export default Dashboard;
```

Import:

```jsx
import Dashboard from "../pages/Dashboard";
```

---

### 10. Debugging Lesson

Issue faced:

- `react-router-dom` was installed in the wrong project (`DevTrack/` instead of `frontend/`).

Resolution:

- Installed the package inside the correct React project.
- Restarted the development server.
- Verified routing.

---

## Files Created

- MainLayout.jsx
- AppRoutes.jsx
- Dashboard/index.jsx
- Projects/index.jsx
- Tasks/index.jsx
- NotFound/index.jsx

---

## Key Takeaways

- Folder structure matters.
- Layout avoids code duplication.
- React Router enables SPA navigation.
- `Outlet` renders child routes.
- Every React file is a JavaScript module.
- Read error messages before trying random fixes.