document.addEventListener('DOMContentLoaded', () => {
  // GSAP animation example
  gsap.from('.animated-content h1', { opacity: 0, y: -50, duration: 1.5 });

  // Cursor follower for buttons
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
  });

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2, opacity: 0.7 });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
    });
  });
});
