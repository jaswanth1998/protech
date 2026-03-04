---
globs: src/**/*.jsx
---

# Animation Rules

## Framework

Use **Framer Motion** for all component animations.

## Reduced Motion

**MANDATORY**: All animations must respect `prefers-reduced-motion`.

```jsx
import { useReducedMotion } from 'framer-motion';

function Component() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    />
  );
}
```

## Common Animation Patterns

### Fade Up (sections, cards)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

### Staggered Grid (service cards, feature cards)
```jsx
// Parent
<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>...</motion.div>
  ))}
</motion.div>

// Variants
const containerVariants = { visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
```

### Card Hover
```jsx
whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
transition={{ duration: 0.2 }}
```

### Stat Counter
- Trigger animation on scroll into view using Intersection Observer
- Count from 0 to target value
- Use `useScrollAnimation` hook

## Rules

- Use `viewport={{ once: true }}` — animate only once on first scroll
- Keep durations short: 0.2s for hover, 0.3-0.5s for enter animations
- Stagger delay: 0.1s between children
- Never animate layout properties (width, height) that cause layout thrashing
- Prefer `opacity` and `transform` (translate, scale) for performant animations
