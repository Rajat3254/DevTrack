# DevTrack - Session 6

## Topic

React State Management & CRUD

---

# 1. Session Objective

The goal of Session 6 was to understand React state management and use it to build a functional Projects CRUD interface.

The session focused on understanding:

- React state
- useState
- State setters
- React re-rendering
- Functional state updates
- Controlled inputs
- Props
- Parent-child communication
- Callback functions
- Immutable state updates
- Array methods such as map(), filter(), and find()
- Derived data
- Conditional rendering
- CRUD operations

The main practical goal was to move the Projects page from static/dynamic data rendering to a state-driven interactive application.

---

# 2. React State

## What is State?

State is data that belongs to a React component and can change over time.

Example:

    const [projectName, setProjectName] = useState("");

Here:

- projectName is the current state value.
- setProjectName is the function used to update the state.

Another example:

    const [projects, setProjects] = useState([
        { id: 1, name: "Project 1", status: "active" },
        { id: 2, name: "Project 2", status: "pending" },
        { id: 3, name: "Project 3", status: "completed" }
    ]);

Here:

- projects stores the current list of projects.
- setProjects is used to update the project list.

---

# 3. State vs Normal Variables

A normal JavaScript variable can change without causing React to render the component again.

Example:

    let count = 0;

    function increase() {
        count++;
    }

Changing count does not tell React that the UI needs to be updated.

React state is different.

Example:

    const [count, setCount] = useState(0);

When:

    setCount(count + 1);

is called, React knows that the state has changed and schedules the component to re-render.

Important idea:

    State change
        ↓
    React re-renders
        ↓
    Component runs again
        ↓
    UI reflects the latest state

---

# 4. State Setter

The setter returned by useState is a function provided by React.

Example:

    const [projects, setProjects] = useState([]);

The two values have different responsibilities.

## projects

Used to read the current state.

Example:

    projects.map(...)

## setProjects

Used to request an update to the state.

Example:

    setProjects(newProjects);

The mental model is:

    projects
        ↓
    "What is the current value?"

    setProjects(...)
        ↓
    "Update this state."

---

# 5. How setProjects Works

For example:

    setProjects(newProjects);

means:

    "React, make the projects state use this new value."

React then re-renders the component.

The flow is:

    setProjects(newProjects)
            ↓
    projects state changes
            ↓
    React re-renders
            ↓
    projects contains the new value
            ↓
    projects.map(...)
            ↓
    Updated UI

This explains why changing React state updates the UI.

---

# 6. Functional State Updates

When the new state depends on the previous state, the functional form of the setter can be used.

Example:

    setProjects(prevProjects => [
        ...prevProjects,
        newProject
    ]);

Here:

    prevProjects

represents the latest previous state provided by React.

The function returns the new state.

Conceptually:

    previous state
        ↓
    updater function
        ↓
    new state
        ↓
    React re-renders

This pattern was used throughout the Projects CRUD implementation.

---

# 7. Why Functional Updates Were Used

Project operations depend on the current project list.

For example, deleting a project requires the latest project array.

Therefore:

    setProjects(prevProjects =>
        prevProjects.filter(p => p.id !== id)
    );

is preferred over relying on a potentially stale value of projects.

The same concept was used for:

- Creating projects
- Deleting projects
- Updating projects

---

# 8. Controlled Input

The project name input was converted into a controlled input.

State:

    const [projectName, setProjectName] = useState("");

Input:

    <Input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={handleChange}
    />

Event handler:

    function handleChange(event) {
        setProjectName(event.target.value);
    }

The flow is:

    User types
        ↓
    onChange fires
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

The input value is therefore controlled by React state.

---

# 9. Props

Props are values passed from a parent component to a child component.

The Projects component passes project information and callback functions to ProjectCard.

Example:

    <ProjectCard
        key={p.id}
        project={p}
        onDelete={handleDelete}
        onEdit={handleEdit}
    />

ProjectCard receives them:

    function ProjectCard({ project, onDelete, onEdit }) {
        ...
    }

Props allow the component to remain reusable while receiving different data and behavior from its parent.

---

# 10. Parent to Child Communication

The Projects component owns the project data.

It passes the project object to ProjectCard.

Flow:

    Projects
        ↓
    project prop
        ↓
    ProjectCard

The child receives the project:

    function ProjectCard({ project }) {
        ...
    }

