# 📚 Session 1 – Project Setup

> **Project:** DevTrack
> **Date:** 05 August 2026
> **Duration:** ~2–3 Hours
> **Status:** ✅ Completed

---

# 🎯 Session Goal

Build the complete project foundation before starting feature development.

---

# ✅ Deliverables Completed

* Monorepo created
* Git repository initialized
* GitHub repository created
* SSH configured with GitHub
* React project created using Vite
* Tailwind CSS installed
* Default Vite template removed
* First React page created
* Project committed
* Project pushed to GitHub

---

# 📂 Project Structure

```text
DevTrack/
│
├── frontend/
├── backend/
├── docs/
├── README.md
├── CHANGELOG.md
└── .gitignore
```

---

# 🧠 Concepts Learned

## 1. Monorepo

### Definition

A **Monorepo** is a single Git repository that contains multiple related projects.

For DevTrack:

* Frontend
* Backend
* Documentation

### Advantages

* Single repository
* Easier version management
* Easier collaboration
* Cleaner project organization

---

## 2. Git Basics

### `git init`

Initializes Git inside the project by creating a hidden `.git` directory.

Purpose:

* Start version control
* Track project history

---

### `git status`

Displays:

* Current branch
* Modified files
* New files
* Deleted files
* Staged files

---

### `git add .`

Moves changes from the **Working Directory** to the **Staging Area**.

Stages:

* New files
* Modified files
* Deleted files

---

### `git commit`

Creates a snapshot of all staged changes.

The snapshot is stored in the **local Git repository**.

---

### `git push`

Uploads local commits to the remote GitHub repository.

---

# Git Workflow

```text
Working Directory
        │
        ▼
git add .
        │
        ▼
Staging Area
        │
        ▼
git commit
        │
        ▼
Local Repository
        │
        ▼
git push
        │
        ▼
GitHub
```

---

# 🔐 SSH

## Full Form

**SSH = Secure Shell**

### Purpose

Provides secure authentication between the local machine and GitHub using cryptographic keys.

---

## Files Created

### Private Key

```text
id_ed25519
```

* Never share it.
* Stored only on your computer.

---

### Public Key

```text
id_ed25519.pub
```

* Safe to share.
* Uploaded to GitHub.

---

## Authentication Flow

```text
Your Computer
      │
Private Key
      │
      ▼
GitHub
      ▲
Public Key
```

If both keys match, GitHub authenticates the user.

---

# ⚛️ React Fundamentals

## React Application Flow

```text
index.html
      │
      ▼
<div id="root">
      │
      ▼
main.jsx
      │
      ▼
<App />
      │
      ▼
Components
```

---

## main.jsx

Responsibilities:

* Entry point of the React application
* Creates the React root
* Renders the root component (`App`)

---

## App.jsx

Responsibilities:

* Root component
* Organizes the application's UI
* Contains or renders child components

---

# ⚡ Vite

## Purpose

A modern frontend build tool that provides a fast development experience.

### Advantages

* Fast startup
* Hot Module Replacement (HMR)
* Faster builds than Create React App
* Better developer experience

---

# 🎨 Tailwind CSS

## Definition

A utility-first CSS framework.

Example:

Instead of writing:

```css
.card{
    padding:16px;
}
```

Use:

```html
<div class="p-4"></div>
```

---

## Advantages

* Faster UI development
* Consistent design system
* No class naming conflicts
* Smaller production CSS

---

## Disadvantage

Utility classes can become long in JSX.

---

# 📦 npm Commands

## npm install

Purpose:

* Reads `package.json`
* Downloads project dependencies
* Creates `node_modules`
* Generates `package-lock.json`

---

## npm run dev

Purpose:

* Starts the Vite development server
* Enables Hot Module Replacement
* Runs the application locally

---

# 📁 Important Files

## package.json

Contains:

* Project metadata
* Scripts
* Dependencies

---

## package-lock.json

Locks dependency versions to ensure consistency across environments.

---

## node_modules

Contains all installed packages.

* Do not edit manually.
* Do not upload to GitHub.

---

## index.css

Global stylesheet.

Responsibilities:

* Imports Tailwind CSS
* Defines global styles
* Applies application-wide styling

---

# 💬 Interview Questions Covered

### 1. What is a Monorepo?

A single Git repository containing multiple related projects.

---

### 2. Difference between `git add` and `git commit`

* `git add` stages changes.
* `git commit` creates a snapshot of staged changes.

---

### 3. Difference between `npm install` and `npm run dev`

* `npm install` downloads dependencies.
* `npm run dev` starts the local development server.

---

### 4. What does `main.jsx` do?

It is the entry point of the React application and renders the root component.

---

### 5. What does `App.jsx` do?

It is the root component responsible for organizing the application's UI.

---

### 6. Why Tailwind CSS?

* Faster development
* Utility-first approach
* Consistent UI
* Improved productivity

---

### 7. What is SSH?

SSH (Secure Shell) is a secure protocol that authenticates communication using public and private keys.

---

# 📌 Git Commands Used

```bash
git init
git status
git add .
git commit -m "Initial project setup"
git push
```

---

# 💡 Key Takeaways

* Git follows the workflow:
  Working Directory → Staging Area → Local Repository → GitHub.
* SSH provides secure authentication without passwords.
* `main.jsx` starts the React application.
* `App.jsx` is the root component.
* Vite improves the development experience with HMR.
* Tailwind CSS speeds up UI development using utility classes.

---

# 📈 Session Outcome

## Skills Practiced

* Git
* GitHub
* SSH
* React
* Vite
* Tailwind CSS

---

## Milestone Achieved

✅ The DevTrack project foundation has been successfully established and is ready for feature development.

---

# 🚀 Next Session Preview

## Session 2 – Frontend Architecture

### Goal

Build the frontend structure for the application.

### Planned Deliverables

* Production-ready `src` folder structure
* React Router setup
* Navbar
* Sidebar
* Dashboard layout
* Placeholder pages
* Routing between pages
* Git commit
* Git push

### Concepts to Learn

* Components
* Pages vs Layouts
* React Router
* Folder organization
* Reusable UI structure

---

# 📝 Personal Notes

> Session 1 focused on building a strong project foundation rather than implementing features. The emphasis was on understanding the purpose of each tool (Git, SSH, React, Vite, Tailwind) so future development can proceed on a clean and maintainable architecture.
