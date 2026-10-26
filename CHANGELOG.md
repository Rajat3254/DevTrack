# Changelog

All notable changes to this project will be documented in this file.

---

# Session 1 — Project Setup

## Added

- Initialized the project repository.
- Configured Git and GitHub.
- Created the React application using Vite.
- Installed and configured Tailwind CSS.
- Created the initial React page.
- Established the project documentation structure.

---

# Session 2 — Frontend Architecture

## Added

- Organized the frontend folder structure.
- Created a structured approach for organizing components.
- Learned JavaScript modules.
- Practiced named and default exports.
- Practiced importing and exporting components.
- Improved code organization and maintainability.

---

# Session 3 — React Router and Layouts

## Added

- Configured React Router.
- Implemented application routing.
- Learned nested routing.
- Used `Outlet` to render nested route content.
- Created layout components.
- Used `NavLink` for active navigation links.
- Implemented a responsive sidebar.
- Improved navigation between application pages.

---

# Session 4 — Props and Reusability

## Added

- Learned how props pass data from parent components to child components.
- Created reusable UI components.
- Implemented reusable Button, Card, Badge, and Input components.
- Used props to customize component behavior and appearance.
- Practiced component composition.
- Improved component reusability and maintainability.

---

# Session 5 — Dynamic Data Rendering

## Added

- Implemented dynamic list rendering using `map()`.
- Learned the importance of unique keys in React lists.
- Passed project data into reusable components.
- Created and improved the `ProjectCard` component.
- Rendered project information dynamically.
- Improved the structure of the project listing interface.

---

# Session 6 — React State and CRUD Operations

## Added

- Learned React's `useState` hook.
- Understood how state updates trigger re-renders.
- Managed project data using React state.
- Implemented Create, Read, Update, and Delete operations.
- Added functionality to create projects.
- Added functionality to delete projects.
- Implemented project editing.
- Implemented saving and updating project information.
- Practiced updating arrays through state setters.
- Improved the application's project management functionality.

---

# Session 7 — React Forms and Validation

## Added

- Implemented controlled form inputs.
- Managed form values using React state.
- Handled form submissions.
- Implemented form validation.
- Displayed validation errors.
- Prevented invalid form submissions.
- Connected form operations to project CRUD functionality.
- Understood the difference between submit and cancel buttons.
- Practiced handling button behavior within forms.

---

# Session 8 — React Effects and Browser Storage

## Added

- Learned the purpose of React's `useEffect` hook.
- Understood side effects in React.
- Learned how dependency arrays control effect execution.
- Practiced using an empty dependency array to run an effect on mount.
- Learned about browser `localStorage`.
- Used `localStorage.getItem()` to retrieve stored data.
- Used `localStorage.setItem()` to persist data.
- Learned that `localStorage` stores string values.
- Used `JSON.stringify()` to convert JavaScript arrays and objects into JSON strings.
- Used `JSON.parse()` to convert stored JSON strings back into JavaScript values.
- Implemented loading of previously saved projects when the component mounts.
- Implemented automatic persistence when the `projects` state changes.
- Introduced the `isLoaded` state flag to prevent saving before the initial loading process finishes.
- Enabled project data to persist across page refreshes.

## Concepts Learned

- Side effects and the `useEffect` hook.
- Effect dependency arrays.
- Browser storage and data persistence.
- JSON serialization and parsing.
- Synchronizing React state with `localStorage`.
- Preventing premature storage updates during initial loading.

## Implementation Summary

The loading effect retrieves saved project data from `localStorage` when the component mounts.

The saving effect stores the current project data whenever the `projects` state changes, but only after the initial loading process has completed.

This allows DevTrack to preserve project data across page refreshes.

## Documentation

- Added `docs/session-08.md` to document the concepts and implementation covered in this session.

---

# Current Project Milestone

## Completed

- Session 1 — Project Setup
- Session 2 — Frontend Architecture
- Session 3 — React Router and Layouts
- Session 4 — Props and Reusability
- Session 5 — Dynamic Data Rendering
- Session 6 — React State and CRUD Operations
- Session 7 — React Forms and Validation
- Session 8 — React Effects and Browser Storage

## Upcoming

- Session 9 — React Context API
- Sharing data across components.
- Understanding and reducing prop drilling.
- Continuing the frontend architecture and state management learning journey.