This allows ProjectCard to display:

    project.name

and:

    project.status

---

# 11. Child to Parent Communication

A child component cannot directly modify the parent's state.

Instead, the parent passes a function as a prop.

For example:

    onDelete={handleDelete}

The child then calls:

    onDelete(project.id);

This sends the project ID back to the parent.

Flow:

    User clicks Delete
        ↓
    ProjectCard
        ↓
    onDelete(project.id)
        ↓
    Projects.handleDelete(id)
        ↓
    setProjects(...)
        ↓
    React re-renders

The same pattern was used for editing.

---

# 12. CRUD

The Projects page was converted into a CRUD interface.

CRUD means:

- Create
- Read
- Update
- Delete

The four operations were implemented using React state and JavaScript array methods.

---

# 13. Create Project

The Create Project functionality was implemented using:

    function handleCreateProject() {
        setProjects(prevProjects => [
            ...prevProjects,
            {
                id: prevProjects.length + 1,
                name: projectName,
                status: "active"
            }
        ]);
    }

The spread operator:

    ...prevProjects

copies the existing project elements into a new array.

The new project is then added.

Conceptually:

    Old projects
        ↓
    [Project 1, Project 2, Project 3]

    +

    New project
        ↓
    Weather App

    Result
        ↓
    [Project 1, Project 2, Project 3, Weather App]

The new array is passed to setProjects().

---

# 14. Spread Operator

The spread operator was used to create a new array instead of modifying the existing array.

Example:

    [
        ...prevProjects,
        newProject
    ]

This means:

    Copy all existing projects
    +
    Add the new project

The spread operator was also used when updating an individual project.

Example:

    {
        ...p,
        name: projectName
    }

This means:

    Copy all properties from p
    +
    Replace the name property

---

# 15. Read Projects

Projects are displayed using map():

    projects.map(p => (
        <ProjectCard
            key={p.id}
            project={p}
            onDelete={handleDelete}
            onEdit={handleEdit}
        />
    ))

map() goes through every project and returns a ProjectCard.

Conceptually:

    projects
        ↓
    map()
        ↓
    ProjectCard
    ProjectCard
    ProjectCard

The UI is therefore generated from the project state.

---

# 16. React Key

Each ProjectCard receives:

    key={p.id}

The ID is unique for every project.

React uses the key to identify individual elements in the rendered list.

Example:

    <ProjectCard
        key={p.id}
        project={p}
    />

A unique key should be used when rendering lists.

---

# 17. Delete Project

The delete function was implemented using filter():

    function handleDelete(id) {
        setProjects(prevProjects =>
            prevProjects.filter(p => p.id !== id)
        );
    }

filter() creates a new array containing only the projects for which the condition is true.

For example, if:

    id = 2

then:

    p.id !== 2

means:

    Project 1 → keep
    Project 2 → remove
    Project 3 → keep

Result:

    [Project 1, Project 3]

That new array becomes the new projects state.

---

# 18. Why filter() Was Used for Delete

The requirement was:

    Remove the project whose ID matches the selected ID.

filter() is appropriate because it creates a new array while excluding the matching element.

Important concept:

    filter()
        ↓
    returns a new array

It does not directly mutate the original array.

---

# 19. Edit Project

An editing state was introduced:

    const [editingProjectId, setEditingProjectId] = useState(null);

Initially:

    editingProjectId = null

This means:

    No project is currently being edited.

When the user clicks Edit:

    function handleEdit(id) {
        setEditingProjectId(id);

        const projectToEdit = projects.find(
            p => p.id === id
        );

        setProjectName(projectToEdit.name);
    }

The project ID is stored.

The selected project is found.

Its name is placed into the input.

---

# 20. find()

find() was used to locate the project being edited.

Example:

    const projectToEdit = projects.find(
        p => p.id === id
    );

find() returns the first matching element.

Unlike filter():

    filter()
        ↓
    returns an array

    find()
        ↓
    returns the matching element

Since project IDs are unique, find() is suitable for locating a specific project.

---

# 21. Editing Flow

The complete editing flow is:

    User clicks Edit
            ↓
    ProjectCard calls onEdit(project.id)
            ↓
    handleEdit(id)
            ↓
    setEditingProjectId(id)
            ↓
    find() locates the project
            ↓
    setProjectName(projectToEdit.name)
            ↓
    Input displays existing name

The user can then modify the name.

