# DevTrack - Session 5

## Topic

Dynamic Data & List Rendering

---

# Objective

The objective of Session 5 was to move DevTrack from static UI toward a dynamic, data-driven React interface.

The session focused on:

* Representing UI information as data.
* Using JavaScript `.map()` for list rendering.
* Rendering multiple React components dynamically.
* Understanding the React `key` prop.
* Passing dynamic data through props.
* Passing complete objects as props.
* Separating data from UI.
* Creating a domain-specific `ProjectCard` component.
* Reusing the generic UI components created in Session 4.

The main architectural progression was:

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

---

# Previous Progress

## Session 1 - Project Setup

Completed:

* Project initialization.
* Git and GitHub workflow.
* React + Vite setup.
* Tailwind CSS integration.
* Initial project documentation.

## Session 2 - Frontend Architecture & Routing

Completed:

* Professional frontend architecture.
* Pages vs Components.
* Shared layout.
* React Router.
* Nested routing.
* `Outlet`.
* JavaScript modules.
* Default and named exports.
* Project documentation.

## Session 3 - Navigation & Layout Components

Completed:

* Navbar.
* Sidebar.
* Footer.
* Navigation using `Link` and `NavLink`.
* Active route highlighting.
* Semantic HTML.
* Flexbox layout.
* Responsive layout.
* Component-specific CSS.
* Shared CSS selectors.
* Full-height application layout.

## Session 4 - Reusable UI Components

Completed:

* `Button`
* `Card`
* `Badge`
* `Input`
* Props.
* Props destructuring.
* Default props.
* `children`.
* Component variants.
* Lookup objects.
* Event handler props.
* `useState`.
* Controlled inputs.
* Component composition.
* Separation of concerns.
* Tailwind CSS v4 with Vite.
* Production build verification.

---

# Session 5 Concepts Learned

## 1. Static vs Dynamic UI

A static UI manually repeats JSX:

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

This becomes difficult to maintain as the number of projects grows.

A dynamic UI stores project information as data:

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

The UI can then be generated from this data.

The main idea is:

```text
Data
    ↓
UI transformation
    ↓
Rendered components
```

Adding another project only requires adding another object to the data.

---

# 2. JavaScript `.map()`

`.map()` transforms each element of an array and returns a new array.

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

For example:

```js
const names = ["Rajat", "Aman", "Rahul"];

const result = names.map(name => name.length);
```

Result:

```js
[5, 4, 5]
```

Important points:

* `.map()` runs once for every element.
* The callback receives the current element.
* `.map()` returns a new array.
* The original array is not modified.

---

# 3. Rendering Lists in React

React can use `.map()` to generate multiple React elements.

Example:

```jsx
{projects.map(project => (
    <Card>
        <h2>{project.name}</h2>
    </Card>
))}
```

If there are three projects, the callback runs three times and produces three React elements.

The flow is:

```text
Array of project objects
        ↓
      .map()
        ↓
Current project object
        ↓
React element
        ↓
Rendered UI
```

---

# 4. React `key`

When rendering lists, React requires a `key` for each sibling item.

Example:

```jsx
{projects.map(project => (
    <Card key={project.id}>
        <h2>{project.name}</h2>
    </Card>
))}
```

The `key` gives React a stable identity for the item.

A project ID is preferred:

```jsx
key={project.id}
```

over an array index:

```jsx
key={index}
```

The reason is that array indexes represent positions rather than identity.

For example:

```text
Before:

index 0 → DevTrack
index 1 → StoryNest
index 2 → Expense Tracker
```

If StoryNest is removed:

```text
After:

index 0 → DevTrack
index 1 → Expense Tracker
```

Expense Tracker changed its index even though it is still the same project.

A stable project ID avoids this problem.

---

# 5. Dynamic Props

Dynamic props allow data to flow from the current project object into reusable components.

Example:

```jsx
<Badge
    text={project.status}
    status={project.status}
/>
```

The flow is:

```text
Project data
     ↓
project.status
     ↓
Badge props
     ↓
Dynamic Badge UI
```

