# Session 8 — React Effects & Browser Storage

## Session Overview

In this session, we learned how React handles side effects using `useEffect` and how to persist project data in the browser using `localStorage`.

The goal was to ensure that projects created, edited, or deleted in DevTrack remain available even after refreshing the page.

---

## Learning Objectives

By the end of this session, I learned:

- What side effects are in React.
- How to use the `useEffect` hook.
- How the dependency array controls effect execution.
- How to use browser `localStorage`.
- How `JSON.stringify()` and `JSON.parse()` work.
- How to persist React state across page refreshes.
- How to load previously saved projects when the application starts.
- Why an `isLoaded` flag is useful when loading and saving data.

---

## 1. Understanding `useEffect`

`useEffect` is a React hook used to handle side effects in a component.

A side effect is an operation that interacts with something outside the component's normal rendering process.

Examples include:

- Fetching data from an API.
- Saving data to browser storage.
- Setting up subscriptions.
- Synchronizing React state with an external system.

### Basic Syntax

```jsx
useEffect(() => {
  // Side-effect logic
}, [dependencies]);
```

The dependency array determines when the effect runs.

### Different Dependency Arrays

**1. Empty dependency array**

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

The effect runs when the component mounts.

**2. Dependency array containing a variable**

```jsx
useEffect(() => {
  console.log("Projects changed");
}, [projects]);
```

The effect runs after the initial mount and whenever `projects` changes.

**3. No dependency array**

```jsx
useEffect(() => {
  console.log("Component rendered");
});
```

The effect runs after every render.

---

## 2. Understanding `localStorage`

`localStorage` is a browser API that allows us to store data as strings. The stored data remains available across page refreshes and browser sessions unless it is cleared or removed.

### Important Methods

**Store data**

```jsx
localStorage.setItem("username", "Rajat");
```

**Retrieve data**

```jsx
const username = localStorage.getItem("username");
```

**Remove a particular item**

```jsx
localStorage.removeItem("username");
```

**Remove all items from the current origin's local storage**

```jsx
localStorage.clear();
```

### Important Point

`localStorage.getItem()` returns:

- A string if the key exists.
- `null` if the key does not exist.

`localStorage` stores strings, so JavaScript objects and arrays must be converted before saving.

---

## 3. Understanding `JSON.stringify()` and `JSON.parse()`

### `JSON.stringify()`

It converts a JavaScript value, such as an array or object, into a JSON string.

```jsx
const projects = [
  { id: 1, name: "DevTrack" }
];

const savedData = JSON.stringify(projects);
```

### `JSON.parse()`

It converts a valid JSON string back into a JavaScript value.

```jsx
const projects = JSON.parse(savedData);
```

### Why Do We Need Them?

Since `localStorage` stores strings, we use `JSON.stringify()` before saving an array or object and `JSON.parse()` when retrieving it.

The general flow is:

```text
JavaScript Array/Object
        |
        | JSON.stringify()
        v
     JSON String
        |
        | localStorage.setItem()
        v
    Browser Storage

    Browser Storage
        |
        | localStorage.getItem()
        v
     JSON String
        |
        | JSON.parse()
        v
JavaScript Array/Object
```

---

## 4. Loading Projects from `localStorage`

When DevTrack starts, we want to retrieve previously saved projects instead of always displaying only the initial project data.

We can use `useEffect` to load the saved projects when the component mounts.

```jsx
const [projects, setProjects] = useState(initialProjects);

useEffect(() => {
  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  }
}, []);
```

### How It Works

1. The component initially renders using `initialProjects`.
2. The effect runs after the component mounts.
3. `localStorage.getItem("projects")` checks whether saved projects exist.
4. If saved data exists, `JSON.parse()` converts it into a JavaScript array.
5. `setProjects()` updates the React state with the retrieved projects.
6. React renders the updated project list.

The empty dependency array means the loading effect runs on mount.

**Note:** This is the basic loading example. The next section explains how to prevent saving the initial data before loading has finished.

---

## 5. Saving Projects to `localStorage`

Whenever projects are created, edited, or deleted, the `projects` state changes.

