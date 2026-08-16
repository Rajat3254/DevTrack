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
│   │   │   │   └── ProjectCard.jsx
│   │   │   │
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

* Initialized the DevTrack project.
* Configured Git.
* Configured GitHub SSH authentication.
* Created the React application using Vite.
* Installed and configured Tailwind CSS.
* Created the first React page.
* Established the project documentation structure.

---

# Session 2 - Frontend Architecture & Routing

## Completed

* Created professional frontend folder architecture.
* Created route-level pages:

    * Dashboard
    * Projects
    * Tasks
    * NotFound
* Created shared `MainLayout`.
* Integrated React Router.
* Implemented nested routing.
* Used React Router `Outlet`.
* Centralized application routes.
* Added 404 route handling.
* Added project documentation.

## Concepts Learned

* Pages vs Components.
* Layout architecture.
* `BrowserRouter`, `Routes`, and `Route`.
* Nested routing.
* `Outlet`.
* JavaScript modules.
* Default vs named exports.
* Debugging package installation issues.

---

# Session 3 - Navigation & Layout Components

## Completed

* Created reusable Navbar component.
* Created reusable Sidebar component.
* Created reusable Footer component.
* Added Dashboard, Projects, and Tasks navigation.
* Added active route highlighting using `NavLink`.
* Added component-specific CSS.
* Created a Flexbox-based application layout.
* Added responsive layout behavior.
* Added responsive Sidebar navigation.
* Added shared CSS styling for navigation states.
* Added `box-sizing: border-box`.
* Implemented full-height application layout.
* Configured full-width `#root`.

## Concepts Learned

* `Link` vs `NavLink`.
* Active route detection using `isActive`.
* Component composition.
* Semantic HTML.
* `nav`, `main`, and `footer`.
* Flexbox.
* `display: flex`.
* `flex-direction`.
* `flex`.
* `gap`.
* Responsive design.
* Media queries.
* Shared CSS selectors.
* `box-sizing: border-box`.
* Separation of concerns between Layout and Pages.

---

# Session 4 - Reusable UI Components

## Completed

* Created reusable `Button` component.
* Created reusable `Card` component.
* Created reusable `Badge` component.
* Created reusable `Input` component.
* Added component props.
* Added props destructuring.
* Added default prop values.
* Added Button variants.
* Added Badge status variants.
* Added `children` support to Card.
* Added controlled Input behavior.
* Used reusable components inside the Projects page.
* Practiced component composition.
* Separated generic UI components from page-specific logic.
* Refactored variant styling using lookup objects.
* Verified the production build successfully.

## Reusable Components

### Button

Supports:

* `text`
* `variant`
* `primary`
* `secondary`
* `danger`

### Card

Supports:

* `children`

Allows arbitrary content to be composed inside the Card.

### Badge

Supports:

* `text`
* `status`
* `active`
* `completed`
* `pending`
* `progress`

### Input

Supports:

* `type`
* `placeholder`
* `value`
* `onChange`

Used as a controlled React input.

## Concepts Learned

* Props.
* Props destructuring.
* Default prop values.
* JSX expressions using `{}`.
* `children`.
* Component variants.
* Lookup objects for styling.
* Event handler props.
* `useState`.
* Controlled inputs.
* `event.target.value`.
* Component composition.
* Separation of concerns.
* Reusable UI architecture.

---

# Session 5 - Dynamic Data & List Rendering

## Completed

* Converted project information into an array of objects.
* Implemented dynamic project rendering using JavaScript `.map()`.
* Rendered multiple project cards dynamically.
* Added unique React `key` values using project IDs.
* Passed project data dynamically through props.
* Passed complete project objects as props.
* Implemented dynamic Badge status rendering.
* Reused the existing Button component inside project cards.
* Reused the existing Card component.
* Reused the existing Badge component.
* Created the reusable `ProjectCard` domain component.
* Composed `ProjectCard` using `Card`, `Badge`, and `Button`.
* Separated generic UI components from project-specific UI logic.
* Practiced object props.
* Practiced props destructuring.
* Verified the production build successfully.

## Project Data

Projects are represented as an array of objects:

```js
const projects = [
    {
        id: 1,
        name: "Project 1",
        status: "active"
    },
    {
        id: 2,
        name: "Project 2",
        status: "pending"
    },
    {
        id: 3,
        name: "Project 3",
        status: "completed"
    }
];
```

Each project contains its own:

* `id`
* `name`
* `status`

Adding another project only requires adding another object to the array.

---

## Static vs Dynamic UI

A static approach manually repeats UI:

```jsx
<Card>
    <h2>Project 1</h2>
</Card>

<Card>
    <h2>Project 2</h2>
</Card>

<Card>
    <h2>Project 3</h2>
</Card>
```

The dynamic approach stores information as data:

```js
const projects = [
    {
        id: 1,
        name: "Project 1"
    },
    {
        id: 2,
        name: "Project 2"
    },
    {
        id: 3,
        name: "Project 3"
    }
];
```

The UI is then generated from that data.

The architectural idea is:

```text
Data
    ↓
UI transformation
    ↓
Rendered components
```

This improves scalability because adding a project requires changing the data rather than manually creating another JSX block.

---

## JavaScript `.map()`

`.map()` is used to transform every element of an array into a new value.

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);
```

Result:

```js
[2, 4, 6]
```

The callback receives the current array element.

For an array of projects:

```js
projects.map(project => ...)
```

`project` represents the current project object.

`.map()` returns a new array and does not modify the original array.

---

## Rendering Lists in React

React can use `.map()` to generate multiple React elements:

```jsx
{projects.map(project => (
    <Card>
        <h2>{project.name}</h2>
    </Card>
))}
```

The flow is:

```text
Array of data
      ↓
