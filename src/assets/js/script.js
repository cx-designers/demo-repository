document.addEventListener("DOMContentLoaded", function () {
  gsap.set('.cursor', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

  let cursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('header.cust-header ul li.menu-item a.menu-link');
  let bannerSection = document.querySelector('.banner-section'); 
  let secondSection = document.querySelector('.secondSection');
  let headerButton = document.querySelector('.CAT-button');

  let mouseX, mouseY;

  // Track mouse movement and move cursor
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, { duration: 0.5, x: mouseX, y: mouseY });
  });

  // Button hover effects
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#cfcfff', scale: 1 });
      $(cursor).addClass("hovered");
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#000', scale: 1 });
      $(cursor).removeClass("hovered");
    });
  });

  bannerSection.addEventListener('mouseenter', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#fff', scale: 5 });
    $(cursor).addClass("hovered");
  });

  bannerSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#000', scale: 1 });
    $(cursor).removeClass("hovered");
  });

  headerButton.addEventListener('mouseenter', () => {
    gsap.to(cursor, { duration: 0.5 , backgroundColor: '#ffff00', scale: 3});
    $(cursor).addClass("hovered"); 
  });

  headerButton.addEventListener('mouseleave', () => {
    gsap.to(cursor, { duration: 0.5 , backgroundColor: '#000', scale: 1 });
    $(cursor).addClass("hovered");
  });
  secondSection.addEventListener('mouseenter', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#fff', scale: 3 });
    $(cursor).addClass("hovered");
  });
  secondSection.addEventListener('mouseleave', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#000', scale: 1 });
    $(cursor).removeClass("hovered");
  });
});
