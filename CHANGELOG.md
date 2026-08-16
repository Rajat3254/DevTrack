# Changelog

All notable changes to this project will be documented here.

---

# Session 1 - Project Setup

## Added

* Initialized Monorepo.
* Configured Git.
* Configured GitHub SSH Authentication.
* Created React App using Vite.
* Installed Tailwind CSS.
* Created first React page.
* Created project documentation structure.

---

# Session 2 - Frontend Architecture & Routing

## Added

* Professional frontend folder architecture.
* Route-level pages:

    * Dashboard
    * Projects
    * Tasks
    * NotFound.
* Shared `MainLayout` using React Router `Outlet`.
* Centralized routing through `AppRoutes`.
* React Router integration.
* 404 route handling.
* Project documentation for Session 2.

## Learned

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

## Added

* Created reusable Navbar component.
* Created reusable Sidebar component.
* Created reusable Footer component.
* Added clickable Dashboard, Projects, and Tasks navigation.
* Added active route highlighting using `NavLink`.
* Added component-specific CSS files.
* Added professional Flexbox-based layout.
* Added responsive layout for smaller screens.
* Added responsive Sidebar navigation.
* Added shared CSS styling for navigation states.
* Added `box-sizing: border-box`.
* Implemented full-height application layout.
* Configured full-width `#root`.

## Learned

* Link vs NavLink.
* Active route detection using `isActive`.
* Component composition.
* Semantic HTML elements such as `nav`, `main`, and `footer`.
* Flexbox `display`, `flex-direction`, `flex`, and `gap`.
* Responsive design using media queries.
* CSS shared selectors.
* `box-sizing: border-box`.
* Separation of concerns between Layout and Pages.

---

# Session 4 - Reusable UI Components

## Added

* Created reusable `Button` component.
* Created reusable `Card` component.
* Created reusable `Badge` component.
* Created reusable `Input` component.
* Added reusable UI components under `components/ui/`.
* Added Button variants:

    * Primary
    * Secondary
    * Danger.
* Added default Button variant.
* Added Card support for `children`.
* Added Badge status variants:

    * Active
    * Completed
    * Pending
    * In Progress.
* Added Input support for:

    * `type`
    * `placeholder`
    * `value`
    * `onChange`.
* Integrated reusable UI components into the Projects page.
* Added controlled input behavior using React state.
* Added component composition using Card, Badge, and Button.
* Refactored Button and Badge styling using lookup objects.
* Verified the production build successfully.

## Learned

* React props.
* Passing props to components.
* Props destructuring.
* Default prop values.
* JSX JavaScript expressions using `{}`.
* `children` prop.
* Component variants.
* Lookup objects for conditional styling.
* Event handler props.
* React `useState`.
* Controlled inputs.
* `event.target.value`.
* Component composition.
* Reusable UI architecture.
* Separation of concerns between generic UI components and page-specific logic.

## Fixed

* Configured Tailwind CSS v4 with the Vite plugin.
* Added `@tailwindcss/vite` to the project dependencies.
* Added the Tailwind Vite plugin to `vite.config.js`.
* Added Tailwind CSS import to the main stylesheet.
* Resolved Tailwind utility classes not being applied.
* Resolved stale Vite module state during Card development.

## Verification

Production build completed successfully using:

```bash
npm run build
```

Build result:

```text
✓ 41 modules transformed.
✓ built successfully
```

---

# Session 5 - Dynamic Data & List Rendering

## Added

* Created a `projects` array containing project objects.
* Added project properties:

    * `id`
    * `name`
    * `status`.
* Implemented dynamic project rendering using JavaScript `.map()`.
* Rendered multiple project cards dynamically.
* Added unique React `key` values using project IDs.
* Added dynamic project status rendering through the `Badge` component.
* Reused the existing `Card` component.
* Reused the existing `Badge` component.
* Reused the existing `Button` component.
* Created the reusable `ProjectCard` component under `components/common/`.
* Passed complete project objects to `ProjectCard` through props.
* Added dynamic project name rendering.
* Added dynamic project status rendering.
* Added the `View Project` button to each project card.
* Practiced component composition using `ProjectCard`, `Card`, `Badge`, and `Button`.
* Separated project-specific UI logic from generic UI components.

## Learned

* Static UI vs dynamic UI.
* Arrays of objects.
* JavaScript `.map()`.
* Callback functions.
* Rendering lists in React.
* React `key` prop.
* Unique and stable keys.
* Dynamic props.
* Passing objects as props.
* Props destructuring.
* Data-driven UI.
* Data/UI separation.
* Component composition.
* Domain-specific components.
* Reusing generic components with dynamic data.

## Architecture

The Projects page now follows:

```text
Projects Page
      │
      │ projects data
      ▼
    .map()
      │
      ▼
 ProjectCard
      │
      ├── Card
      ├── Badge
      └── Button
```

Generic UI components remain independent from project-specific logic.

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

Adding another project only requires adding another object to the array.

## Dynamic List Rendering

Projects are rendered using:

```jsx
{projects.map(p => (
    <ProjectCard
        key={p.id}
        project={p}
    />
))}
```

The `key` provides React with a stable identity for each list item.

The `project` prop passes the complete project object to `ProjectCard`.

## ProjectCard

Created:

```text
components/
└── common/
    └── ProjectCard.jsx
```

`ProjectCard` composes:

```text
ProjectCard
├── Card
├── Badge
└── Button
```

The component receives project data through props:

```jsx
<ProjectCard project={project} />
```

Props destructuring is used inside the component:

```jsx
function ProjectCard({ project }) {
```

This allows direct access to:

```jsx
project.name
project.status
```

## Data/UI Separation

The Projects page owns the project data and handles list rendering.

`ProjectCard` owns project-specific UI composition.

Generic UI components remain reusable and independent:

```text
Button
Card
Badge
Input
```

The resulting data flow is:

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

## Verification

Production build completed successfully using:

```bash
npm run build
```

The Projects page was also verified in the browser.

Dynamic project cards rendered successfully with:

* Project name.
* Dynamic status Badge.
* View Project Button.
* Unique React keys.

---
