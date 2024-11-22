const div = document.querySelector('.site_wrapper');
const glowRotate = document.querySelector('.rotateGlow');
const drarLogo = document.querySelector('.drawlogo');
const drarLine1 = document.querySelector('.drawline1');
const drarLine2 = document.querySelector('.drawline2');
const pathLength = drarLogo.getTotalLength();
const movingDot = document.querySelector('.moving-dot');
const roundO = document.querySelector('.roundeO');
const moveX = document.querySelector('.moveX');
const pathLengthX = drarLine2.getTotalLength();
drarLogo.style.strokeDasharray = pathLength;
drarLogo.style.strokeDashoffset = pathLength;
drarLine1.style.strokeDasharray = pathLength;
drarLine1.style.strokeDashoffset = pathLength;
drarLine2.style.strokeDasharray = pathLength;
drarLine2.style.strokeDashoffset = pathLength;
moveX.style.opacity = 0;

const flyingObjects = document.querySelectorAll('.flying');
const cloudObjects = document.querySelectorAll('.cloud-img img');

// Set flying objects to initial opacity 0
gsap.set(flyingObjects, { opacity: 0 });

setTimeout(() => {
  const tl = gsap.timeline();
  tl.fromTo(glowRotate, {
    opacity: 0,
    x: -100,
    y: -100,
    scale: 0,
    rotation: -180
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    rotation: 0,
    duration: 1,
    scale: 1,
    ease: "power1.inOut"
  }, "-=0.5")
    .to(drarLogo, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "power1.inOut"
    }, "-=0.1")
    .fromTo(".roundeO", {
      strokeDasharray: 500,   // Adjust based on the roundeO path length
      strokeDashoffset: 500,  // Start fully hidden
    }, {
      strokeDashoffset: 0,    // Animate to fully drawn
      duration: 1,
      ease: "power1.inOut"
    }, "+=0.5")
    .to([drarLine1, drarLine2], {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut"
    })
    .add(() => {
      gsap.to(moveX, {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
      });
      animateDot();
      document.body.classList.remove('before_load');
      const paths = document.querySelectorAll('.neon'); // Select multiple paths by class
      neonFlicker(paths);
    }).to(div, {
      onComplete: () => {
        div.style.display = 'flex';

        /* Testimonial Section */

        function createContinuousMarquee(columnSelector, direction, speedMultiplier = 1) {
          const column = document.querySelector(columnSelector);
          const items = Array.from(column.children);

          const clonedItems = items.map(item => item.cloneNode(true));
          clonedItems.forEach(item => column.appendChild(item));

          const itemHeight = items[0].offsetHeight;
          const totalHeight = itemHeight * items.length;

          column.style.height = `${totalHeight * 2}px`;

          const marqueeAnimation = gsap.to(column, {
            y: direction * totalHeight,
            duration: (totalHeight / 50) * speedMultiplier,
            ease: "none",
            repeat: -1,
            paused: false,
            modifiers: {
              y: gsap.utils.unitize((y) => {
                const position = parseFloat(y) % totalHeight;
                return direction === 1 ? position - totalHeight : position;
              })
            }
          });

          column.addEventListener("mouseenter", () => marqueeAnimation.pause());
          column.addEventListener("mouseleave", () => marqueeAnimation.resume());
        }

        createContinuousMarquee(".column-1", -1, 0.7);
        createContinuousMarquee(".column-2", 1, 1);
        createContinuousMarquee(".column-3", -1, 0.7);

        /* Testimonial Section Complete */

        /* Counter Slider Section */

        $(document).ready(function () {

          var swiper = new Swiper(".counter-slider", {
            scrollbar: '.swiper-scrollbar',
            effect: 'coverflow',
            direction: 'vertical',
            loop: true,
            slideToClickedSlide: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            autoplay: true,
            autoplaySpeed: 1000,
            coverflowEffect: {
              rotate: -5,
              stretch: 490,
              depth: 150,
              modifier: 1.2,
              slideShadows: false
            },
            freeMode: false,
            freeModeSticky: false
          });

        });

        /* Counter Slider Section Complete */

        /* Industries Section Start */
        const sliderItems = document.querySelectorAll('.slider-item');

        // Calculate the width for 3.5 slider items
        const visibleWidth = 100 / sliderItems.length * 1;

        // Set the initial position to show 3.5 slides
        gsap.set(".slider", {
          xPercent: 100 - visibleWidth, // Start position to show 3.5 slides
        });

        // GSAP animation for the slider
        gsap.to(".slider", {
          xPercent: -(100 - visibleWidth), // Move to show the remaining slides
          ease: "none", // Smooth, linear scrolling
          scrollTrigger: {
            trigger: ".industries-section",
            pin: true, // Pin the section
            start: "top top", // Start pinning when the section hits the top
            scrub: 2, // Smooth and gradual scrolling
            end: "+=" + (sliderItems.length * 50) + "vw", // Lengthen scroll duration
            onUpdate: (self) => {
              // Debugging or additional transformations can go here
            },
          },
        });
        /* Industries Section Start */

        /* Technologies Section Start */

        function toggleClassesInfinite() {
          const classNames = ['my_section_main', 'cutting-line-embed', 'cutting-tool-icon-wrap']; // Add all class names here

          classNames.forEach(className => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => {
              // Every 5 seconds, add the 'animated' class
              setInterval(() => {
                element.classList.add('animated');

                // After 1 second, remove the 'animated' class
                setTimeout(() => {
                  element.classList.remove('animated');
                }, 2000); // Remove class after 1 second
              }, 5000); // Add class every 5 seconds
            });
          });
        }

        // Call the function
        toggleClassesInfinite();

        /* Technologies Section End */

        /* Footer Section Start */

        const anchors = document.querySelectorAll('.mapnav ul li a[href^="#"]');
        const mapItems = document.querySelectorAll('.map-item');

        anchors.forEach(anchor => {
          anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const hrefValue = anchor.getAttribute('href').substring(1);

            mapItems.forEach(item => {
              if (item.getAttribute('data-attr') === hrefValue) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          });
        });

        /* Footer Section End */


      }
    })
    .to(div, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    }, "-=0.5")
    .from(".from-left", {
      duration: 0.5,      // Duration of the animation (in seconds)
      x: "-120%",          // Start 100 pixels to the left
      ease: "power2.inOut" // Easing function for a smoother transition
    })
    .from(".from-right", {
      duration: 0.5,      // Duration of the animation (in seconds)
      x: "120%",          // Start 100 pixels to the left
      ease: "power2.inOut" // Easing function for a smoother transition
    })
    .to(flyingObjects, {
      opacity: 1,       // Reveal the flying objects
      duration: 1,      // Fade-in duration
      ease: "power1.inOut"
    }); // This step will execute after the left and right animations.

}, 100);