---

# 22. Save / Update Project

The Save operation was implemented using map():

    function handleSave() {
        setProjects(prevProjects =>
            prevProjects.map(p =>
                p.id === editingProjectId
                    ? { ...p, name: projectName }
                    : p
            )
        );

        setEditingProjectId(null);
    }

The map() operation checks every project.

If the ID matches the project currently being edited:

    p.id === editingProjectId

a new object is created:

    {
        ...p,
        name: projectName
    }

Otherwise:

    p

is returned unchanged.

---

# 23. Why map() Was Used for Update

The requirement was:

    Replace one project while keeping all other projects unchanged.

map() is appropriate because it creates a new array while allowing one element to be replaced.

Conceptually:

    Project 1 → unchanged
    Project 2 → updated
    Project 3 → unchanged

Result:

    [Project 1, Updated Project 2, Project 3]

---

# 24. Object Spread During Update

The update uses:

    {
        ...p,
        name: projectName
    }

Suppose the existing project is:

    {
        id: 2,
        name: "Project 2",
        status: "pending"
    }

and:

    projectName = "Weather App"

The result becomes:

    {
        id: 2,
        name: "Weather App",
        status: "pending"
    }

The ID and status are preserved.

Only the name changes.

---

# 25. Resetting Edit Mode

After saving:

    setEditingProjectId(null);

This tells the application that editing is finished.

The state changes from:

    editingProjectId = 2

to:

    editingProjectId = null

The UI therefore switches back to Create mode.

---

# 26. Conditional Rendering

Conditional rendering was used to switch between Create and Edit modes.

Example:

    {editingProjectId !== null
        ? <Button
            text="Save"
            onClick={handleSave}
          />
        : <Button
            text="Create Project"
            onClick={handleCreateProject}
          />
    }

The condition asks:

    Is editingProjectId not null?

If yes:

    Show Save

If no:

    Show Create Project

---

# 27. Ternary Operator

The ternary operator has the structure:

    condition ? valueIfTrue : valueIfFalse

In the Projects component:

    editingProjectId !== null
        ? Save button
        : Create button

This is useful when exactly one of two UI options should be displayed.

---

# 28. Logical AND Rendering

Logical AND rendering was also practiced.

Example:

    {projects.length === 0 && (
        <h2>No Projects Found</h2>
    )}

This means:

    If projects.length === 0
        ↓
    Render No Projects Found

Otherwise:

    Render nothing for that expression.

The concept is:

    condition && element

The element is rendered only when the condition is true.

---

# 29. Empty State

The Projects page displays an empty-state message when there are no projects.

The condition is:

    projects.length === 0

If true:

    No Projects Found

If false:

    projects.map(...)

This gives the user feedback instead of displaying an empty page.

---

# 30. Derived Data

Learned that values that can be calculated from existing state generally do not need separate state.

Example:

    const totalProjects = projects.length;

For active projects:

    const activeProjects =
        projects.filter(
            p => p.status === "active"
        ).length;

The projects state remains the source of truth.

This avoids duplicated state becoming inconsistent.

---

# 31. Why Duplicate State Can Be a Problem

Suppose both of these were stored separately:

    projects

and:

    activeProjects

After deleting an active project, projects could change while activeProjects remains unchanged.

That creates inconsistent state.

Instead:

    projects
        ↓
    derived activeProjects

This ensures the value is always calculated from the latest projects state.

Important principle:

    Keep the minimum necessary data in state.

---

# 32. Immutable Updates

React state should not be directly mutated.

Instead of modifying an existing array or object directly, a new array or object is created.

Examples used in the session:

### Add

    [
        ...prevProjects,
        newProject
    ]

### Delete

    prevProjects.filter(p => p.id !== id)

### Update

    prevProjects.map(p =>
        p.id === editingProjectId
            ? { ...p, name: projectName }
            : p
    )

These patterns create new values for React to use as the updated state.

---

# 33. Complete Parent-Child Flow

The final Projects and ProjectCard relationship works like this:

    Projects
        │
        ├── project
        ├── onDelete
        └── onEdit
        │
        ↓
    ProjectCard
        │
        ├── Display project
        │
        ├── Delete button
        │       ↓
        │   onDelete(project.id)
        │
        └── Edit button
                ↓
            onEdit(project.id)

The parent owns the state.

The child receives data and callbacks.

The child triggers callbacks.

