# Changelog

All notable changes to this project will be documented in this file.

---

# Session 1 - Project Setup

## Added

- Initialized the project monorepo.
- Configured Git.
- Configured GitHub SSH authentication.
- Created the React application using Vite.
- Installed Tailwind CSS.
- Created the first React page.
- Created the initial project documentation structure.

---

# Session 2 - Frontend Architecture

## Added

- Established the frontend folder structure.
- Organized components into reusable categories.
- Created common UI components.
- Created page-level components.
- Established separation between reusable UI components and page-level components.
- Improved project organization for scalability.
- Established the foundation for reusable React components.

---

# Session 3 - Navigation & Layout Components

## Added

- Implemented application navigation.
- Created reusable layout components.
- Added page-level routing.
- Connected application pages through navigation.
- Established a consistent application layout.
- Improved component organization.
- Practiced React Router concepts.
- Practiced navigation between different pages.

---

# Session 4 - Props and Component Reusability

## Added

- Introduced React props.
- Learned how data is passed from parent components to child components.
- Practiced destructuring props.
- Built reusable components using props.
- Added configurable component properties.
- Added support for reusable component variants.
- Practiced passing different data to the same component.
- Improved component reusability.
- Improved separation of concerns.

---

# Session 5 - Dynamic Data Rendering

## Added

- Introduced dynamic rendering in React.
- Rendered arrays using JavaScript map().
- Created reusable ProjectCard components.
- Passed project objects as props.
- Used unique project IDs as React keys.
- Created project data structures containing:
    - id
    - name
    - status
- Implemented dynamic status badges.
- Practiced rendering UI from JavaScript data instead of hardcoded elements.
- Improved component composition.
- Improved data flow between components.
- Established the initial Projects interface.

---

# Session 6 - React State Management & CRUD

## Added

- Introduced React state management using useState.
- Learned the difference between normal JavaScript variables and React state.
- Learned that state changes trigger React re-rendering.
- Learned the purpose of the state value and its setter function.
- Practiced reading state.
- Practiced updating state through setter functions.
- Learned functional state updates using the previous state.
- Implemented project data using React state.
- Implemented controlled inputs.
- Connected input values to React state.
- Updated state through input event handlers.

---

## State Management

Implemented project state using useState.

The Projects component now maintains:

- projectName
- editingProjectId
- projects

The project collection is stored as state so that changes to the collection cause React to re-render the UI.

---

## Create Project

Implemented project creation functionality.

### Added

- Project name input.
- Create Project button.
- handleCreateProject function.
- Dynamic creation of project objects.
- Immutable addition of projects using the spread operator.
- Automatic project ID generation.

### State Update

The new project is added using the previous project state.

Conceptually:

- Take the existing projects.
- Create a new array.
- Add the new project to the array.
- Pass the new array to setProjects().
- React re-renders the component.

---

## Read Projects

Implemented dynamic project rendering.

### Added

- projects.map() for rendering.
- ProjectCard component for each project.
- Project object passed to ProjectCard through props.
- Unique project IDs used as React keys.

The UI is generated from the projects state instead of manually writing every project card.

---

## Delete Project

Implemented project deletion.

### Added

- Delete button to ProjectCard.
- onDelete callback prop.
- handleDelete function in Projects.
- Project ID passed from ProjectCard to the parent.
- filter() for removing the selected project.

### Flow

User clicks Delete.

ProjectCard calls:

- onDelete(project.id)

The parent receives the ID.

handleDelete() filters out the project with that ID.

The resulting array is passed to setProjects().

React re-renders the UI without the deleted project.

---

## Edit Project

Implemented project editing.

### Added

- Edit button to ProjectCard.
- onEdit callback prop.
- handleEdit function.
- editingProjectId state.
- Project lookup using find().
- Existing project name loaded into the controlled input.

### Flow

User clicks Edit.

ProjectCard calls:

- onEdit(project.id)

The parent stores the ID using:

- setEditingProjectId(id)

The project is found using find().

Its existing name is placed into projectName.

The input therefore displays the project's current name.

---

## Update Project

Implemented saving of edited projects.

### Added

- Save button.
- handleSave function.
- Conditional Create/Save UI.
- map() for replacing the edited project.
- Object spread syntax for immutable object updates.
- editingProjectId reset after saving.

### Update Logic

The projects array is mapped.

If a project's ID matches editingProjectId:

- Copy the existing project.
- Replace its name with projectName.

Otherwise:

- Keep the original project.

This keeps properties such as id and status unchanged while updating only the name.

---

## Conditional Rendering

Implemented conditional rendering using the ternary operator.

The application now switches between Create mode and Edit mode.

When no project is being edited:

- Create Project button is displayed.

When a project is being edited:

- Save button is displayed.

The condition is based on editingProjectId.

---

## Empty State

Implemented an empty-project state.

When:

- projects.length === 0

the application displays:

- No Projects Found

Otherwise, the project list is rendered.

---

