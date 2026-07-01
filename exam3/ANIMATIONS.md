# Animation System Documentation

## Overview

A comprehensive animation system for your luxury real estate website. All animations are CSS-based for optimal performance and smooth user experience.

## Quick Start

### Basic Animations

Add animation classes directly to your JSX elements:

```jsx
// Fade in animation
<div className="animate-fade-in">Content</div>

// Fade in with upward movement
<div className="animate-fade-in-up">Content</div>

// Slide in from left
<div className="animate-slide-in-left">Content</div>
```

### Scroll Animations

Use the `useScrollAnimation` hook to trigger animations when elements come into view:

```jsx
import useScrollAnimation from "../../hooks/useScrollAnimation";

function MyComponent() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="fade-in-on-scroll">
      This will animate when visible
    </div>
  );
}
```

---

## Available Animation Classes

### Fade Animations

- `.animate-fade-in` - Fade in from transparent to visible
- `.animate-fade-in-up` - Fade in while moving up
- `.animate-fade-in-down` - Fade in while moving down

### Slide Animations

- `.animate-slide-in-left` - Slide in from left with fade
- `.animate-slide-in-right` - Slide in from right with fade

### Zoom Animations

- `.animate-zoom-in` - Scale up from small to normal size with fade

### Motion Animations

- `.animate-bounce` - Gentle bouncing motion (infinite)
- `.animate-pulse` - Pulsing opacity effect (infinite)
- `.animate-float` - Floating up and down motion (infinite)

---

## Stagger Delays

Use stagger classes for sequential animations in lists:

```jsx
{
  items.map((item, index) => (
    <div
      key={item.id}
      className="animate-fade-in-up stagger-${(index % 5) + 1}"
    >
      {item.content}
    </div>
  ));
}
```

Available stagger delays:

- `.stagger-1` - 0.1s delay
- `.stagger-2` - 0.2s delay
- `.stagger-3` - 0.3s delay
- `.stagger-4` - 0.4s delay
- `.stagger-5` - 0.5s delay

---

## Component-Specific Animations

### Hero Section

```jsx
<h1 className="hero-title">Title</h1>
<p className="hero-subtitle">Subtitle</p>
<a className="hero-cta">Call to Action</a>
```

### Card Items

```jsx
<div className="card-item">
  <img className="card-image" src="..." alt="..." />
  Content
</div>
```

- Automatically animates on scroll
- Lifts up on hover with shadow
- Image zooms smoothly on hover

### Buttons

```jsx
<button className="btn-hover-lift">Click Me</button>
<button className="btn-glow">Special Button</button>
```

### Filter Buttons

```jsx
<button className="filter-btn">All</button>
<button className="filter-btn">Building</button>
```

- Underline animation on hover/active
- Smooth color transitions

### Social Icons

```jsx
<div className="social-icon animate-fade-in">Icon</div>
```

- Animates on page load
- Lifts up on hover

### Images

```jsx
<div className="image-hover">
  <img src="..." alt="..." />
</div>
```

- Smooth zoom effect on hover

### Section Headings

```jsx
<h2 className="section-heading">Section Title</h2>
<p className="section-content">Content</p>
```

### Testimonials

```jsx
<div className="testimonial-card">
  <img className="testimonial-avatar" src="..." />
  <p>Testimonial text</p>
</div>
```

- Lifts on hover with golden glow

### FAQ Items

```jsx
<div className="faq-item">
  <button className="faq-question">Question</button>
  <div className="faq-answer">Answer text</div>
</div>
```

### Form Inputs

```jsx
<input className="form-input" type="text" placeholder="Name" />
```

- Golden bottom border appears on focus
- Subtle glow effect

---

## Scroll Animation Hook Usage

### Basic Usage

```jsx
const ref = useScrollAnimation();
return (
  <div ref={ref} className="fade-in-on-scroll">
    Content
  </div>
);
```

### Custom Options

```jsx
const ref = useScrollAnimation({
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
});
```

### Stagger Multiple Items

```jsx
const { ref, getItemClassName } = useStaggerAnimation(itemCount);

return (
  <div ref={ref}>
    {items.map((item, index) => (
      <div
        key={item.id}
        className={`animate-fade-in-up ${getItemClassName(index)}`}
      >
        {item.content}
      </div>
    ))}
  </div>
);
```

---

## Animation Timing

All animations use optimal timing for luxury feel:

- **Fade/Slide Animations**: 0.6-0.8s (smooth, deliberate)
- **Hover Effects**: 0.3s (responsive, immediate)
- **Infinite Animations**: 2-3s (calming, continuous)

---

## Hover Effects

### Button Lift

```jsx
<button className="btn-hover-lift">Click Me</button>
```

- Lifts 3px with shadow on hover

### Glow Effect

```jsx
<button className="btn-glow">Special</button>
```

- Glows with golden color on hover

### Image Zoom

```jsx
<div className="image-hover">
  <img src="..." />
</div>
```

- Image scales up to 112% on hover

### Navigation Links

- Automatic golden underline animation on hover

---

## Advanced: Using Inline Delays

```jsx
<p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
  Delayed content
</p>
```

---

## Performance Tips

1. **Use CSS animations over JavaScript** - Already optimized
2. **Limit motion for accessibility** - Respect `prefers-reduced-motion`
3. **Combine with Intersection Observer** - Only animate visible elements
4. **Use will-change sparingly** - Only for complex animations

---

## Browser Support

All animations use standard CSS3:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Examples in Your Project

### HomePage

- Hero title and subtitle fade in on load
- Social icons stagger fade in
- Card swiper items animate on scroll

### CardSwiper

- Cards fade in with lift effect
- Images zoom on hover
- Smooth transitions on filter

### Navigation

- Links have golden underline effect

---

## Customization

To modify animation speeds, edit `src/index.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px); /* Change distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out; /* Change duration */
}
```

---

## Summary

- ✅ 20+ pre-built animations
- ✅ Scroll-triggered animations with hook
- ✅ Staggered animations for lists
- ✅ Hover effects for interactivity
- ✅ Mobile-responsive
- ✅ Performance-optimized
- ✅ Luxury/professional feel
