# DevTrack

A structured React learning project focused on learning modern frontend development through practical implementation.

The project is developed session by session, with every session focusing on a specific React or frontend concept and ending with a practical milestone.

---

## Project Goals

The main goals of this project are:

* Learn React fundamentals through practical implementation.
* Understand component-based architecture.
* Build reusable React components.
* Understand data flow between components.
* Learn React state management.
* Practice dynamic rendering.
* Build real application functionality instead of isolated examples.
* Maintain proper Git and project documentation practices.
* Build a strong foundation for larger React applications.

---

## Tech Stack

### Frontend

* React
* JavaScript
* Vite
* Tailwind CSS
* HTML
* CSS

### Development Tools

* Node.js
* npm
* Git
* GitHub
* VS Code

---

## Project Structure

The project follows a component-based React architecture.

Main areas include:

* Pages
* Common components
* UI components
* Project documentation

The structure is designed to keep reusable components separate from page-specific application logic.

---

# Learning Sessions

## Session 1 - Project Setup

### Topics

* Project initialization
* Vite
* React application setup
* Tailwind CSS
* Git
* GitHub
* Project documentation

### Completed

* Initialized the project monorepo.
* Configured Git.
* Configured GitHub SSH authentication.
* Created the React application using Vite.
* Installed Tailwind CSS.
* Created the first React page.
* Created the initial documentation structure.

### Status

Completed

---

## Session 2 - Frontend Architecture

### Topics

* React project structure
* Component organization
* Reusable components
* Page-level components
* UI components
* Separation of concerns

### Completed

* Established the frontend folder structure.
* Organized components into reusable categories.
* Created common UI components.
* Created page-level components.
* Established separation between reusable UI components and page-level components.
* Improved project organization for scalability.

### Status

Completed

---

## Session 3 - Navigation & Layout Components

### Topics

* React Router
* Navigation
* Layout components
* Page routing
* Application structure

### Completed

* Implemented application navigation.
* Created reusable layout components.
* Added page-level routing.
* Connected application pages through navigation.
* Established a consistent application layout.
* Practiced navigation between different pages.

### Status

Completed

---

## Session 4 - Props and Component Reusability

### Topics

* React props
* Parent-to-child communication
* Props destructuring
* Reusable components
* Component configuration

### Completed

* Introduced React props.
* Practiced passing data from parent components to child components.
* Practiced destructuring props.
* Built reusable components using props.
* Added configurable component properties.
* Added support for reusable component variants.
* Practiced passing different data to the same component.
* Improved component reusability.

### Status

Completed

---

## Session 5 - Dynamic Data Rendering

### Topics

* Dynamic rendering
* JavaScript map()
* React list rendering
* React keys
* Data-driven UI
* Reusable ProjectCard components

### Completed

* Introduced dynamic rendering in React.
* Rendered arrays using map().
* Created reusable ProjectCard components.
* Passed project objects as props.
* Used unique project IDs as React keys.
* Created project data structures containing:

    * id
    * name
    * status
* Implemented dynamic status badges.
* Practiced rendering UI from JavaScript data.
* Established the initial Projects interface.

### Status

Completed

---

# Session 6 - React State Management & CRUD

## Topics

* useState
* React state
* State setters
* React re-rendering
* Functional state updates
* Controlled inputs
* Props
* Callback functions
* Parent-child communication
* Immutable state updates
* map()
* filter()
* find()
* Spread operator
* Derived data
* Conditional rendering
* CRUD operations

---

## Session 6 - State Management

Implemented project state using React useState.

The Projects component now manages:

* projectName
* editingProjectId
* projects

State is used instead of normal JavaScript variables so that changes to the data trigger React re-rendering.

---

## Session 6 - State and Re-rendering

Learned the difference between a normal JavaScript variable and React state.

A normal variable can change without causing React to render the component again.

React state is different.

When the state setter is called:

* React updates the state.
* React re-renders the component.
* The component reads the latest state.
* The UI reflects the new state.

The basic React flow learned during this session is:

User action
→ Event handler
→ State setter
→ State update
→ React re-render
→ Updated UI

---

## Session 6 - State Setter

