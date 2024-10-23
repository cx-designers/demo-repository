document.addEventListener("DOMContentLoaded", function () {
  gsap.set('.cursor', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

  let cursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('header.cust-header ul li.menu-item a.menu-link');
  let bannerSection = document.querySelector('.banner-section'); 
  let secondSection = document.querySelector('.secondSection');
  let headerButton = document.querySelector('.CAT-button');
  let galleryItems = document.querySelectorAll('.gallerySection .grid-item');
  let body = document.querySelector('body');

  let mouseX, mouseY;

  // Track mouse movement and move cursor
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, { duration: 0.5, x: mouseX, y: mouseY });
  });

  // Button hover effects
    body.addEventListener('mouseenter', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#fff', scale: 5 });
      $(cursor).addClass("hovered");
    });

    body.addEventListener('mouseleave', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#000', scale: 1 });
      $(cursor).removeClass("hovered");
    });


  bannerSection.addEventListener('mouseenter', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#fff', scale: 10 });
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

  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#fff', scale: 0 });
      $(cursor).addClass("hovered");
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#000', scale: 1 });
      $(cursor).removeClass("hovered");
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  // Animate each image from right to left sequentially
  const images = gsap.utils.toArray('.imagesSection .img-inner-item');
  
  images.forEach((image, i) => {
    gsap.fromTo(image, 
      { x: '100vw', opacity: 0 },  // Start off-screen to the right
      {
        x: '0vw', 
        opacity: 1, 
        duration: 1.5, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: "top center", // When the top of the image reaches the center of the viewport
          end: "bottom center",
          scrub: true
        }
      }
    )
  });
});
