# DevTrack - Session 4

## Topic

Building Reusable UI Components

---

# Session Objective

Build a small reusable UI component library for DevTrack and understand how React components can be designed to be flexible, maintainable, reusable, and composable.

The session focused on:

- React props.
- Props destructuring.
- Default prop values.
- `children`.
- Component variants.
- Event handler props.
- Controlled inputs.
- Component composition.
- Separation of concerns.
- Reusable UI architecture.

---

# Components Created

The following reusable UI components were created:

```text
src/
└── components/
    └── ui/
        ├── Button.jsx
        ├── Card.jsx
        ├── Badge.jsx
        └── Input.jsx
```

---

# 1. Button Component

## Purpose

The Button component provides a reusable button that can be used throughout the application with different text and visual variants.

Example:

```jsx
<Button text="Create Project" />
<Button text="Save" variant="secondary" />
<Button text="Delete" variant="danger" />
```

## Props

The Button accepts:

- `text`
- `variant`

The `variant` prop has a default value:

```jsx
variant = "primary"
```

## Button Variants

```text
primary
secondary
danger
```

## Lookup Object

Button styles are mapped using a lookup object:

```js
const buttonStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white"
};
```

The selected variant is accessed using:

```js
buttonStyles[variant]
```

This approach is easier to maintain than nested ternary expressions.

---

# 2. Card Component

## Purpose

The Card component provides a reusable container for different types of content.

Example:

```jsx
<Card>
  <h2>Project 1</h2>
</Card>
```

The Card does not contain project-specific logic.

Instead, it accepts arbitrary content through the `children` prop.

## Children

React automatically passes content placed between the opening and closing component tags as `children`.

Example:

```jsx
<Card>
  <h2>Project 1</h2>
</Card>
```

Inside the Card:

```jsx
function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```

The flow is:

```text
<Card>
    content
</Card>
       ↓
props.children
       ↓
content rendered inside Card
```

---

# 3. Badge Component

## Purpose

The Badge component displays small status indicators.

Examples:

```jsx
<Badge text="Active" status="active" />
<Badge text="Completed" status="completed" />
<Badge text="Pending" status="pending" />
<Badge text="In Progress" status="progress" />
```

## Props

The Badge accepts:

- `text`
- `status`

## Status Variants

```text
active
completed
pending
progress
```

## Lookup Object

Status styles are mapped using:

```js
const badgeStyles = {
  active: "bg-green-500",
  completed: "bg-blue-500",
  pending: "bg-yellow-500",
  progress: "bg-purple-500"
};
```

The selected style is retrieved using:

```js
badgeStyles[props.status]
```

---

# 4. Input Component

## Purpose

The Input component provides a reusable wrapper around the HTML `<input>` element.

It supports:

- `type`
- `placeholder`
- `value`
- `onChange`

Example:

```jsx
<Input
  type="text"
  placeholder="Enter project name"
  value={projectName}
  onChange={handleChange}
/>
```

## Props Forwarding

The reusable Input forwards its props to the native HTML input:

```jsx
<input
  type={props.type}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.onChange}
/>
```

This allows the parent component to control the input.

---

# Controlled Input

A controlled input is an input whose value is controlled by React state.

The Projects page uses:

```jsx
const [projectName, setProjectName] = useState("");
```

The Input receives:

```jsx
<Input
  value={projectName}
  onChange={handleChange}
/>
```

The change handler is:

```jsx
function handleChange(event) {
  setProjectName(event.target.value);
}
```

## Controlled Input Flow

```text
User types
    ↓
<input> fires onChange
    ↓
handleChange(event)
    ↓
event.target.value
    ↓
setProjectName(...)
    ↓
projectName state updates
    ↓
React re-renders
    ↓
Input receives new value
```

The important distinction is:

```text
useState
    ↓
stores state

onChange
    ↓
detects user input

event.target.value
    ↓
gets the current input value

setProjectName()
    ↓
updates state

value={projectName}
    ↓
controls the displayed input value
```

---

# Props

Props allow a parent component to pass data to a child component.

Example:

```jsx
<Button text="Create Project" />
```

The Button receives:

```jsx
props.text
```

Props make components reusable because the component does not need to hardcode its content.

---

# Props Destructuring

Instead of:

```jsx
function Button(props) {
  return <button>{props.text}</button>;
}
```