Learned that useState provides two values:

* The current state value.
* A setter function used to update that state.

For projects:

* projects is the current project state.
* setProjects is the function used to request an update to that state.

Functional state updates were also practiced.

The updater function receives the previous state and returns the new state.

This is especially useful when the new state depends on the previous state.

---

# Projects CRUD Feature

The Projects page now supports all four CRUD operations.

CRUD means:

* Create
* Read
* Update
* Delete

---

## Create

Users can create a new project.

### Flow

User enters a project name.

The input updates projectName state.

The user clicks Create Project.

handleCreateProject creates a new project.

The new project is added to the existing projects array.

React re-renders the component and the new project appears in the UI.

### Concepts Used

* useState
* Controlled input
* Event handling
* Functional state update
* Spread operator
* Array state

---

## Read

Projects are displayed dynamically from the projects state.

The project array is rendered using map().

Each project is passed to ProjectCard through props.

Unique project IDs are used as React keys.

### Concepts Used

* map()
* Props
* React key
* Dynamic rendering
* Component composition

---

## Update

Users can edit an existing project.

### Flow

User clicks Edit.

ProjectCard sends the project ID to the parent.

The parent stores the ID in editingProjectId.

The project is located using find().

The existing project name is placed into the controlled input.

The user changes the name.

The user clicks Save.

The projects array is mapped.

The project with the matching ID is replaced with an updated object.

editingProjectId is reset.

React re-renders the updated project.

### Concepts Used

* Props
* Callback functions
* find()
* map()
* Object spread
* Controlled input
* Conditional rendering
* Functional state updates

---

## Delete

Users can delete a project.

### Flow

User clicks Delete.

ProjectCard sends the project ID to the parent.

The parent receives the ID.

filter() creates a new array containing every project except the selected project.

The new array is passed to setProjects.

React re-renders the project list.

### Concepts Used

* Props
* Callback functions
* filter()
* Functional state updates
* Immutable updates

---

# Parent-Child Communication

The Projects component owns the project state.

ProjectCard receives data and callback functions through props.

Parent to child:

Projects
→ project
→ onDelete
→ onEdit
→ ProjectCard

Child to parent:

ProjectCard
→ onDelete(project.id)
→ handleDelete()

ProjectCard
→ onEdit(project.id)
→ handleEdit()

This reinforces the React principle that the parent owns the state while child components can request actions through callback props.

---

# Controlled Input

The project name input is controlled by React state.

The input uses:

* value={projectName}
* onChange={handleChange}

The value displayed in the input therefore comes from React state.

When the user types:

Input event
→ handleChange()
→ setProjectName()
→ state changes
→ React re-renders
→ input displays the updated value

The same input is also reused for editing an existing project.

---

# Immutable State Updates

State is updated without directly modifying the existing arrays or objects.

## Adding

The spread operator is used to create a new array containing the previous projects and the new project.

## Deleting

filter() creates a new array without the selected project.

## Updating

map() creates a new array.

Object spread creates a new project object while replacing only the property that needs to change.

This approach keeps state updates predictable and follows React's immutable update pattern.

---

# JavaScript Methods Practiced

## map()

Used for:

* Rendering projects.
* Updating a specific project.

## filter()

Used for:

* Removing a project.
* Creating a new filtered array.

## find()

Used for:

* Locating the project currently being edited.

## length

Used for:

* Counting projects.
* Checking whether the project list is empty.
* Generating the next project ID in the current implementation.

---

# Derived Data

Learned that values that can be calculated from existing state usually do not need their own state.

Example:

totalProjects can be calculated from projects.length.

activeProjects can be calculated using:

projects.filter(p => p.status === "active").length

The projects array remains the source of truth.

This prevents duplicated state from becoming inconsistent.

---

# Conditional Rendering

Conditional rendering was implemented using the ternary operator.

The application switches between Create mode and Edit mode.

When editingProjectId is null:

* Create Project button is displayed.

When editingProjectId contains a project ID:

* Save button is displayed.

An empty state was also implemented.

When projects.length is zero:

* No Projects Found is displayed.

Otherwise:

* The project list is rendered.

---

# Final Session 6 Milestone