function animateDot() {
  let progress = 0;
  let totalDuration = 1;
  gsap.to({}, {
    duration: totalDuration,
    repeat: -1,
    ease: "power1.inOut",
    onUpdate: function () {
      const lengthAtProgress = pathLength * progress;
      const point = drarLogo.getPointAtLength(lengthAtProgress);
      movingDot.setAttribute('cx', point.x);
      movingDot.setAttribute('cy', point.y);
      progress += 0.001 * gsap.utils.random(0.005, 1);
      if (progress >= 1) {
        progress = 0;
      }
    },
    onRepeat: function () {
      totalDuration = gsap.utils.random(8, 12);
    }
  });
}

/* Cursor Remove JS Start */

window.onload = function () {
  document.body.style.cursor = "none";
};

/* Cursor Remove JS Start */


function neonFlicker(paths) {
  paths.forEach((path) => {
    function flicker() {
      // Randomly adjust drop shadow to create a flickering effect
      const flickerAmount = gsap.utils.random(5.1, 10.5); // Vary shadow intensity
      const flickerColor = gsap.utils.random(0.1, 2); // Random brightness
      const blurAmount = gsap.utils.random(0.5, 2.5); // Random blur amount for flicker

      // Apply new shadow intensity
      path.style.filter = `drop-shadow(0 0 ${blurAmount}px rgba(242, 110, 101, ${flickerColor})) drop-shadow(0 0 ${blurAmount * 2}px rgba(242, 110, 101, ${flickerColor}))`;
    }

    // Flicker randomly over time without stopping other animations
    gsap.to({}, {
      duration: gsap.utils.random(0.1, 0.5),
      repeat: 2,
      onRepeat: flicker,
      repeatRefresh: false // Get a new random value for each repeat
    });
  });
}
gsap.to(".rotateGlow ellipse", {
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut",
  attr: {
    rx: 500, // Increase or decrease the width dynamically
    ry: 200,  // Adjust the height dynamically
    transform: "rotate(-15 1528.03 831.902)" // Subtle rotation changes for liquid effect
  }
});

