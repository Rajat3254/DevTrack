# DevTrack - Session 3

## Topic

Navigation & Layout Components

## Objective

Build a reusable application layout with Navbar, Sidebar and Footer components and implement client-side navigation with active route highlighting.

---

## Concepts Learned

### 1. Navigation Components

Created reusable layout components:

- Navbar
- Sidebar
- Footer

These components are composed inside `MainLayout`.

---

### 2. Component Composition

`MainLayout` owns the overall application structure.

    MainLayout
    │
    ├── Navbar
    │
    ├── layout-content
    │   ├── Sidebar
    │   └── main
    │       └── Outlet
    │
    └── Footer

This keeps common application structure separate from page-specific content.

Pages only need to provide their own content through the router.

---

### 3. Link vs NavLink

Learned the difference between `Link` and `NavLink`.

`Link` provides client-side navigation without a full browser reload.

Example:

    <Link to="/projects">Projects</Link>

`NavLink` provides client-side navigation and also gives access to the active route state.

Example:

    <NavLink
      to="/projects"
      className={({ isActive }) =>
        isActive ? "active" : "link"
      }
    >
      Projects
    </NavLink>

---

### 4. Active Route Highlighting

Used `NavLink` and `isActive` to visually identify the current page.

    className={({ isActive }) =>
      isActive ? "active" : "link"
    }

When the current URL matches the navigation item's route, React Router sets `isActive` to `true`.

This allows the Sidebar to automatically highlight the current page.

---

### 5. Semantic HTML

Used semantic HTML elements for the layout:

    <nav>
    <main>
    <footer>

These elements communicate the purpose of different sections of the application.

- `<nav>` → navigation section
- `<main>` → primary page content
- `<footer>` → footer information

---

### 6. Flexbox Layout

Used Flexbox to create the application layout.

    .layout-content {
      display: flex;
      flex-direction: row;
    }

This places the Sidebar and Main Content next to each other.

The Sidebar uses:

    .sidebar {
      display: flex;
      flex-direction: column;
    }

This arranges navigation links vertically.

Used `gap` to create consistent spacing between navigation items:

    .sidebar {
      gap: 0.5rem;
    }

---

### 7. CSS Organization

Created component-specific CSS files:

    styles/
    ├── MainLayout.css
    ├── Navbar.css
    ├── Sidebar.css
    └── Footer.css

Each component imports its own stylesheet.

Example:

    import "../../styles/Sidebar.css";

Also learned to use shared selectors for common styles:

    .link,
    .active {
      padding: 1rem;
      margin: 0;
      text-decoration: none;
    }

State-specific styles can then be defined separately:

    .link {
      background-color: #f8f9fa;
      color: #333;
    }

    .active {
      background-color: #e9ecef;
      color: #007bff;
    }

---

### 8. Responsive Design

Used CSS media queries to adapt the application to smaller screens.

    @media (max-width: 768px) {
      .layout-content {
        flex-direction: column;
      }
    }

On smaller screens:

- Sidebar moves above the main content.
- Sidebar becomes full width.
- Sidebar navigation changes from vertical to horizontal.
- Navigation items are distributed using `justify-content`.

Example:

    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
      }
    }

---

### 9. Nested Flexbox & Full-Height Layout

The application uses Flexbox at multiple levels.

The root application uses a vertical Flexbox layout:

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100svh;
    }

This creates the main vertical structure:

    #root
    │
    ├── Navbar
    ├── layout-content
    └── Footer

The `layout-content` itself is another Flexbox container:

    .layout-content {
      display: flex;
      flex: 1;
    }

This creates the horizontal structure:

    layout-content
    │
    ├── Sidebar
    └── Main Content

The two uses of `flex: 1` work on different axes:

    #root
    flex-direction: column
            │
            └── layout-content
                flex: 1
                ↓
            remaining vertical space


    layout-content
    flex-direction: row
            │
            └── main-content
                flex: 1
                ↓
            remaining horizontal space

This allows the application to occupy the full viewport height while keeping the Footer at the bottom.

---

## CSS Box Sizing

Used:

    box-sizing: border-box;

This makes the declared width include padding and borders.

For example:

    .sidebar {
      width: 100%;
      box-sizing: border-box;
    }

This prevents the Sidebar from becoming wider than its parent when padding is included.

---

## Root Application Layout

The default Vite root styling was adjusted to allow DevTrack to use the full viewport width.

Changed from a fixed width:

    #root {
      width: 1126px;
    }

to:

    #root {
      width: 100%;
      max-width: 100%;
    }

The root also uses:

    min-height: 100svh;
    display: flex;
    flex-direction: column;

This creates a full-height application shell.

---

## Final Project Structure

    src/
    │
    ├── assets/
    │
    ├── components/
    │   ├── common/
    │   ├── layout/
    │   │   ├── MainLayout.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Footer.jsx
    │   └── ui/
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
    │
    ├── routes/
    │   └── AppRoutes.jsx
    │
    ├── styles/
    │   ├── MainLayout.css
    │   ├── Navbar.css
    │   ├── Sidebar.css
    │   └── Footer.css
    │
    └── App.jsx

---

## Files Created

- Navbar.jsx
- Sidebar.jsx
- Footer.jsx
- MainLayout.css
- Navbar.css
- Sidebar.css
- Footer.css
- Session 3 documentation

---

## Session Insights

### Reusable Layout

Common application elements should be defined once and composed through a shared layout.

### Separation of Concerns

Pages focus on page-specific content.

Layout components handle application structure.

### Navigation

`NavLink` is useful when navigation items need to visually represent the currently active route.

### Flexbox

The parent controls the arrangement of its children.

`flex: 1` allows an element to consume available space along the container's main axis.

### Nested Flexbox

Flexbox can be used at multiple levels.

The outer Flexbox controls the vertical application structure, while the inner Flexbox controls the horizontal Sidebar/Main Content structure.

### Responsive Design

A desktop layout should adapt to smaller screens instead of simply shrinking everything.

---

## Interview Questions

1. What is the difference between `Link` and `NavLink`?

2. Why should we use `Link` instead of `<a href>` for internal React Router navigation?

3. What does `isActive` provide in `NavLink`?

4. Why is `MainLayout` responsible for Navbar, Sidebar and Footer?

5. What is the purpose of `Outlet`?

6. Why does the main content use `flex: 1`?

7. What does `gap` do in Flexbox?

8. What does `box-sizing: border-box` do?

9. What is a media query?

10. Why should pages remain independent from the application's layout?

11. Why does `flex: 1` on `.layout-content` make the Footer move to the bottom of the viewport?

---

## Session Deliverables

- Reusable Navbar
- Reusable Sidebar
- Reusable Footer
- Clickable Dashboard navigation
- Clickable Projects navigation
- Clickable Tasks navigation
- Active route highlighting
- Flexbox-based application layout
- Full-height application shell
- Responsive layout
- Responsive Sidebar navigation
- Component-specific CSS organization

---

## Key Takeaway

> Pages define what the user sees. Layout components define how the application is structured.