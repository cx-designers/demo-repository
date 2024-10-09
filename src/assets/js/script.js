document.addEventListener("DOMContentLoaded", function() {
  gsap.set('.cursor', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

  let cursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('.btn');
  let secondSection = document.querySelector('.second-section'); // Replace with your actual second section selector

  let mouseX, mouseY;

  // Track mouse movement and move cursor
  window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
  });

  secondSection.addEventListener('mouseenter', e => {
    console.log("mouse enter in second section");
    gsap.to(cursor , {
        backgroundColor : blue,
    });
  })
  // Button hover effects
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(cursor, 0.5, {
        scale: 0,
        opacity: 0
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(cursor, 0.5, {
        scale: 1,
        opacity: 1,
        x: mouseX,
        y: mouseY
      });
    });
  });
});