const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // The div where the animation will be rendered
  renderer: 'svg', // Rendering the animation as SVG
  loop: false, // Control if the animation should loop
  autoplay: false, // Animation will not play automatically
  path: '../assets/img/UNKbhCxzX0.json' // Path to the Lottie JSON file
});
let isPlayingForward = true;
// Add click event to the .menu-toggle button
document.querySelector('.toggle-btn').addEventListener('click', function () {
  if (isPlayingForward) {
    animation.setDirection(1); // Set direction to forward
    animation.play(); // Play the animation forward
  } else {
    animation.setDirection(-1); // Set direction to reverse
    animation.play(); // Play the animation in reverse
  }
  isPlayingForward = !isPlayingForward;
});

document.addEventListener("DOMContentLoaded", function () {

  gsap.fromTo(
    ['.line-animation', '.line-animation-right'], // Select the elements
    { opacity: 0 }, // Starting opacity
    {
      opacity: 1, // Ending opacity
      scrollTrigger: {
        trigger: document.querySelector(".about-sec"),
        start: "top top", // Start animation after scrolling 100vh
        toggleActions: "play none none reverse", // Play when scrolling down, reverse when scrolling up
      },
      duration: 0.1, // Animation duration (1 second)
    }
  );

  gsap.registerPlugin(ScrollTrigger);

  // Animation for the first SVG to move down faster
  gsap.to(".line-one", {
    y: 160, // Move down faster
    scrollTrigger: {
      trigger: ".site_wrapper",
      start: "top 100%", // Start when the section enters the viewport (below the fold initially)
      end: "bottom top", // End when the bottom of the container hits the top of the viewport
      scrub: true, // Smooth animation tied to scroll
    }
  });

  // Animation for the second SVG to move down slower
  gsap.to(".line-two", {
    y: 140, // Move down slower
    scrollTrigger: {
      trigger: ".site_wrapper",
      start: "top 100%",
      end: "bottom top",
      scrub: true,
    }
  });

  // Animation for the third SVG to move down slowest
  gsap.to(".line-three", {
    y: 120, // Move down slowest
    scrollTrigger: {
      trigger: ".site_wrapper",
      start: "top 100%",
      end: "bottom top",
      scrub: true,
    }
  });

  gsap.set('.cursor', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

  let cursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('a');
  let body = document.querySelector('body');
  let mouseX, mouseY;

  // Track mouse movement and move cursor
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, { duration: 0.5, x: mouseX, y: mouseY });
  });

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#F26E65', scale: 0 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(cursor, { duration: 0.5, backgroundColor: '#F26E65', scale: 1 });
    });
  });

  // Button hover effects
  body.addEventListener('mouseenter', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#F26E65', scale: 1 });
  });

  body.addEventListener('mouseleave', () => {
    gsap.to(cursor, { duration: 0.5, backgroundColor: '#F26E65', scale: 0 });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Function to randomly fade out and fade in images
  function fadeImagesRandomly() {
    const wrappers = document.querySelectorAll('.img-wrapper'); // Select all image wrappers

    // Iterate over each wrapper to ensure at least one image remains visible
    wrappers.forEach((wrapper) => {
      const images = Array.from(wrapper.querySelectorAll('img'));
      if (images.length === 0) return;

      // Get visible and hidden images
      const visibleImages = images.filter(img => gsap.getProperty(img, 'opacity') !== 0);
      const hiddenImages = images.filter(img => gsap.getProperty(img, 'opacity') === 0);

      // Ensure there's always at least one visible image
      if (visibleImages.length > 1) {
        // Randomly pick one visible image to fade out
        const imageToFadeOut = visibleImages[Math.floor(Math.random() * visibleImages.length)];

        // Randomly pick a hidden image to fade in
        const imageToFadeIn = hiddenImages.length > 0
          ? hiddenImages[Math.floor(Math.random() * hiddenImages.length)]
          : null;

        // Perform fade-out on the selected visible image
        gsap.to(imageToFadeOut, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            // Perform fade-in on the selected hidden image (if available)
            if (imageToFadeIn) {
              gsap.to(imageToFadeIn, {
                opacity: 1,
                duration: 1
              });
            }
          }
        });
      } else if (hiddenImages.length > 0) {
        // If only one image is visible, pick a hidden image to fade in
        const imageToFadeIn = hiddenImages[Math.floor(Math.random() * hiddenImages.length)];
        gsap.to(imageToFadeIn, {
          opacity: 1,
          duration: 1
        });
      }
    });
  }

  // Set initial opacity for all images (make one random image visible in each wrapper)
  document.querySelectorAll('.img-wrapper').forEach(wrapper => {
    const images = Array.from(wrapper.querySelectorAll('img'));
    images.forEach(img => gsap.set(img, { opacity: 0 })); // Hide all images
    const randomImage = images[Math.floor(Math.random() * images.length)];
    gsap.set(randomImage, { opacity: 1 }); // Show one random image
  });

  setInterval(fadeImagesRandomly, 5000);

  // Track the mouse movement
  const flyingSection = document.querySelector('.hero-wrapper');
  const cloudFlying = document.querySelector('.awards-main-sec');
  // const objects = document.querySelectorAll('.flying');

  flyingSection.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;

    // Loop through each flying object
    flyingObjects.forEach((object, index) => {
      // Add slight delay based on index for a parallax effect
      const delay = index * 0.05;

      gsap.to(object, {
        x: (mouseX - window.innerWidth / 2) * 0.009 * (index + 1),  // Move horizontally
        y: (mouseY - window.innerHeight / 2) * 0.009 * (index + 1), // Move vertically
        duration: 0.3,
        ease: "power1.out",
        delay: delay
      });
    });
  });

  cloudFlying.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;

    // Loop through each flying object
    cloudObjects.forEach((object, index) => {
      // Add slight delay based on index for a parallax effect
      const delay = index * 0.05;

      gsap.to(object, {
        x: (mouseX - window.innerWidth / 2) * 0.009 * (index + 1),  // Move horizontally
        y: (mouseY - window.innerHeight / 2) * 0.009 * (index + 1), // Move vertically
        duration: 0.3,
        ease: "power1.out",
        delay: delay
      });
    });
  });

});