.map()
      ↓
Array of React elements
      ↓
Rendered UI
```

If the array contains three projects, `.map()` produces three rendered project elements.

---

## React `key`

When rendering a list, React needs a stable `key` for each item.

Example:

```jsx
{projects.map(project => (
    <Card key={project.id}>
        <h2>{project.name}</h2>
    </Card>
))}
```

The `key` allows React to identify individual list items when the list changes.

A unique project ID is preferred:

```jsx
key={project.id}
```

instead of relying on the array index:

```jsx
key={index}
```

The array index represents the item's position, which can change when items are added, removed, or reordered.

The project ID represents the identity of the project and should remain stable.

---

## Dynamic Props

Project data can be passed into reusable components dynamically.

Example:

```jsx
<Badge
    text={project.status}
    status={project.status}
/>
```

The data flow is:

```text
Project Data
     ↓
Dynamic Props
     ↓
Reusable Component
     ↓
Dynamic UI
```

If the status changes from:

```text
active
```

to:

```text
completed
```

the Badge receives the new value automatically.

---

## Dynamic Project List

The Projects page now renders projects dynamically:

```jsx
{projects.map(p => (
    <ProjectCard
        key={p.id}
        project={p}
    />
))}
```

Adding another project:

```js
{
    id: 4,
    name: "New Project",
    status: "active"
}
```

automatically produces another project card.

No additional JSX block is required.

---

## ProjectCard

A domain-specific `ProjectCard` component was created:

```text
components/
└── common/
    └── ProjectCard.jsx
```

`ProjectCard` composes existing generic UI components:

```text
ProjectCard
│
├── Card
├── Badge
└── Button
```

The component receives project data through props:

```jsx
<ProjectCard project={project} />
```

Example implementation:

```jsx
function ProjectCard({ project }) {
    return (
        <Card>
            <h2>{project.name}</h2>
            <Badge
                text={project.status}
                status={project.status}
            />
            <Button text="View Project" />
        </Card>
    );
}
```

`ProjectCard` contains project-specific UI composition while the generic components remain reusable.

---

## Object Props

An entire object can be passed as a prop:

```jsx
<ProjectCard project={project} />
```

Here, `project` is the JavaScript object.

For example:

```js
const project = {
    id: 1,
    name: "DevTrack",
    status: "active"
};
```

Inside `ProjectCard`, the object can be accessed through:

```jsx
props.project
```

This is different from:

```jsx
<ProjectCard project="project" />
```

The first passes the JavaScript object.

The second passes the literal string `"project"`.

---

## Props Destructuring

Without destructuring:

```jsx
function ProjectCard(props) {
    return <h2>{props.project.name}</h2>;
}
```

With destructuring:

```jsx
function ProjectCard({ project }) {
    return <h2>{project.name}</h2>;
}
```

The `{ project }` syntax extracts the `project` property from the props object.

This allows direct access to:

```jsx
project.name
project.status
```

instead of:

```jsx
props.project.name
props.project.status
```

---

## Component Composition With Dynamic Data

Session 4 established reusable generic components:

```text
Button
Card
Badge
Input
```

Session 5 builds a domain-specific component on top of them:

```text
ProjectCard
│
├── Card
├── Badge
└── Button
```

The Projects page provides the data:

```text
Projects
    │
    │ project data
    ▼
ProjectCard
    │
    ├── Card
    ├── Badge
    └── Button
```

This allows the same reusable components to work with different project data.

---

## Data/UI Separation

The Projects page owns project data:

```js
const projects = [
    {
        id: 1,
        name: "Project 1",
        status: "active"
    }
];
```

The `ProjectCard` owns project-specific UI composition.

Generic components remain independent:

```text
Button
Card
Badge
Input
```

This keeps responsibilities separated:

```text
Data
  ↓
Projects Page
  ↓
ProjectCard
  ↓
Generic UI Components
```

This architecture improves maintainability and makes components easier to reuse.

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

## Array `.map()`

`.map()` transforms each item in an array and returns a new array.

Example:

```js
const names = ["Rajat", "Aman", "Rahul"];

const lengths = names.map(name => name.length);
```

Result:

```js
[5, 4, 5]
```

In React, `.map()` is commonly used for list rendering:

```jsx
{projects.map(project => (
    <ProjectCard
        key={project.id}
        project={project}
    />
))}
```

---

## React Keys

Keys provide stable identity to elements rendered from a list.

Example:

```jsx
<ProjectCard
    key={project.id}
    project={project}
/>
```

The `key` is primarily for React's internal reconciliation process.

It should be:

* Unique among sibling elements.
* Stable.
* Associated with the identity of the item.

---

## Dynamic Props

Dynamic props allow data to flow from arrays or objects into reusable components.

Example:

```jsx
<Badge
    text={project.status}
    status={project.status}
/>
```

The component receives different values depending on the current project.

---

## Object Props

A complete object can be passed as a prop:

```jsx
<ProjectCard project={project} />
```

The receiving component can access:

```jsx
project.name
project.status
```

after destructuring.

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

Session 5 extends this pattern through:

```text
ProjectCard
├── Card
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

The data-driven architecture now follows:

```text
Project Data
    ↓
Projects Page
    ↓
ProjectCard
    ↓
Generic UI Components
```

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
git commit -m "feat: add dynamic project rendering"
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

## Session 5

Dynamic project rendering and data-driven component architecture established.

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

The architectural progression is:

```text
Static JSX
    ↓
Reusable Components
    ↓
Data Arrays
    ↓
.map()
    ↓
Dynamic Props
    ↓
Composed Components
    ↓
Data-Driven UI
```
