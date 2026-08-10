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

```text
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