The parent updates the state.

React re-renders the UI.

---

# 34. Final Projects Component Responsibilities

The Projects component now handles:

- Project state.
- Project name state.
- Editing state.
- Create operation.
- Delete operation.
- Edit operation.
- Save/update operation.
- Controlled input.
- Conditional rendering.
- Empty-state rendering.
- Rendering ProjectCard components.

This demonstrates the idea of keeping shared application state in the parent component.

---

# 35. Final ProjectCard Responsibilities

ProjectCard handles the presentation of an individual project.

It receives:

- project
- onDelete
- onEdit

It displays:

- Project name.
- Project status.
- View project button.
- Delete button.
- Edit button.

It does not own the projects collection.

It does not directly modify the parent's state.

Instead, it communicates with the parent through callback props.

---

# 36. Important Mental Models

## State

    State = data that can change and should cause the UI to update.

## Setter

    Setter = function used to update React state.

## Props

    Props = data or behavior passed from parent to child.

## Callback Prop

    Callback prop = function passed to a child so the child can request an action from the parent.

## map()

    map() = create a new array by transforming each element.

## filter()

    filter() = create a new array containing only elements that pass a condition.

## find()

    find() = find the first element matching a condition.

## Derived Data

    Derived data = data calculated from existing state instead of stored separately.

---

# 37. Final React State Flow

The most important flow learned during Session 6 is:

    User action
        ↓
    Event handler
        ↓
    State setter
        ↓
    State changes
        ↓
    React re-renders
        ↓
    Component reads latest state
        ↓
    UI reflects new state

For the Projects feature:

    User clicks Delete
        ↓
    handleDelete(id)
        ↓
    setProjects(...)
        ↓
    projects changes
        ↓
    React re-renders
        ↓
    projects.map(...)
        ↓
    Deleted project disappears

---

# 38. Session 6 Final Milestone

A complete Projects CRUD interface was successfully implemented.

The application now supports:

- Create project.
- Read/display projects.
- Edit project.
- Save/update project.
- Delete project.
- Empty-state rendering.
- Controlled input.
- Parent-child communication.
- Conditional Create/Edit UI.
- Immutable state updates.
- Functional state updates.

The Projects page is now state-driven rather than relying only on static data.

---

# 39. Key Concepts for Revision

Before moving to the next session, the following concepts should be understood clearly:

- What state is.
- Why normal variables do not trigger React re-renders.
- What useState returns.
- What a state setter does.
- Why functional state updates are useful.
- Difference between state and props.
- How parent and child components communicate.
- How callback props work.
- How controlled inputs work.
- Why state should be updated immutably.
- How spread syntax works with arrays and objects.
- When to use map().
- When to use filter().
- When to use find().
- What derived data means.
- How conditional rendering works.
- How CRUD operations can be implemented with React state.

---

# 40. Session 6 Completion Checklist

- [x] Understand useState.
- [x] Understand state values.
- [x] Understand state setters.
- [x] Understand state-triggered re-rendering.
- [x] Understand functional state updates.
- [x] Understand controlled inputs.
- [x] Understand state vs props.
- [x] Understand parent-to-child communication.
- [x] Understand child-to-parent communication.
- [x] Understand callback props.
- [x] Implement project creation.
- [x] Implement project rendering.
- [x] Implement project deletion.
- [x] Implement project editing.
- [x] Implement project updating.
- [x] Implement empty-state rendering.
- [x] Practice map().
- [x] Practice filter().
- [x] Practice find().
- [x] Practice spread syntax.
- [x] Practice immutable state updates.
- [x] Practice derived data.
- [x] Practice conditional rendering.
- [x] Complete Projects CRUD milestone.
- [x] Test Create.
- [x] Test Read.
- [x] Test Update.
- [x] Test Delete.

---

# 41. Git Milestone

After completing Session 6, save the milestone using Git.

Commands:

    git status

    git add .

    git commit -m "Complete Session 6 React state management"

    git push

The commit represents the completion of the React state management and Projects CRUD milestone.

---

# 42. Session 6 Summary

Session 6 moved the project from static/dynamic rendering into interactive React state management.

The most important concept learned was that React state acts as the source of truth for the UI.

When state changes through a state setter:

    State
      ↓
    Re-render
      ↓
    UI update

The Projects page now demonstrates this pattern through a complete CRUD workflow.

Session 6 is complete.