The Projects page is now a functional React CRUD interface.

It supports:

* Creating projects.
* Displaying projects.
* Editing projects.
* Updating projects.
* Deleting projects.
* Empty-state rendering.
* Controlled inputs.
* Parent-child communication.
* Conditional Create/Edit UI.
* React state management.
* Immutable state updates.

---

# Session 7 - React Forms & Validation

## Topics

* React forms
* onSubmit
* event.preventDefault()
* Controlled inputs
* Form state
* Validation state
* Input validation
* Error messages
* trim()
* Form reset
* Conditional rendering
* Create mode
* Edit mode
* Cancel Edit
* type="submit"
* type="button"
* Form state vs application state

---

## Session 7 - React Forms

The Projects page was converted to use a proper HTML form.

The form now handles submission through:

```jsx
<form onSubmit={handleSubmit}>
```

Instead of relying on a Create button's `onClick`, the form itself manages submission.

This also allows the form to be submitted using the Enter key.

---

## Session 7 - preventDefault()

The form submission handler uses:

```jsx
event.preventDefault();
```

This prevents the browser's default form submission behavior and allows React to handle the submission.

The flow is:

User submits form
→ onSubmit
→ preventDefault()
→ Validation
→ Create or Update

---

## Session 7 - Validation

Project names are now validated before modifying the projects state.

The validation rules are:

* Project name cannot be empty.
* Project name cannot contain only whitespace.
* Project name cannot exceed 50 characters.

The validation uses:

```jsx
projectName.trim()
```

to remove surrounding whitespace and detect whitespace-only input.

---

## Session 7 - Validation State

A separate error state was introduced:

```jsx
const [error, setError] = useState("");
```

When validation fails, the error message is stored in state.

For example:

```jsx
setError("Project name cannot be empty");
```

The error is then conditionally rendered near the input.

---

## Session 7 - Form Submission

The `handleSubmit()` function is now the central entry point for Create and Edit operations.

The flow is:

User submits form
→ preventDefault()
→ Validate input
→ Clear error if valid
→ Check editingProjectId
→ Create or Save

This prevents invalid data from reaching `setProjects()`.

---

## Session 7 - Create Mode

When:

```jsx
editingProjectId === null
```

the form is in Create mode.

The UI displays:

* Project Name
* Create Project

The Create button uses:

```jsx
type="submit"
```

so the form's `onSubmit` handler is triggered.

---

## Session 7 - Edit Mode

When:

```jsx
editingProjectId !== null
```

the form is in Edit mode.

The existing project name is loaded into the controlled input.

The UI displays:

* Project Name
* Save
* Cancel

The same form and input are reused for editing.

---

## Session 7 - Cancel Edit

A Cancel button was added for Edit mode.

The Cancel button uses:

```jsx
type="button"
```

instead of:

```jsx
type="submit"
```

This prevents Cancel from triggering `handleSubmit()`.

The Cancel flow is:

Click Cancel
→ handleCancel()
→ Clear editingProjectId
→ Clear projectName
→ Clear error
→ Return to Create mode

The original project remains unchanged.

---

## Session 7 - Form Reset

The form is reset after successful Create and Update operations.

After creating a project:

* projectName is cleared.

After updating a project:

* editingProjectId is cleared.
* projectName is cleared.

When the user starts typing after a validation error:

* The error is cleared.

This creates a cleaner form experience.

---

## Session 7 - Form State vs Application State

The session reinforced the difference between form state and application state.

### Form State

* projectName
* editingProjectId
* error

These values represent temporary user interaction.

### Application State

* projects

This represents the saved project data managed by the application.

The separation makes state responsibilities easier to understand.

---

## Session 7 - CRUD + Validation

The existing CRUD functionality was preserved while adding form validation.

### Create

Enter name
→ Submit
→ Validate
→ Create project
→ Clear form

### Read

projects
→ map()
→ ProjectCard
→ UI

### Update

Edit
→ Load project
→ Modify name
→ Submit
→ Validate
→ Save
→ Update project

### Delete

Delete
→ Project ID
→ filter()
→ setProjects()
→ Project removed

---

## Session 7 - Important Button Types

