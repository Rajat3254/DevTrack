# DevTrack - Session 7: React Forms & Validation

## Session Goal

Move from basic CRUD functionality to a more realistic React form workflow by introducing proper form submission, validation, error handling, and Create/Edit form modes.

Session 7 builds directly on the state management and CRUD functionality completed in Session 6.

The main goal is to understand:

```text
User Input
    ↓
Form Submission
    ↓
Validation
    ↓
State Update
    ↓
UI Update
```

---

# 1. Session Objective

The objectives of Session 7 were:

* Understand React form handling.
* Learn `onSubmit`.
* Understand `event.preventDefault()`.
* Work with controlled inputs.
* Separate form state from application state.
* Validate user input.
* Display validation errors.
* Prevent invalid project creation.
* Prevent invalid project updates.
* Reset form state after successful actions.
* Implement Create and Edit modes.
* Implement Cancel Edit.
* Preserve existing CRUD functionality.

---

# 2. Previous Progress

## Session 5 - Dynamic Data & List Rendering

Completed:

* Static vs dynamic UI.
* Arrays of project objects.
* `.map()`.
* React `key`.
* Dynamic props.
* Object props.
* `ProjectCard`.
* Data/UI separation.
* Component composition.

The project list became data-driven.

---

## Session 6 - State Management & Interactive Project Data

Completed:

* React state.
* `useState`.
* State containing arrays.
* Immutable state updates.
* Spread operator.
* `.filter()`.
* `.map()`.
* Creating projects.
* Deleting projects.
* Updating projects.
* Event handler props.
* Parent-child communication.
* Lifting state up.
* State ownership.
* Interactive CRUD functionality.

The Projects page became an interactive state-driven application.

---

# 3. Problem Before Session 7

The Projects page already supported CRUD operations, but the form did not properly validate user input.

Invalid values could potentially be submitted, including:

* Empty project names.
* Whitespace-only project names.
* Project names longer than the allowed limit.

The form also needed a clearer Create/Edit workflow.

Session 7 addressed these problems.

---

# 4. React Forms

A proper HTML form was introduced around the project input and action buttons.

Conceptually:

```jsx
<form onSubmit={handleSubmit}>
    Input
    Button
</form>
```

The form is now responsible for submission instead of relying on a Create button's `onClick` handler.

This provides a cleaner submission flow and also allows the user to submit the form by pressing Enter.

---

# 5. `onSubmit`

`onSubmit` handles the submission of a form.

The implemented flow is:

```text
User submits form
        ↓
onSubmit fires
        ↓
handleSubmit()
        ↓
Validation
        ↓
Create or Update
```

The form uses:

```jsx
<form onSubmit={handleSubmit}>
```

This centralizes the form submission logic.

---

# 6. `preventDefault()`

Normal HTML form submission can cause the browser to perform its default submission behavior.

React handles the form submission itself, so:

```jsx
event.preventDefault();
```

is used.

The final flow is:

```text
User submits form
        ↓
onSubmit
        ↓
preventDefault()
        ↓
React handles submission
        ↓
Validation
        ↓
State update
```

This prevents the browser from reloading or navigating away from the application.

---

# 7. Controlled Input

The project name input remains a controlled input.

State:

```jsx
const [projectName, setProjectName] = useState("");
```

Input:

```jsx
<Input
    type="text"
    placeholder="Enter project name"
    value={projectName}
    onChange={handleChange}
/>
```

The flow is:

```text
User types
    ↓
onChange
    ↓
handleChange()
    ↓
setProjectName()
    ↓
projectName changes
    ↓
React re-renders
    ↓
Input displays updated value
```

---

# 8. Form State

Session 7 introduced additional state specifically for controlling the form.

The important form-related state is:

```jsx
const [projectName, setProjectName] = useState("");
const [editingProjectId, setEditingProjectId] = useState(null);
const [error, setError] = useState("");
```

These values represent the current form interaction.

---

# 9. Application State vs Form State

A key concept learned during the session was the separation between application data and temporary form data.

## Application State

```jsx
projects
```

This represents the actual saved projects.

## Form State

```jsx
projectName
editingProjectId
error
```

These represent what the user is currently entering, editing, or encountering.

Conceptually:

```text
Application State
    ↓
Saved project data

Form State
    ↓
Temporary user interaction
```

This separation becomes increasingly important as React applications become larger.

---

# 10. Validation State

A separate state variable was introduced for validation errors:

```jsx
const [error, setError] = useState("");
```

Initially:

```text
error = ""
```

which means there is no validation error.

When validation fails:

```jsx
setError("Project name cannot be empty");
```

React re-renders and the error can be displayed.

---

# 11. Empty Project Validation

The first validation rule is that a project name cannot be empty.

The validation uses:

```jsx
projectName.trim() === ""
```

This prevents:

```text
""
```

and:

```text
"     "
```

from being accepted.

The implemented validation is:

```jsx
if (projectName.trim() === "") {
    setError("Project name cannot be empty");
    return;
}
```

The `return` is important because it stops the submission function before `setProjects()` is called.

The flow is:

```text
Invalid input
    ↓
setError()
    ↓
return
    ↓
No project creation/update
```

---

# 12. `trim()`

The `trim()` method removes whitespace from the beginning and end of a string.

For example:

```text
"   DevTrack   "
```

becomes:

```text
"DevTrack"
```

It also allows whitespace-only input to be detected:

```text
"     "
```

becomes:

```text
""
```

Therefore:

```jsx
projectName.trim() === ""
```

is useful for validating project names.

---

# 13. Maximum Length Validation

A second validation rule was introduced.

The project name must be:

```text
50 characters or less
```

The validation is:

```jsx
if (projectName.trim().length > 50) {
    setError("Project name must be 50 characters or less");
    return;
}
```

This validation applies to both:

* Creating a project.
* Updating a project.

---

# 14. Centralized Form Submission

The `handleSubmit()` function became the central entry point for Create and Edit submission.

Conceptually:

```text
handleSubmit()
    ↓
Prevent default
    ↓
Validate
    ↓
Clear validation error
    ↓
Check editingProjectId
    ↓
Create OR Save
```

The logic is:

```jsx
if (editingProjectId !== null) {
    handleSave();
} else {
    handleCreateProject();
}
```

This means the same form can be reused for both operations.

---

# 15. Clearing Validation Errors

When the user starts correcting an invalid value, the error is cleared.

The change handler uses:

```jsx
function handleChange(event) {
    setProjectName(event.target.value);
    setError("");
}
```

The flow is:

```text
Validation error
      ↓
User starts typing
      ↓
handleChange()
      ↓
setError("")
      ↓
Error disappears
```

---

# 16. Error Rendering

The error state is displayed conditionally.

Conceptually:

```jsx
{error && <p>{error}</p>}
```

When `error` is an empty string, nothing is displayed.

When an error message exists, React renders it.

This provides immediate feedback to the user.

---

# 17. Create Mode

When:

```jsx
editingProjectId === null
```

the form is in Create mode.

The UI displays:

```text
Project Name
Create Project
```

The Create button uses:

```jsx
type="submit"
```

so it submits the form and invokes `handleSubmit()`.

---

# 18. Edit Mode

When:

```jsx
editingProjectId !== null
```

the form is in Edit mode.

The selected project's name is loaded into:

```jsx
projectName
```

The UI displays:

```text
Project Name
Save
Cancel
```

The same form input is reused instead of creating a separate edit form.

---

# 19. Save Button

The Save button uses:

```jsx
type="submit"
```

Therefore:

```text
Click Save
    ↓
Form submission
    ↓
handleSubmit()
    ↓
Validation
    ↓
handleSave()
```

This means Save follows exactly the same validation process as Create.

---

# 20. Cancel Button

The Cancel button uses:

```jsx
type="button"
```

This is important because a button inside a form with:

```jsx
type="submit"
```

would trigger `handleSubmit()`.

Cancel must not submit the form.

Therefore:

```jsx
<Button
    type="button"
    text="Cancel"
    onClick={handleCancel}
/>
```

The flow is:

```text
Click Cancel
    ↓
handleCancel()
    ↓
Clear editingProjectId
    ↓
Clear projectName
    ↓
Clear error
    ↓
Return to Create mode
```

The original project remains unchanged.

---

# 21. Cancel Edit

The Cancel handler resets the form:

```jsx
function handleCancel() {
    setEditingProjectId(null);
    setProjectName("");
    setError("");
}
```