If the project's status changes, the Badge receives the new value automatically.

---

# 6. Dynamic Project List

The Projects page was converted from manually written project cards into a dynamic project list.

The project data is:

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

The Projects page renders them using:

```jsx
{projects.map(p => (
    <ProjectCard
        key={p.id}
        project={p}
    />
))}
```

Adding:

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

# 7. Dynamic Badge

The existing `Badge` component is reused with dynamic project status.

```jsx
<Badge
    text={project.status}
    status={project.status}
/>
```

The Projects page does not need to know the Tailwind classes used by the Badge.

The Badge remains responsible for its own visual status styling.

This preserves separation of concerns.

---

# 8. Dynamic Button

The existing Button component is reused inside every dynamically generated project card.

```jsx
<Button text="View Project" />
```

Because the Button is inside `ProjectCard`, every project automatically receives its own View Project button.

For three projects:

```text
Project 1 → View Project
Project 2 → View Project
Project 3 → View Project
```

The Button component itself remains generic.

---

# 9. Data/UI Separation

The Projects page owns the project data:

```js
const projects = [
    {
        id: 1,
        name: "Project 1",
        status: "active"
    }
];
```

The page also performs the list transformation:

```jsx
{projects.map(p => (
    <ProjectCard
        key={p.id}
        project={p}
    />
))}
```

The `ProjectCard` component owns project-specific UI composition.

Generic components remain independent:

```text
Button
Card
Badge
Input
```

The architecture becomes:

```text
Project Data
    ↓
Projects Page
    ↓
.map()
    ↓
ProjectCard
    ↓
Card + Badge + Button
    ↓
Rendered UI
```

---

# 10. ProjectCard

A reusable domain-specific component was created:

```text
src/
└── components/
    └── common/
        └── ProjectCard.jsx
```

Its responsibility is to represent a project using existing generic UI components.

The structure is:

```text
ProjectCard
│
├── Card
├── Badge
└── Button
```

Implementation:

```jsx
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

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

export default ProjectCard;
```

The component does not contain the entire projects array.

The project data remains owned by the Projects page.

---

# 11. Object Props

A complete project object is passed as a prop:

```jsx
<ProjectCard project={project} />
```

For example:

```js
const project = {
    id: 1,
    name: "DevTrack",
    status: "active"
};
```

The entire object is passed to `ProjectCard`.

This is different from:

```jsx
<ProjectCard project="project" />
```

The first passes a JavaScript object.

The second passes the literal string `"project"`.

---

# 12. Props Destructuring

Without destructuring:

```jsx
function ProjectCard(props) {
    return (
        <h2>
            {props.project.name}
        </h2>
    );
}
```

With destructuring:

```jsx
function ProjectCard({ project }) {
    return (
        <h2>
            {project.name}
        </h2>
    );
}
```

The `{ project }` syntax extracts the `project` property from the props object.

This builds on the props destructuring concepts learned in Session 4.

---

# 13. Component Composition

Session 5 extends the component composition architecture created in Session 4.

Generic components:

```text
Button
Card
Badge
Input
```

Domain-specific component:

```text
ProjectCard
```

Page:

```text
Projects
```

The hierarchy is:

```text
Projects
    │
    └── ProjectCard
            │
            ├── Card
            ├── Badge
            └── Button
```

This keeps generic components reusable while allowing domain-specific components to compose them.

---

# Final Project Architecture

The architecture after Session 5 is:

```text
src/
│
├── components/
│   ├── common/
│   │   └── ProjectCard.jsx
│   │
│   ├── layout/
│   │   ├── MainLayout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       └── Input.jsx
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

# Session Insights

## 1. Data drives the UI

Instead of manually repeating JSX, store information as data and let React render the UI.

```text
Data
 ↓
.map()
 ↓
Components
 ↓