The session introduced the difference between:

```jsx
type="submit"
```

and:

```jsx
type="button"
```

### Submit

Create and Save use:

```jsx
type="submit"
```

because they should trigger the form's `onSubmit`.

### Button

Cancel uses:

```jsx
type="button"
```

because it should not trigger form submission.

If Cancel were a submit button, it would call `handleSubmit()` and could cause the current edit to be saved.

---

## Session 7 - Validation Flow

The final validation flow is:

User submits form
→ preventDefault()
→ Check empty name
→ Check maximum length
→ Valid?
→ Create or Save

Invalid input stops the function before the project state is modified.

---

## Session 7 - Final Milestone

The Projects page now supports:

* Proper React form handling.
* Controlled form inputs.
* Form submission with onSubmit.
* preventDefault().
* Empty-name validation.
* Whitespace validation.
* Maximum 50-character validation.
* Validation error state.
* Error messages.
* Error clearing while typing.
* Form reset after successful creation.
* Form reset after successful update.
* Create mode.
* Edit mode.
* Cancel Edit.
* Existing CRUD functionality.

---

## Session 7 - Current Limitation

Project data is currently stored only in React state.

Therefore, newly created or updated projects are lost when the page is refreshed.

For example:

Create project
→ Project appears
→ Refresh page
→ React state initializes again
→ Newly created project disappears

This is expected at the current stage.

Persistence using localStorage, APIs, or a backend has not yet been introduced.

---

# Current Project Status

| Session   | Topic                           | Status    |
| --------- | ------------------------------- | --------- |
| Session 1 | Project Setup                   | Completed |
| Session 2 | Frontend Architecture           | Completed |
| Session 3 | Navigation & Layout Components  | Completed |
| Session 4 | Props and Component Reusability | Completed |
| Session 5 | Dynamic Data Rendering          | Completed |
| Session 6 | React State Management & CRUD   | Completed |
| Session 7 | React Forms & Validation        | Completed |

---

# Concepts Learned So Far

The project currently demonstrates knowledge of:

* React components
* Component composition
* Reusable components
* Props
* State
* useState
* State setters
* React re-rendering
* Controlled components
* Controlled inputs
* Event handling
* Parent-to-child communication
* Child-to-parent communication
* Callback functions as props
* Dynamic rendering
* map()
* filter()
* find()
* Spread operator
* Immutable updates
* Derived data
* Conditional rendering
* CRUD operations
* React Router
* Layout components
* React forms
* onSubmit
* preventDefault()
* Form state
* Validation state
* Input validation
* trim()
* Error handling
* Form reset
* Create/Edit modes
* Cancel Edit
* type="submit"
* type="button"
* Form state vs application state
* Tailwind CSS
* Vite
* Git
* GitHub

---

# Documentation

Project documentation is maintained alongside the codebase.

Documentation includes:

* Session notes
* Changelog
* Project README
* Learning milestones
* Important React concepts
* Implementation details

Each completed session is documented before moving to the next major learning milestone.

---

# Git Workflow

The project uses Git to track progress.

Typical workflow:

```
git status

git add .

git commit -m "Commit message"

git push
```

Each major learning session should result in a meaningful commit so that project progress can be tracked over time.

---

# Development Philosophy

This project focuses on understanding concepts rather than simply copying code.

For every feature, the goal is to understand:

1. What problem the feature solves.
2. Why React is used for the solution.
3. How data flows between components.
4. How state changes.
5. Why the UI re-renders.
6. Why a particular JavaScript method is appropriate.
7. How the implementation can be made reusable and maintainable.

The project is built incrementally so that each session builds on the concepts learned in previous sessions.

---

# Current Milestone

Session 7 is complete.

The project has progressed from a basic React application to a functional Projects interface with:

* Component architecture
* Reusable components
* Props
* Dynamic data rendering
* React state management
* Controlled inputs
* Parent-child communication
* CRUD functionality
* Conditional rendering
* Immutable state updates
* React forms
* Form submission
* Input validation
* Error handling
* Create/Edit form modes
* Cancel Edit

The next session will build on this React foundation and introduce the next major concept in the DevTrack learning path.