We can use another `useEffect` to save the updated array.

```jsx
useEffect(() => {
  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects]);
```

### How It Works

1. React renders the component.
2. The effect runs after the initial mount.
3. Whenever `projects` changes, the effect runs again.
4. `JSON.stringify(projects)` converts the array into a string.
5. `localStorage.setItem()` saves the updated data.

Because `projects` is in the dependency array, the effect runs whenever React detects that its value has changed.

### The Problem

When the component mounts, the loading effect and saving effect both run after the initial render.

The saving effect might save the initial project data before the previously saved projects have been loaded into state.

This can overwrite the saved data we wanted to preserve.

To prevent this, we need to track whether loading has finished.

---

## 6. Understanding the `isLoaded` Flag

We introduced an `isLoaded` state variable to track whether the initial loading process has completed.

```jsx
const [isLoaded, setIsLoaded] = useState(false);
```

Initially, `isLoaded` is `false`, which means the saved projects have not yet been loaded.

After checking `localStorage` and updating the project state if saved data exists, we set it to `true`.

### Loading Effect

```jsx
useEffect(() => {
  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  }

  setIsLoaded(true);
}, []);
```

### Saving Effect

```jsx
useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects, isLoaded]);
```

### Why Do We Use `if (!isLoaded) return`?

The condition prevents the saving effect from running its storage operation while the initial loading process is incomplete.

When `isLoaded` is `false`, the effect returns early.

Once `isLoaded` becomes `true`, the saving effect can save the current projects. It also runs again whenever `projects` changes.

### Execution Flow

```text
Component Mounts
       |
       v
isLoaded = false
       |
       v
Load Projects from localStorage
       |
       v
Update projects if saved data exists
       |
       v
setIsLoaded(true)
       |
       v
Saving Effect Runs
       |
       v
Save Current Projects
       |
       v
Projects Change?
       |
       +------ Yes ------> Save Updated Projects
```

---

## 7. Final Implementation

The combined implementation looks like this:

```jsx
const [projects, setProjects] = useState(initialProjects);
const [isLoaded, setIsLoaded] = useState(false);

// Load saved projects when the component mounts.
useEffect(() => {
  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  }

  setIsLoaded(true);
}, []);

// Save projects after loading has completed.
useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects, isLoaded]);
```

### Implementation Summary

- `projects` stores the current project data in React state.
- The loading effect retrieves previously saved projects.
- `JSON.parse()` converts the stored string into a JavaScript array.
- `isLoaded` tracks completion of the initial loading process.
- The saving effect waits for loading to complete.
- `JSON.stringify()` converts the project array into a string.
- `localStorage.setItem()` persists the current projects.

This allows project data to survive page refreshes.

---

## 8. Important Concepts Learned

| Concept | Purpose |
|---|---|
| `useEffect` | Handles side effects in React |
| `[]` | Runs the effect on mount |
| `[projects]` | Reruns the effect when projects change |
| `localStorage.setItem()` | Stores string data |
| `localStorage.getItem()` | Retrieves stored data or returns `null` |
| `JSON.stringify()` | Converts a JavaScript value into a JSON string |
| `JSON.parse()` | Converts a JSON string into a JavaScript value |
| `isLoaded` | Prevents the saving effect from running before loading finishes |

---

## 9. Verification Checklist

- [ ] Projects load from `localStorage` when the component mounts.
- [ ] Previously saved projects remain available after refreshing the page.
- [ ] Creating a project updates the saved data.
- [ ] Editing a project updates the saved data.
- [ ] Deleting a project updates the saved data.
- [ ] The saving effect waits for initial loading to finish.
- [ ] No unnecessary effect dependencies are introduced.

---

## 10. Session Milestone

**Session 8 completed: React Effects & Browser Storage**

I learned how to use `useEffect` to synchronize React state with browser storage and how to persist DevTrack projects using `localStorage`.

The project now supports persistent project data across page refreshes.

### Next Session

**Session 9 — React Context API**

The next session will introduce Context API and explain how to share data across components without passing props through every intermediate component.