## Controlled Input

The project name input is controlled by React state.

The input uses:

- value={projectName}
- onChange={handleChange}

The input value therefore always reflects the projectName state.

When the user types:

- handleChange()
- setProjectName()
- state updates
- React re-renders
- input displays the updated state

---

## Parent-Child Communication

Practiced communication between Projects and ProjectCard.

### Parent to Child

Projects passes:

- project
- onDelete
- onEdit

to ProjectCard.

### Child to Parent

ProjectCard calls:

- onDelete(project.id)
- onEdit(project.id)

This allows the child to request actions while the parent continues to own the projects state.

---

## Functional State Updates

Practiced the functional form of state setters.

Example concept:

- setProjects(prevProjects => ...)

The updater function receives the latest state value.

This is useful when the new state depends on the previous state.

Examples used during the session:

- Adding a project.
- Removing a project.
- Updating a project.

---

## Immutable State Updates

Practiced updating arrays and objects without directly mutating existing state.

### Add

Used the spread operator to create a new array containing the previous projects and the new project.

### Delete

Used filter() to create a new array without the selected project.

### Update

Used map() to create a new array and object spread syntax to create an updated project object.

The original state is not directly modified.

---

## JavaScript Methods Practiced

### map()

Used to:

- Render projects.
- Update a specific project.

### filter()

Used to:

- Delete a project.
- Create a new array containing only the projects that should remain.

### find()

Used to:

- Locate the project currently being edited.

### length

Used to:

- Determine the total number of projects.
- Detect whether the project list is empty.
- Generate a new project ID in the current implementation.

---

## Derived Data

Learned that values that can be calculated from existing state generally do not need their own state.

Example:

- totalProjects = projects.length
- activeProjects = projects.filter(p => p.status === "active").length

The projects state remains the source of truth.

This avoids duplicated state becoming inconsistent.

---

## State vs Props

Learned the distinction between state and props.

### State

- Managed by the component.
- Can change over time.
- Updated using a state setter.
- State changes trigger a re-render.

### Props

- Passed from a parent to a child.
- Used to provide data or behavior to a component.
- The child should not directly modify the parent's state.

---

## State Setter and Re-rendering

Learned that setProjects is a state setter function provided by React.

Calling:

- setProjects(newValue)

requests that React update the projects state.

When the state changes:

- React re-renders the component.
- The component reads the latest projects value.
- The UI is generated again from the updated state.

This established the important React flow:

- User action
- Event handler
- State setter
- State update
- Re-render
- Updated UI

---

## Final CRUD Feature

The Projects feature now supports all four CRUD operations.

### Create

Add a new project.

### Read

Display all projects dynamically.

### Update

Edit and save an existing project.

### Delete

Remove a project using its unique ID.

---

## Final Empty State

When all projects are deleted, the UI displays:

- No Projects Found

This demonstrates conditional rendering based on state.

---

# Session 6 Concepts Summary

The major concepts practiced during this session were:

- useState
- State
- State setters
- React re-rendering
- Functional state updates
- Props
- Parent-to-child communication
- Child-to-parent communication
- Callback functions as props
- Controlled inputs
- map()
- filter()
- find()
- length
- Spread operator
- Immutable updates
- Derived data
- Conditional rendering
- Ternary operator
- Logical AND rendering
- CRUD operations
- Lifting state up

---

# Session 6 Final Milestone

Completed a functional Projects CRUD interface using React state management.

The application can now:

- Create projects.
- Display projects dynamically.
- Edit projects.
- Save project updates.
- Delete projects.
- Display an empty state.
- Switch between Create and Edit modes.
- Maintain project state in the parent component.
- Communicate between parent and child components using props and callback functions.
- Update the UI automatically when state changes.

---

# Session 7 - React Forms & Validation

## Added

- Introduced proper React form handling using onSubmit.
- Added event.preventDefault() to prevent the browser's default form submission.
- Continued using a controlled input for the project name.
- Added validation for empty project names.
- Added validation for whitespace-only project names.
- Added maximum project name length validation of 50 characters.
- Added validation error state using useState.
- Added conditional rendering of validation error messages.
- Added automatic error clearing when the user starts typing.
- Added centralized form submission logic through handleSubmit.
- Added Create and Edit form modes.
- Reused the same form for creating and editing projects.
- Added Save functionality through form submission.
- Added Cancel Edit functionality.
- Added form reset after successful project creation.
- Added form reset after successful project update.
- Added type="submit" for Create and Save actions.
- Added type="button" for Cancel to prevent unintended form submission.
- Preserved the existing Create, Read, Update, and Delete functionality.

---

## Form Handling

Implemented proper React form submission.

### Added

- onSubmit
- handleSubmit
- event.preventDefault()

The form now follows:

User submits form
→ handleSubmit()
→ Validation
→ Create or Save

This provides a centralized submission flow for both Create and Edit modes.

---

## Form Validation

Implemented project name validation before updating project state.

### Validation Rules