/* Service Section JS Start */

gsap.registerPlugin(ScrollTrigger);

// Initial styles for elements
gsap.set([".content-inside-x", ".content-inside-x h1", ".content-inside-x p", ".first-svg", ".second-svg"], { opacity: 0 });
gsap.set("#x-path", { fill: "black" }); // Initial fill color

// Master timeline for pinned animations
const bannerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top top", // Pin starts when .banner reaches the top
    end: "+=200%",    // Adjust scroll duration as needed
    scrub: 1,
    pin: true,
  },
});

// Animation sequence
bannerTimeline
  // 1. Scale and reveal `.letter-x` and `#x-path`
  .to([".letter-x"], {
    scale: 14,        // Scale up `.letter-x`
    opacity: 1,       // Make both elements fully visible
    duration: 1,      // Duration of the scaling and fade-in
    ease: "power1.inOut",
  }, 0)

  // 2. Change the fill of `#x-path` after opacity reaches 1
  .to("#x-path", {
    fill: "#F26E65",  // Change fill color
    duration: 0.5,    // Smooth transition
    ease: "power1.inOut",
  }, 0.5) // Slight delay to match the fade-in

  // 3. Show content inside `.letter-x` and `.content-inside-x h1`, `.content-inside-x p`
  .to([".content-inside-x", ".content-inside-x h1", ".content-inside-x p"], {
    opacity: 1,
    duration: 0.5,
  }, 0) // Start simultaneously with `.letter-x` scale animation

  // 4. Animate the font size of h1
  .to(".content-inside-x h1", {
    fontSize: "8rem", // Increase the font size
    duration: 1,
  }, 1.5) // Start after content fade-in

  .to(".content-inside-x h1", {
    opacity: 0,       // Fade out h1
    duration: 0.5,
  }, 3) // Start fade-out after scaling animation

  // 5. Animate and show the SVGs
  .to(".first-svg", {
    opacity: 1,
    x: 200,           // Move from left to right
    y: 200,           // Move from top to bottom
    duration: 1,
  }, 2.5)

  .to(".second-svg", {
    opacity: 1,
    x: -200,          // Move from right to left
    y: 200,           // Move from top to bottom
    duration: 1,
  }, 2.5)

  // 6. Fade out the SVGs
  .to([".first-svg", ".second-svg"], {
    opacity: 0,
    duration: 0.5,
  }, 3.5)

  // 7. Show paragraph after h1 animation
  .to(".content-inside-x p", {
    opacity: 1,
    duration: 1,
  }, 4);


/* Service Section JS End */