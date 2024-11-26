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
document.body.classList.remove('before_load');
div.style.display = 'flex';
// Set flying objects to initial opacity 0
gsap.set(flyingObjects, { opacity: 0 });


const tl = gsap.timeline();

// Main Timeline
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
  duration: 0.1,
  scale: 1,
  ease: "power1.inOut"
}, "-=0.01")



tl.to(div, {
  opacity: 1,
  duration: 0.1,
  ease: "power1.inOut"
}, "-=0.1")
  .from(".from-left", {
    duration: 0.8,      // Duration of the animation (in seconds)
    x: "-120%",          // Start 100 pixels to the left
    ease: "power2.inOut" // Easing function for a smoother transition
  })
  .from(".from-right", {
    duration: 0.8,      // Duration of the animation (in seconds)
    x: "120%",          // Start 100 pixels to the left
    ease: "power2.inOut" // Easing function for a smoother transition
  })
  .to(flyingObjects, {
    opacity: 1,       // Reveal the flying objects
    duration: 0.1,      // Fade-in duration
    ease: "power1.inOut"
  });
tl.add(() => {
  gsap;
  animateDot();



  // Run the separated animations after onComplete
  runSeparatedAnimations();
});

/* Title Animation JS Start */



/* Title Animation JS End */



// Define a new function for the separated animations
function runSeparatedAnimations() {
  const tl2 = gsap.timeline();
  tl2.to(drarLogo, {
    strokeDashoffset: 0,
    opacity: 1,
    duration: 6,
    ease: "power1.inOut"
  }, "-=0.1")
    .fromTo(".roundeO", {
      strokeDasharray: 500,
      strokeDashoffset: 500,
      opacity: 1,

    }, {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: "power1.inOut"
    }, "+=0.5")
    .to([drarLine1, drarLine2], {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    }).to(moveX, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    });
  const paths = document.querySelectorAll('.neon'); // Select multiple paths by class
  neonFlicker(paths);
}





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
      stretch: 294.5,
      depth: 150,
      modifier: 1.2,
      slideShadows: false
    },
    freeMode: false,
    freeModeSticky: true,
  });

});

/* Counter Slider Section Complete */


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
function animateDot() {
  let progress = 0;
  let totalDuration = 0.1;
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
    trigger: ".main-service-sec",
    start: "top top", // Pin starts when .banner reaches the top
    end: "+=300%",    // Extend scroll duration for all animations
    scrub: 1,
    pin: true,
    pinSpacing: true, // Prevent the next section from overlapping
  },
});

// Animation sequence
bannerTimeline
  // 1. Scale `.letter-x` and reveal `.content-inside-x`
  .to([".letter-x"], {
    scale: 14,              // Scale up `.letter-x`
    opacity: 1,             // Reveal `.content-inside-x`
    duration: 2,            // Duration for scaling and fading
    ease: "power1.inOut",
  }, 0) // Starts everything together

  .to([".content-inside-x"], {
    opacity: 1,             // Reveal `.content-inside-x`
    duration: 0.5,            // Duration for scaling and fading
  }, 0)

  // 2. Change the fill of `#x-path` after scaling starts
  .to("#x-path", {
    fill: "#F26E65",        // Change fill color
    duration: 0.5,          // Smooth transition
    ease: "power1.inOut",
  }, 0.5) // Slight delay after scaling begins

  // 3. Show `.content-inside-x h1` with font size and opacity changes
  .to(".content-inside-x h1", {
    fontSize: "8rem",       // Increase font size
    opacity: 1,             // Make h1 visible
    duration: 0.5,            // Sync with `.letter-x` scaling
    ease: "power1.inOut",
  }, 0.5)
  // Sync with scaling

  // 5. Animate and show the SVGs simultaneously with `.letter-x` scaling
  .to(".first-svg", {
    opacity: 1,
    x: 200,                 // Move from left to right
    y: 200,                 // Move from top to bottom
    duration: 1,            // Sync with `.letter-x` scaling duration
    ease: "power1.inOut",
  }, 0) // Sync with scaling

  .to(".second-svg", {
    opacity: 1,
    x: -200,                // Move from right to left
    y: 200,                 // Move from top to bottom
    duration: 1,            // Sync with `.letter-x` scaling duration
    ease: "power1.inOut",
  }, 0) // Sync with scaling

  // 6. Fade out both SVGs
  .to([".first-svg", ".second-svg"], {
    opacity: 0,
    duration: 0.5,
  }, 0.8) // Fade out after scaling finishes

  .to(".content-inside-x h1", {
    opacity: 0,             // Make h1 visible
    duration: 0.8,            // Sync with `.letter-x` scaling
    ease: "power1.inOut",
  }, 1)


/* Service Section JS End */




/* Industries Section Start */

const sliderItems = document.querySelectorAll('.slider-item');

const visibleWidth = 100 / sliderItems.length * 1;

gsap.set(".slider", {
  xPercent: 100 - visibleWidth,
});

gsap.to(".slider", {
  xPercent: -(100 - visibleWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".industries-section",
    pin: true,
    start: "top top",
    scrub: 2,
    end: "+=" + (sliderItems.length * 50) + "vw",
    onUpdate: (self) => {
    },
  },
});

/* Industries Section Start */


/* SVG Draw JS Start */

gsap.registerPlugin(ScrollTrigger);

// Select all sections with the class "inner-service-sec"
const sections = document.querySelectorAll(".inner-service-sec");

sections.forEach((section) => {
  const paths = section.querySelectorAll(".svg-draw-sec svg path");

  // ScrollTrigger to animate the paths only when the section enters the viewport
  ScrollTrigger.create({
    trigger: section,
    start: "top 75%", // Animation starts when the section is 75% visible
    onEnter: () => {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power1.inOut",
          delay: 0.5,
        });
      });
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const serviceSections = document.querySelectorAll(".inner-service-list .inner-service-sec");

  if (serviceSections.length > 0) {
    let activeSection = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (activeSection && activeSection !== entry.target) {
              activeSection.classList.remove("sticky");
            }

            activeSection = entry.target;
            activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
            activeSection.classList.add("sticky");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    serviceSections.forEach((section) => observer.observe(section));
  }
});

/* SVG Draw JS End */

/* Typing Animation JS Start */
var textWrappers = document.querySelectorAll('.letters');

textWrappers.forEach((textWrapper) => {
  // Spans create karo
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // Anime timeline banavo for each letters div
  anime.timeline({ loop: false })
    .add({
      targets: textWrapper.querySelectorAll('.letter'), // Only spans inside the current .letters
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 950 + 25 * i // Each letter's delay
    });
});



/* Typing Animation JS End */