- Project name cannot be empty.
- Project name cannot contain only whitespace.
- Project name cannot exceed 50 characters.

### Empty Validation

Used:

- projectName.trim() === ""

to prevent empty and whitespace-only project names.

### Maximum Length Validation

Used:

- projectName.trim().length > 50

to prevent project names longer than 50 characters.

Invalid input stops the submission before setProjects() is called.

---

## Validation Error Handling

Added:

- error state.
- setError() state setter.
- Conditional error rendering.

Validation errors are displayed to the user when invalid input is submitted.

The error is cleared when the user starts typing again.

---

## Create Mode

When no project is being edited:

- editingProjectId === null

the form displays:

- Project name input.
- Create Project button.

The Create button uses:

- type="submit"

and therefore triggers handleSubmit().

---

## Edit Mode

When a project is being edited:

- editingProjectId !== null

the same form switches to Edit mode.

The form displays:

- Project name input.
- Save button.
- Cancel button.

The existing project name is loaded into the controlled input.

---

## Save Project

Implemented saving through the form submission flow.

### Flow

User clicks Save.

→ Form submits.

→ handleSubmit() runs.

→ Input is validated.

→ handleSave() updates the project.

→ editingProjectId is cleared.

→ projectName is cleared.

→ Form returns to Create mode.

---

## Cancel Edit

Implemented Cancel functionality.

### Added

- handleCancel
- Cancel button
- type="button"

The Cancel button does not submit the form.

### Flow

User clicks Cancel.

→ handleCancel()

→ Clear editingProjectId

→ Clear projectName

→ Clear error

→ Return to Create mode.

The original project remains unchanged.

---

## Button Types

Introduced the difference between:

- type="submit"
- type="button"

### Submit

Create and Save use:

- type="submit"

because they should trigger the form's onSubmit handler.

### Button

Cancel uses:

- type="button"

because it should not trigger form submission.

If Cancel used type="submit", it would trigger handleSubmit() and could cause the current edit operation to be saved.

---

## Form Reset

Implemented form reset after successful actions.

### After Create

- Project is added.
- projectName is cleared.
- Input becomes empty.

### After Update

- Project is updated.
- editingProjectId is cleared.
- projectName is cleared.
- Form returns to Create mode.

### After Cancel

- editingProjectId is cleared.
- projectName is cleared.
- error is cleared.

---

## Form State

The form now maintains separate state for temporary user interaction.

### Form State

- projectName
- editingProjectId
- error

### Application State

- projects

This reinforces the separation between temporary form information and the actual project data.

---

## CRUD + Forms

The existing CRUD functionality was preserved while introducing form handling and validation.

### Create

- Enter project name.
- Submit form.
- Validate input.
- Create project.
- Clear form.

### Read

- Render projects dynamically from state.

### Update

- Enter Edit mode.
- Modify project name.
- Submit form.
- Validate input.
- Save changes.
- Return to Create mode.

### Delete

- Delete project using its ID.
- Update project state using filter().

---

# Session 7 Concepts Summary

The major concepts practiced during this session were:

- React forms
- onSubmit
- preventDefault()
- Controlled inputs
- Form state
- Validation state
- Error handling
- trim()
- Input length validation
- Conditional rendering
- Create mode
- Edit mode
- Cancel Edit
- Form reset
- type="submit"
- type="button"
- Form state vs application state
- Validation before state mutation
- Centralized form submission

---

# Session 7 Final Milestone

Completed the React Forms & Validation milestone.

The Projects feature can now:

- Create projects through a proper form.
- Validate project names.
- Reject empty project names.
- Reject whitespace-only project names.
- Reject project names longer than 50 characters.
- Display validation errors.
- Clear errors when the user starts typing.
- Edit existing projects.
- Save edited projects through form submission.
- Cancel editing without modifying the project.
- Reset the form after successful actions.
- Continue supporting the existing CRUD functionality.

---

# Overall Project Progress

| Session | Topic | Status |
|---|---|---|
| Session 1 | Project Setup | Completed |
| Session 2 | Frontend Architecture | Completed |
| Session 3 | Navigation & Layout Components | Completed |
| Session 4 | Props and Component Reusability | Completed |
| Session 5 | Dynamic Data Rendering | Completed |
| Session 6 | React State Management & CRUD | Completed |
| Session 7 | React Forms & Validation | Completed |

---

# Current Project Milestone

The project now demonstrates:

- React component architecture
- Reusable components
- Props
- Dynamic rendering
- React state management
- Controlled inputs
- Parent-child communication
- Callback functions
- Immutable state updates
- Conditional rendering
- CRUD operations
- React forms
- Form submission
- Input validation
- Error handling
- Create/Edit modes
- Cancel Edit
- Form reset

---

# Git Milestone

After completing Session 7 documentation:

    git status

    git add .

    git commit -m "Complete Session 7 forms and validation"

    git push

Session 7 is considered complete after the documentation and code changes have been committed and pushed.