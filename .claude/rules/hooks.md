---
globs: src/hooks/**/*.js
---

# Custom Hook Rules

## Location

All custom hooks live in `src/hooks/`. One hook per file.

## Naming

- File: `camelCase` with `use` prefix — `useScrollToTop.js`
- Export: named export matching filename — `export function useScrollToTop() {}`

## Required Hooks

| Hook | Purpose |
|---|---|
| `useScrollToTop` | Scroll to top on route change (uses `useLocation` from react-router) |
| `useScrollAnimation` | Trigger animations when element scrolls into view (Intersection Observer) |
| `useMediaQuery` | Detect screen size / match breakpoints |

## Hook Template

```js
import { useEffect } from 'react';

export function useHookName(param) {
  useEffect(() => {
    // effect logic
    return () => {
      // cleanup
    };
  }, [param]);

  return value;
}
```

## Rules

- One hook per file
- Named export (not default)
- Any logic used by 2+ components must become a hook
- Follow React hooks rules (no conditional hooks, only call in components/hooks)
- Clean up effects (event listeners, observers, timers) in the return function