Importantly, it does not call:

```jsx
setProjects()
```

Therefore, cancelling an edit does not modify the saved project.

---

# 22. Form Reset After Create

After successfully creating a project, the project name is cleared:

```jsx
setProjectName("");
```

Because the input is controlled by `projectName`, React automatically updates the displayed input.

The flow is:

```text
Create project
    ↓
setProjects()
    ↓
setProjectName("")
    ↓
Input becomes empty
```

---

# 23. Form Reset After Update

After successfully saving an edit:

```jsx
setEditingProjectId(null);
setProjectName("");
```

This returns the form to Create mode.

The flow is:

```text
Save
    ↓
Update project
    ↓
Clear editingProjectId
    ↓
Clear projectName
    ↓
Create mode
```

---

# 24. Existing CRUD Workflow

Session 7 preserved the CRUD functionality from Session 6.

## Create

```text
Enter project name
      ↓
Submit
      ↓
Validate
      ↓
handleCreateProject()
      ↓
setProjects()
      ↓
Clear input
```

## Read

```text
projects
    ↓
map()
    ↓
ProjectCard
    ↓
UI
```

## Update

```text
Click Edit
    ↓
Load project
    ↓
Change name
    ↓
Submit
    ↓
Validate
    ↓
handleSave()
    ↓
map()
    ↓
Update project
```

## Delete

```text
Click Delete
    ↓
handleDelete()
    ↓
filter()
    ↓
setProjects()
    ↓
Project removed
```

---

# 25. Validation Flow

The final validation flow is:

```text
User submits form
        ↓
preventDefault()
        ↓
Check empty name
        ↓
Check maximum length
        ↓
Valid?
     /      \
   No        Yes
   ↓          ↓
setError   setError("")
   ↓          ↓
return     Create/Save
```

Invalid data is prevented from reaching the project state.

---

# 26. Form Submission vs Button Click

An important improvement was moving submission responsibility to the form.

Instead of:

```jsx
<Button onClick={handleCreateProject}>
```

the project now uses:

```jsx
<form onSubmit={handleSubmit}>
```

and:

```jsx
<Button type="submit">
```

This gives the application a consistent submission mechanism.

It also allows keyboard submission using Enter.

---

# 27. Why Cancel Uses `type="button"`

If Cancel were:

```jsx
<Button type="submit">
```

then:

```text
Click Cancel
    ↓
Form submission
    ↓
handleSubmit()
    ↓
Validation
    ↓
editingProjectId !== null
    ↓
handleSave()
```

That could cause Cancel to save the project.

Therefore Cancel must use:

```jsx
type="button"
```

This prevents form submission.

---

# 28. Final State Structure

The Projects component now conceptually contains:

```jsx
const [projectName, setProjectName] = useState("");

const [editingProjectId, setEditingProjectId] = useState(null);

const [error, setError] = useState("");

const [projects, setProjects] = useState([...]);
```

The project state remains the source of truth for saved projects.

---

# 29. Final Function Structure

The main functions are:

```text
handleChange()
handleSubmit()
handleCreateProject()
handleDelete()
handleEdit()
handleSave()
handleCancel()
```

Each function has a clear responsibility.

```text
handleChange
    → update form input

handleSubmit
    → prevent default + validate + choose operation

handleCreateProject
    → create project

handleDelete
    → remove project

handleEdit
    → enter edit mode

handleSave
    → update project

handleCancel
    → leave edit mode without saving
```

---

# 30. Final Architecture

The Projects page now follows:

```text
Projects Page
│
├── projects state
│
├── projectName state
├── editingProjectId state
├── error state
│
├── handleChange
├── handleSubmit
├── handleCreateProject
├── handleEdit
├── handleSave
├── handleCancel
├── handleDelete
│
├── Form
│   ├── Input
│   ├── Error
│   ├── Create / Save
│   └── Cancel
│
└── ProjectCard
      ├── project
      ├── onEdit
      └── onDelete
```

The data flow is:

```text
User Input
    ↓
Form State
    ↓
Form Submission
    ↓
Validation
    ↓
Project State
    ↓
React Re-render
    ↓
Updated UI
```

---

# 31. Session Insights

### 1. A form is more than an input and a button

