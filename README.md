# DevTrack

DevTrack is a frontend project management application built with React, Vite, and Tailwind CSS.

The project is being developed session-by-session to build a professional frontend architecture while learning React concepts through practical implementation.

---

# Project Structure

```text
DevTrack/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   │   ├── MainLayout.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── Button.jsx
│   │   │       ├── Card.jsx
│   │   │       ├── Badge.jsx
│   │   │       └── Input.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   ├── Projects/
│   │   │   ├── Tasks/
│   │   │   └── NotFound/
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── context/
│   │   ├── constants/
│   │   ├── routes/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
└── docs/
```

---

# Session 1 - Project Setup

## Completed

- Initialized the DevTrack project.
- Configured Git.
- Configured GitHub SSH authentication.
- Created the React application using Vite.
- Installed and configured Tailwind CSS.
- Created the first React page.
- Established the project documentation structure.

---

# Session 2 - Frontend Architecture & Routing

## Completed

- Created professional frontend folder architecture.
- Created route-level pages:
    - Dashboard
    - Projects
    - Tasks
    - NotFound
- Created shared `MainLayout`.
- Integrated React Router.
- Implemented nested routing.
- Used React Router `Outlet`.
- Centralized application routes.
- Added 404 route handling.
- Added project documentation.

## Concepts Learned

- Pages vs Components.
- Layout architecture.
- `BrowserRouter`, `Routes`, and `Route`.
- Nested routing.
- `Outlet`.
- JavaScript modules.
- Default vs named exports.
- Debugging package installation issues.

---

# Session 3 - Navigation & Layout Components

## Completed

- Created reusable Navbar component.
- Created reusable Sidebar component.
- Created reusable Footer component.
- Added Dashboard, Projects, and Tasks navigation.
- Added active route highlighting using `NavLink`.
- Added component-specific CSS.
- Created a Flexbox-based application layout.
- Added responsive layout behavior.
- Added responsive Sidebar navigation.
- Added shared CSS styling for navigation states.
- Added `box-sizing: border-box`.
- Implemented full-height application layout.
- Configured full-width `#root`.

## Concepts Learned

- `Link` vs `NavLink`.
- Active route detection using `isActive`.
- Component composition.
- Semantic HTML.
- `nav`, `main`, and `footer`.
- Flexbox.
- `display: flex`.
- `flex-direction`.
- `flex`.
- `gap`.
- Responsive design.
- Media queries.
- Shared CSS selectors.
- `box-sizing: border-box`.
- Separation of concerns between Layout and Pages.

---

# Session 4 - Reusable UI Components

## Completed

- Created reusable `Button` component.
- Created reusable `Card` component.
- Created reusable `Badge` component.
- Created reusable `Input` component.
- Added component props.
- Added props destructuring.
- Added default prop values.
- Added Button variants.
- Added Badge status variants.
- Added `children` support to Card.
- Added controlled Input behavior.
- Used reusable components inside the Projects page.
- Practiced component composition.
- Separated generic UI components from page-specific logic.
- Refactored variant styling using lookup objects.
- Verified the production build successfully.

## Reusable Components

### Button

Supports:

- `text`
- `variant`
- `primary`
- `secondary`
- `danger`

### Card

Supports:

- `children`

Allows arbitrary content to be composed inside the Card.

### Badge

Supports:

- `text`
- `status`
- `active`
- `completed`
- `pending`
- `progress`

### Input

Supports:

- `type`
- `placeholder`
- `value`
- `onChange`

Used as a controlled React input.

## Concepts Learned

- Props.
- Props destructuring.
- Default prop values.
- JSX expressions using `{}`.
- `children`.
- Component variants.
- Lookup objects for styling.
- Event handler props.
- `useState`.
- Controlled inputs.
- `event.target.value`.
- Component composition.
- Separation of concerns.
- Reusable UI architecture.

---

# Tailwind CSS

DevTrack uses Tailwind CSS v4 with Vite.

## Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

## Vite Configuration

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## CSS Import

Tailwind is imported through the main CSS file:

```css
@import "tailwindcss";
```

## Tailwind Setup Flow

```text
package.json
     │
     ├── tailwindcss
     └── @tailwindcss/vite
              │
              ▼
       vite.config.js
              │
              └── tailwindcss()
                     │
                     ▼
                 Vite
                     │
                     ▼
                index.css
                     │
                     └── @import "tailwindcss"
                              │
                              ▼
                     React Components
```

---

# Important React Patterns

## Props

Props allow a component to receive data from its parent.

Example:

```jsx
<Button text="Create Project" />
```

Inside the component:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

---

## Props Destructuring

Instead of:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

we can use:

```jsx
function Button({ text }) {
  return <button>{text}</button>
}
```

---

## Default Props

A default value can be provided during destructuring:

```jsx
function Button({ text, variant = "primary" }) {
```

If `variant` isn't provided, it automatically becomes `"primary"`.

---

## Children

Content placed between a component's opening and closing tags is available through `children`.

Example:

```jsx
<Card>
  <h2>Project 1</h2>
</Card>
```

Inside Card:

```jsx
function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
```

---

## Component Variants

Props can control a component's visual state.

Example:

```jsx
<Button text="Delete" variant="danger" />
```

A lookup object can map variants to styles:

```js
const buttonStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white",
}
```

Then:

```jsx
className={buttonStyles[variant]}
```

---

## Controlled Inputs

A controlled input receives its value from React state.

Example:

```jsx
const [projectName, setProjectName] = useState("")
```

The Input receives:

```jsx
<Input
  value={projectName}
  onChange={handleChange}
/>
```

The handler updates the state:

```jsx
function handleChange(event) {
  setProjectName(event.target.value)
}
```

The flow is:

```text
User types
    ↓
onChange
    ↓
handleChange(event)
    ↓
event.target.value
    ↓
setProjectName(...)
    ↓
projectName updates
    ↓
Input receives new value
```

---

# Component Composition

Reusable components can be combined to create larger UI structures.

Example:

```jsx
<Card>
  <h2>Project 1</h2>
  <Badge text="Active" status="active" />
  <Button text="View Project" />
</Card>
```

This creates:

```text
Card
├── h2
├── Badge
└── Button
```

The Card remains generic and does not need to know what a Project is.

---

# Separation of Concerns

Generic UI components:

```text
Button
Card
Badge
Input
```

should remain independent from application-specific concepts.

Page or domain components can contain project-specific logic:

```text
Projects
ProjectCard
TaskCard
Dashboard
```

This keeps reusable components flexible and maintainable.

---

# Development Workflow

Run the frontend from the `frontend` directory:

```bash
cd frontend
npm run dev
```

Build the application:

```bash
npm run build
```

Check Git status:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "feat: build reusable UI components"
```

Push changes:

```bash
git push
```

---

# Session Milestones

## Session 1

Project setup and development environment established.

## Session 2

Frontend architecture and routing established.

## Session 3

Navigation and application layout completed.

## Session 4

Reusable UI component library established.

---

# Learning Approach

DevTrack is developed incrementally.

Each session focuses on:

1. Learning the required concepts.
2. Thinking through the problem before implementation.
3. Implementing concepts independently.
4. Reviewing and improving the code.
5. Updating project documentation.
6. Creating a Git milestone.
7. Pushing completed work to GitHub.