we can destructure:

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}
```

Destructuring extracts properties from the props object.

Conceptually:

```text
props
├── text
└── variant
```

Using:

```jsx
function Button({ text, variant }) {
```

extracts those properties directly.

---

# Default Prop Values

A default value can be assigned during destructuring:

```jsx
function Button({ text, variant = "primary" }) {
```

If the component is used as:

```jsx
<Button text="Create Project" />
```

then:

```text
variant → "primary"
```

If the component is used as:

```jsx
<Button text="Delete" variant="danger" />
```

then:

```text
variant → "danger"
```

---

# JSX Curly Braces

Curly braces in JSX allow JavaScript expressions to be evaluated.

Example:

```jsx
<Button text={projectName} />
```

Here `projectName` is a JavaScript variable.

Compare:

```jsx
<Button text="projectName" />
```

This passes the literal string:

```text
"projectName"
```

while:

```jsx
<Button text={projectName} />
```

passes the value stored in the variable.

General rule:

```text
"Rajat"
    ↓
literal string

name
    ↓
JavaScript variable

{name}
    ↓
evaluate JavaScript expression
```

---

# Component Variants

Reusable components can use props to control their appearance.

Example:

```jsx
<Button variant="danger" />
```

The component maps the variant to a style.

Instead of creating separate components:

```text
PrimaryButton
SecondaryButton
DangerButton
```

we can have:

```text
Button
```

with variants.

This reduces unnecessary components and keeps the API simple.

---

# Lookup Objects

Lookup objects were used for mapping variants and statuses to styles.

Example:

```js
const buttonStyles = {
  primary: "...",
  secondary: "...",
  danger: "..."
};
```

Then:

```js
buttonStyles[variant]
```

retrieves the correct value.

For example:

```js
buttonStyles["danger"]
```

returns the value associated with the `danger` property.

If a property doesn't exist:

```js
buttonStyles["unknown"]
```

returns:

```text
undefined
```

It does not automatically throw an error.

---

# Event Handler Props

Functions can be passed to components as props.

Example:

```jsx
<Input onChange={handleChange} />
```

The Input forwards the function:

```jsx
<input onChange={props.onChange} />
```

The reusable component does not need to know what should happen when the input changes.

The parent decides what the handler should do.

This supports separation of concerns.

---

# Component Composition

Components can be combined to create larger UI structures.

Example:

```jsx
<Card>
  <h2>Project 1</h2>
  <Badge text="Active" status="active" />
  <Button text="View Project" />
</Card>
```

Structure:

```text
Card
├── h2
├── Badge
└── Button
```

The Card does not need to know what content it contains.

It simply renders:

```jsx
{props.children}
```

This is component composition.

---

# Separation of Concerns

Generic UI components should remain independent from application-specific logic.

## Generic UI Components

```text
Button
Card
Badge
Input
```

These components should focus on:

- Presentation.
- Reusable behavior.
- Props.
- Variants.
- Composition.

They should not contain project-specific business logic.

## Page / Domain Components

Examples:

```text
Projects
ProjectCard
TaskCard
Dashboard
```

These can contain application-specific logic and data.

The distinction is:

```text
Generic UI
    ↓
How should this UI element look and behave?

Page / Domain
    ↓
What does this application-specific data mean?
```

---

# Projects Page Integration

The reusable components were used inside the Projects page.

The page now demonstrates:

```text
Projects
│
├── Button
├── Button
├── Button
│
├── Input
│
└── Card
    ├── Project title
    ├── Badge
    └── Button
```

Example:

```jsx
<Card>
  <h2>Project 1</h2>
  <Badge text="Active" status="active" />
  <Button text="View Project" />
</Card>
```

This demonstrates component composition using the reusable UI library.

---

# Tailwind CSS v4 Setup

Tailwind CSS was configured using the Vite plugin.

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

## CSS

The main CSS file imports Tailwind:

```css
@import "tailwindcss";
```

## Setup Flow

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

# Project Structure After Session 4

```text
DevTrack/
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
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
├── docs/
│   ├── session-01.md
│   ├── session-02.md
│   ├── session-03.md
│   └── session-04.md
│
├── README.md
└── CHANGELOG.md
```

---

# Session Insights

## 1. Reusability Comes From Good APIs

A component becomes reusable when it accepts the information it needs through props instead of hardcoding values.

Instead of:

```jsx
<button>Create Project</button>
```

inside the component, use:

```jsx
<Button text="Create Project" />
```

The same component can then display:

```jsx
<Button text="Save" />
<Button text="Delete" />
<Button text="View Project" />
```

---

## 2. `children` Makes Container Components Flexible

The Card component does not need to know what content it will contain.

It accepts:

```jsx
{props.children}
```

This allows:

```jsx
<Card>
  <h2>Project</h2>
</Card>
```

or:

```jsx
<Card>
  <Badge text="Active" status="active" />
</Card>
```

or:

```jsx
<Card>
  <h2>Project</h2>
  <Badge text="Active" status="active" />
  <Button text="View Project" />
</Card>
```

---

## 3. Parent Components Should Own Application State

The Input component does not own `projectName`.

The Projects page owns:

```jsx
const [projectName, setProjectName] = useState("");
```

and passes the state to Input.

This keeps the Input reusable.

---

## 4. Props Can Carry Both Data and Functions

Props can contain:

```text
strings
numbers
booleans
objects
arrays
functions
components
```

For example:

```jsx
<Input
  value={projectName}
  onChange={handleChange}
/>
```

Here:

```text
value
    → data

onChange
    → function
```

---

## 5. Lookup Objects Can Replace Complex Conditional Logic

Instead of:

```jsx
condition
  ? valueA
  : condition
    ? valueB
    : valueC
```

a lookup object can provide a cleaner mapping:

```js
const styles = {
  primary: "...",
  secondary: "...",
  danger: "..."
};
```

Then:

```js
styles[variant]
```

This is easier to extend and maintain.

---

# Interview Questions

## Question 1

What are props in React?

**Answer:**

Props are read-only values passed from a parent component to a child component. They allow components to receive dynamic data and behavior.

---

## Question 2

What is the `children` prop?

**Answer:**

`children` is a special React prop containing the content placed between a component's opening and closing tags.

Example:

```jsx
<Card>
  <h2>Project</h2>
</Card>
```

The `<h2>` becomes `props.children`.

---

## Question 3

What is the difference between props and state?

**Answer:**

Props are passed into a component by its parent, while state is managed by the component itself and can change over time.

---

## Question 4

What is a controlled input?

**Answer:**

A controlled input is an input whose value is controlled by React state.

Example:

```jsx
<input
  value={projectName}
  onChange={handleChange}
/>
```

---

## Question 5

Why do we use `event.target.value`?

**Answer:**

`event.target` refers to the element that triggered the event, and `event.target.value` gives the current value of the input element.

---

## Question 6

Why should generic UI components avoid page-specific logic?

**Answer:**

Keeping generic components independent makes them reusable across different pages and prevents tight coupling between UI components and application-specific business logic.

---

## Question 7

What is component composition?

**Answer:**

Component composition means combining smaller reusable components to create larger UI structures.

Example:

```text
ProjectCard
├── Card
├── Badge
└── Button
```

---

## Question 8

Why can a lookup object be better than nested ternary operators?

**Answer:**

A lookup object is easier to read and extend when there are multiple possible states or variants.

---

# Key Takeaways

- Props make React components reusable.
- Destructuring makes prop access cleaner.
- Default prop values provide sensible fallbacks.
- `{}` in JSX allows JavaScript expressions.
- `children` enables flexible container components.
- Component variants allow one component to support multiple visual states.
- Lookup objects can simplify conditional styling.
- Functions can be passed through props.
- Controlled inputs use React state to manage their values.
- `event.target.value` retrieves the current input value.
- Parent components should generally own application-specific state.
- Components should have clear responsibilities.
- Generic UI components should remain independent from page-specific logic.
- Small components can be composed into larger UI structures.
- Reusable components make applications easier to maintain and extend.

---

# Session Deliverables

## Components

- [x] `Button.jsx`
- [x] `Card.jsx`
- [x] `Badge.jsx`
- [x] `Input.jsx`

## Functionality

- [x] Props
- [x] Props destructuring
- [x] Default prop values
- [x] Button variants
- [x] Badge status variants
- [x] `children`
- [x] Controlled Input
- [x] Event handler props
- [x] Component composition
- [x] Separation of concerns

## Project Integration

- [x] Components used in Projects page.
- [x] Project UI composed from reusable components.
- [x] Production build verified successfully.

## Documentation

- [x] README updated.
- [x] CHANGELOG updated.
- [x] Session 4 documentation created.

## Git

- [ ] Changes staged.
- [ ] Session 4 commit created.
- [ ] Changes pushed to GitHub.

---

# Session Milestone

Session 4 is complete when the reusable UI library is working, integrated into the application, documented, committed, and pushed.

The major architectural principle learned in this session is:

> Good React applications are built by composing small, reusable components instead of creating large page-specific components.