Using `<form onSubmit={...}>` gives the application a centralized submission mechanism.

### 2. Validation must happen before state mutation

Invalid data should never reach:

```jsx
setProjects()
```

### 3. Form state and application state are different

`projectName`, `editingProjectId`, and `error` represent the current form interaction.

`projects` represents the saved application data.

### 4. `type="submit"` and `type="button"` have different responsibilities

Submit buttons participate in form submission.

Normal buttons do not.

### 5. React state controls the UI

Changing:

```jsx
projectName
editingProjectId
error
projects
```

causes React to render the appropriate UI.

---

# 32. Interview Questions

## Question 1

What is the difference between `onClick` and `onSubmit` when working with a form?

## Question 2

Why is `event.preventDefault()` commonly used in React forms?

## Question 3

Why should validation happen before calling `setProjects()`?

## Question 4

What does `trim()` do?

## Question 5

Why is `projectName` considered form state while `projects` is application state?

## Question 6

Why does the Cancel button use `type="button"` instead of `type="submit"`?

## Question 7

How does a controlled input work in React?

## Question 8

Why can the same form be used for both Create and Edit modes?

---

# 33. Key Takeaways

The most important concepts from Session 7 are:

* Forms can be controlled by React.
* `onSubmit` handles form submission.
* `preventDefault()` prevents the browser's default form behavior.
* Controlled inputs use React state as their value.
* Validation prevents invalid data from entering application state.
* `trim()` helps detect whitespace-only input.
* Validation errors can be stored in state.
* Conditional rendering can display errors.
* Create and Edit can share one form.
* `editingProjectId` determines the current mode.
* `type="submit"` triggers form submission.
* `type="button"` does not submit the form.
* Form state should be separated from application state.
* Successful actions should reset the relevant form state.
* Existing CRUD functionality can be combined with proper form handling.

---

# 34. Session Deliverables

The Projects page now includes:

* [x] Proper form handling.
* [x] `onSubmit`.
* [x] `preventDefault()`.
* [x] Controlled input.
* [x] Project name validation.
* [x] Empty-name prevention.
* [x] Whitespace validation.
* [x] Maximum 50-character validation.
* [x] Validation error state.
* [x] Error messages.
* [x] Error clearing while typing.
* [x] Form reset after successful creation.
* [x] Form reset after successful update.
* [x] Create mode.
* [x] Edit mode.
* [x] Cancel edit.
* [x] Existing CRUD functionality preserved.
* [x] Create testing.
* [x] Read testing.
* [x] Update testing.
* [x] Delete testing.
* [x] Invalid form testing.
* [x] Cancel testing.

---

# 35. Important Limitation

The current project data is stored only in React state.

Therefore, refreshing the page resets the state to the initial project array.

For example:

```text
Create project
      ↓
Project appears
      ↓
Refresh page
      ↓
React state initializes again
      ↓
New project disappears
```

This is expected at this stage.

Persistence through `localStorage`, APIs, or a backend is outside the scope of Session 7.

---

# 36. Concepts Not Introduced

Session 7 intentionally did not introduce:

* Form libraries.
* Redux.
* Global state management.
* Backend APIs.
* Authentication.
* Complex validation libraries.
* Advanced custom hooks.

The focus remained on understanding React's built-in form handling and validation.

---

# 37. Verification

Before committing the session:

```bash
cd frontend
npm run build
```

The production build should complete successfully.

Then return to the project root:

```bash
cd ..
```

Check:

```bash
git status
```

Review all changes before committing.

---

# 38. Git Information

Recommended Session 7 commit:

```bash
git add .
git commit -m "feat: add forms and validation"
git push
```

The commit represents the completion of the React Forms & Validation milestone.

---

# 39. Session 7 Final Takeaway

> React forms provide a structured way to collect user input, validate it, and update application state. By combining controlled inputs, `onSubmit`, validation, and conditional rendering, the Projects page moves from basic CRUD functionality toward a more realistic application workflow.

The architectural progression is:

```text
Static JSX
    ↓
Reusable Components
    ↓
Dynamic Data
    ↓
State
    ↓
CRUD
    ↓
Forms
    ↓
Validation
    ↓
Interactive Application
```

Session 7 builds directly on the state management and CRUD concepts from Session 6.
