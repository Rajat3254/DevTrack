# DevTrack — Developer Project Management Platform

DevTrack is a project management application built to practice and strengthen frontend development skills using React. The project is developed step by step, with each session focusing on specific concepts and implementing them in the application.

## Tech Stack

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Redux Toolkit (planned)
- Java with Spring Boot (planned)
- MySQL (planned)

## Project Structure

```text
DevTrack/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   └── ui/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── docs/
│   ├── session-01.md
│   ├── session-02.md
│   ├── session-03.md
│   ├── session-04.md
│   ├── session-05.md
│   ├── session-06.md
│   ├── session-07.md
│   └── session-08.md
├── README.md
└── CHANGELOG.md
```

*Note: The structure above is a reference. Keep it aligned with the actual folders and files in your repository.*

---

## Learning Progress

| Session | Topic | Status |
|---|---|---|
| Session 1 | Project Setup | Completed |
| Session 2 | Frontend Architecture | Completed |
| Session 3 | React Router and Layouts | Completed |
| Session 4 | Props and Reusability | Completed |
| Session 5 | Dynamic Data Rendering | Completed |
| Session 6 | React State and CRUD Operations | Completed |
| Session 7 | React Forms and Validation | Completed |
| Session 8 | React Effects and Browser Storage | Completed |

---

## Session 1 — Project Setup

### Topics Covered

- Initialized the project repository.
- Configured Git and GitHub.
- Created the React application using Vite.
- Installed and configured Tailwind CSS.
- Created the initial React page.
- Established the project documentation structure.

Documentation: `docs/session-01.md`

## Session 2 — Frontend Architecture

### Topics Covered

- Organized the frontend application structure.
- Learned the role of components and folders.
- Understood JavaScript modules.
- Practiced importing and exporting modules.
- Separated application responsibilities.

Documentation: `docs/session-02.md`

## Session 3 — React Router and Layouts

### Topics Covered

- Configured React Router.
- Created routes between pages.
- Learned nested routing.
- Used `Outlet` to render nested route content.
- Built layout components.
- Used `NavLink` to identify active navigation links.
- Implemented a responsive sidebar.

Documentation: `docs/session-03.md`

## Session 4 — Props and Reusability

### Topics Covered

- Understood React props.
- Passed data from parent components to child components.
- Created reusable UI components.
- Practiced component composition.
- Built reusable components such as buttons, cards, badges, and inputs.
- Used props to customize component behavior and appearance.

Documentation: `docs/session-04.md`

## Session 5 — Dynamic Data Rendering

### Topics Covered

- Rendered dynamic lists using JavaScript's `map()`.
- Used unique keys when rendering lists.
- Passed individual project data to reusable components.
- Displayed project information dynamically.
- Improved the project list UI using reusable components.

Documentation: `docs/session-05.md`

## Session 6 — React State and CRUD Operations

### Topics Covered

- Understood React's `useState` hook.
- Learned how state updates trigger re-renders.
- Managed project data using React state.
- Implemented Create, Read, Update, and Delete operations.
- Created and deleted projects.
- Edited project information.
- Saved and updated project data through state changes.
- Practiced controlled state updates.

Documentation: `docs/session-06.md`

## Session 7 — React Forms and Validation

### Topics Covered

- Worked with controlled form inputs.
- Managed form values using React state.
- Handled form submissions.
- Understood the difference between submit and cancel buttons.
- Implemented form validation.
- Displayed validation errors.
- Prevented invalid form submissions.
- Connected form operations to project CRUD functionality.

Documentation: `docs/session-07.md`

## Session 8 — React Effects and Browser Storage

### Topics Covered

- Understood side effects in React.
- Learned how to use the `useEffect` hook.
- Understood dependency arrays and effect execution.
- Learned browser `localStorage`.
- Used `localStorage.getItem()` and `localStorage.setItem()`.
- Used `JSON.stringify()` to convert JavaScript data into a string.
- Used `JSON.parse()` to restore stored data.
- Loaded saved projects when the component mounts.
- Persisted project changes across page refreshes.
- Used an `isLoaded` flag to prevent saving before the initial loading process finishes.

### Persistence Flow

```text
React State
    |
    v
JSON.stringify()
    |
    v
localStorage
    |
    v
JSON.parse()
    |
    v
Restore React State
```

### Key Implementation

The following pattern loads saved projects and persists subsequent changes:

```jsx
const [projects, setProjects] = useState(initialProjects);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  }

  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects, isLoaded]);
```

The loading effect retrieves previously saved projects when the component mounts. The saving effect waits until loading finishes and then persists the current project state whenever `projects` changes.

Documentation: `docs/session-08.md`

---

## Current Milestone

**Session 8 — React Effects and Browser Storage**

DevTrack now persists project data in the browser using `localStorage`. Projects can remain available after a page refresh, provided the browser storage has not been cleared.

## Upcoming Learning Goals

- React Context API.
- Sharing data across components.
- Reducing unnecessary prop drilling.
- Further improving the application's component architecture.
- Introducing Redux Toolkit in a later stage.
- Connecting the frontend to a backend API.
- Integrating Spring Boot and MySQL.

These are planned learning goals and may change as the project progresses.

---

## Running the Project

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

---

## Development Workflow

At the end of each session:

1. Complete the implementation.
2. Test the functionality.
3. Run the production build.
4. Update the session documentation.
5. Update `README.md` and `CHANGELOG.md`.
6. Commit the completed work.
7. Push the changes to GitHub.

---

## Project Philosophy

DevTrack is being developed through focused learning sessions. Each session introduces specific concepts, applies them to the project, and documents the implementation so that progress can be reviewed and continued systematically.