UI
```

---

## 2. `.map()` is fundamental to React list rendering

`.map()` allows an array of data to become an array of React elements.

This is one of the most common patterns used in React applications.

---

## 3. Keys represent identity

The `key` is not the same as a normal prop.

```jsx
key={project.id}
```

is primarily used by React to identify list elements.

Meanwhile:

```jsx
project={project}
```

passes actual application data to the component.

Their purposes are different.

---

## 4. Generic vs domain-specific components

`Card`, `Badge`, and `Button` should remain generic.

`ProjectCard` understands what a project looks like.

This creates a useful separation:

```text
Generic UI
    ↓
Domain Component
    ↓
Page
```

---

## 5. Objects can be passed through props

Instead of passing many individual values:

```jsx
<ProjectCard
    name={project.name}
    status={project.status}
/>
```

the complete object can be passed:

```jsx
<ProjectCard project={project} />
```

The component can then destructure the object.

---

# Interview Questions

## Question 1

What is the difference between static UI and dynamic UI?

### Answer

Static UI manually repeats JSX for every item.

Dynamic UI stores information as data and generates the UI from that data.

---

## Question 2

What does `.map()` return?

### Answer

`.map()` returns a new array containing the values returned by its callback.

---

## Question 3

Why is `.map()` commonly used in React?

### Answer

It allows an array of data to be transformed into an array of React elements for list rendering.

---

## Question 4

Why does React require a `key` when rendering lists?

### Answer

The key gives React a stable identity for each list item so it can efficiently determine which items changed, were added, or were removed.

---

## Question 5

Why is an object ID generally better than an array index as a key?

### Answer

An ID represents the identity of the item, while an array index represents its current position. Positions can change when items are added, removed, or reordered.

---

## Question 6

What is the difference between:

```jsx
<ProjectCard
    key={project.id}
    project={project}
/>
```

### Answer

`key` is used by React for list reconciliation.

`project` is a normal prop used by `ProjectCard` to receive application data.

---

## Question 7

What does this mean?

```jsx
function ProjectCard({ project }) {
```

### Answer

It destructures the `project` property from the props object.

---

## Question 8

Why should a generic `Card` component not contain project-specific data?

### Answer

Because `Card` is a reusable UI component. Project-specific logic belongs in a domain component such as `ProjectCard`.

---

## Question 9

What is component composition?

### Answer

Component composition means building larger components by combining smaller reusable components.

For example:

```text
ProjectCard
├── Card
├── Badge
└── Button
```

---

# Key Takeaways

By the end of Session 5:

* Static UI was converted into dynamic UI.
* Project information is represented as an array of objects.
* `.map()` is understood and used.
* React list rendering is understood.
* Unique React keys are used.
* Dynamic props are understood.
* Complete objects can be passed as props.
* Props destructuring is understood.
* Generic UI components are reused.
* `ProjectCard` acts as a domain-specific composition component.
* Data and UI responsibilities are separated.
* Adding a project now requires adding data rather than manually creating JSX.

---

# Session Deliverables

## Code

* Dynamic `projects` array.
* Dynamic project list.
* Unique project keys.
* Dynamic Badge status.
* Dynamic project cards.
* Reusable `ProjectCard`.
* Object props.
* Props destructuring.

## Documentation

* Updated `README.md`.
* Updated `CHANGELOG.md`.
* Created `docs/session-05.md`.

## Verification

Production build completed successfully:

```bash
npm run build
```

The Projects page was verified in the browser.

Dynamic project cards rendered successfully.

---

# Git Information

## Commit Message

```bash
git commit -m "feat: add dynamic project rendering"
```

## Git Workflow

From the project root:

```bash
git status
```

Review the changes.

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add dynamic project rendering"
```

Push:

```bash
git push
```

---

# Session 5 Milestone

Session 5 successfully moved DevTrack from reusable static UI components to a data-driven React architecture.

The final progression is:

```text
Static JSX
    ↓
Reusable Components
    ↓
Data Arrays
    ↓
.map()
    ↓
React List Rendering
    ↓
Unique Keys
    ↓
Dynamic Props
    ↓
Object Props
    ↓
ProjectCard
    ↓
Component Composition
    ↓
Data-Driven UI
```

Session 5 is complete when the documentation is committed and the changes are pushed to GitHub.
