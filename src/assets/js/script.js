// document.addEventListener("DOMContentLoaded", function() {

//   gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

//   let cursor = document.querySelector('.cursor');
//   let buttons = document.querySelectorAll('.btn'); // Select all h1 elements

//   let mouseX;
//   let mouseY;

//   window.addEventListener('mousemove', e => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
//   });

//   buttons.forEach(button => { // Loop through all the buttons
//       button.addEventListener('mouseenter', () => {
//           gsap.to(cursor, 1, {
//               scale: 0.5,
//               opacity: 0
//           });
//       });

//       button.addEventListener('mousemove', () => {
//           gsap.to(cursor, 1, {
//               x: mouseX,
//               y: mouseY,
//               scale: 0.5,
//               opacity: 0,
//           });
//       });

//       button.addEventListener('mouseleave', () => {
//           gsap.to(cursor, 1, {
//               scale: 1,
//               opacity: 1
//           });
//       });
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  gsap.set('.cursor', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

  let cursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('.btn');

  let mouseX, mouseY;

  window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
  });

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

