
/* menu js start */
$(document).ready(function () {
  $(".menuButton a.primary-btn").on("click", function (e) {
    e.preventDefault(); // Prevent default action if necessary
    const $svg = $(".menu svg");

    if ($svg.hasClass("expanded")) {
      setTimeout(function () {
        $svg.removeClass("expanded");
      }, 300);
    } else {
      $svg.addClass("expanded");
    }
  });
});

$(document).ready(function () {
  $(".menuButton a.primary-btn").on("click", function (e) {
    e.preventDefault();
    const $menudate = $(".menu-date");

    if ($menudate.hasClass("open")) {
      $menudate.removeClass("open");
    } else {
      setTimeout(function () {
        $menudate.addClass("open");
      }, 300); // Adds the class after 1 second
    }
  });
});

$(document).ready(function () {
  $(".menu-date-bar > ul > li").on("click", function () {
    const $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $(".menu-date-bar ul li").removeClass("active"); // Remove active from all siblings
      $this.addClass("active"); // Add active to the clicked element
    }
  });
});

$(document).ready(function () {
  $(".menuButton a.primary-btn").on("click", function (e) {
    e.preventDefault(); // Prevent default action (if it's a link)
    $("body").toggleClass("open-menu"); // Replace 'custom-class' with the desired class name
  });
});

/* menu js end */

/* swiper-ourClient js start */
$(document).ready(function () {
  var swiper = new Swiper(".swiper-ourclient", {
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
});
/* swiper-ourClient js end */


/* mission-video' js start */

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.mission-video');
  const videoImg = document.querySelector('.video-img');
  const startVideo = document.querySelector('.start-video');
  const pauseVideos = document.querySelector('.pouse-videos');

  if (video && videoImg) {
    if (pauseVideos) pauseVideos.classList.add('hidden');
    if (startVideo) startVideo.classList.remove('hidden');

    videoImg.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

      if (startVideo && pauseVideos) {
        startVideo.classList.toggle('hidden');
        pauseVideos.classList.toggle('hidden');
      }
    });
  }
});
/* mission-video' js end */

/* Testimonial Section */

if (document.querySelector(".testimonial-con-sec")) {
  function createContinuousMarquee(columnSelector, direction, speedMultiplier = 1) {
    const column = document.querySelector(columnSelector);
    const items = Array.from(column.children);

    if (!column || items.length === 0) {
      console.error(`No items found for selector: ${columnSelector}`);
      return;
    }

    const clonedItems = items.map(item => item.cloneNode(true));
    clonedItems.forEach(item => column.appendChild(item));

    const initializeMarquee = () => {
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
    };

    setTimeout(initializeMarquee, 50);
  }

  createContinuousMarquee(".column-1", -1, 0.7);
  createContinuousMarquee(".column-2", 1, 1);
  createContinuousMarquee(".column-3", -1, 0.7);
}


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
    breakpoints: {
      767: {
        coverflowEffect: {
          rotate: -5,
          stretch: 150,
          depth: 100
        }
      }
    }
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
    y: 800, // Move down faster
    scrollTrigger: {
      trigger: ".site_wrapper",
      start: "top top", // Start when the section enters the viewport (below the fold initially)
      end: "bottom top", // End when the bottom of the container hits the top of the viewport
      scrub: 0.1, // Smooth animation tied to scroll
    }
  });

  // Animation for the second SVG to move down slower
  gsap.to(".line-two", {
    y: -800, // Move down slower
    scrollTrigger: {
      trigger: ".site_wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 0.1,
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

const visibleWidth = 300 / sliderItems.length * 1;

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

const sections = document.querySelectorAll(".gloabl-banner-inner-page, .inner-service-sec");

sections.forEach((section) => {
  const paths = section.querySelectorAll(".svg-draw-sec svg path");
  const svgBanner = section.querySelector(".svg-about-banner");

  ScrollTrigger.create({
    trigger: section,
    start: "top 75%",
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
          onComplete: () => {
            if (svgBanner) {
              gsap.to(svgBanner, { opacity: 1, duration: 0.5 });
            }
          },
        });
      });
    },
  });
});
/* SVG Draw JS End */

/* for homepage service section js start */
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

/* for homepage service section js end */


/* Typing Animation JS Start */

var textWrappers = document.querySelectorAll(
  'h3:not(.development-service .service-item h3), h4, h5, h6, a.ft-button span'
); // Exclude .development-service h3

textWrappers.forEach((textWrapper) => {
  textWrapper.innerHTML = textWrapper.textContent
    .split(/\s+/)
    .map(word => {
      let letters = word.split('').map(letter => `<span class='letter'>${letter}</span>`).join('');
      return `<span class='word'>${letters}</span>`;
    })
    .join(' ');
});

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;

      anime.timeline({ loop: false })
        .add({
          targets: entry.target.querySelectorAll('.word .letter'),
          opacity: [0, 1],
          translateX: [40, 0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: (el, i) => 550 + 25 * i
        })
        .add({
          targets: entry.target.nextElementSiblings('p, a'),
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
          delay: (el, i) => 300 * i
        });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

Element.prototype.nextElementSiblings = function (selector) {
  let siblings = [];
  let nextSibling = this.nextElementSibling;
  while (nextSibling) {
    if (nextSibling.matches(selector)) {
      siblings.push(nextSibling);
    } else if (nextSibling.matches('h3:not(.development-service .service-item h3), h4, h5, h6, a.ft-button span')) {
      break;
    }
    nextSibling = nextSibling.nextElementSibling;
  }
  return siblings;
};

textWrappers.forEach(textWrapper => observer.observe(textWrapper));



/* Typing Animation JS End */

/* Blog Post JS Start */

const progressBar = document.querySelector(".blog-post-sec .autoplay-progress-bar .progress");

var swiper = new Swiper(".myblog-post", {
  slidesPerView: 5,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
  },
});

/* Blog Post JS Start */


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".section_integration .animated-img-sec img",
  {
    scale: 0,
    y: 1000,
  },
  {
    scale: 1,
    y: 0,
    rotation: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section_integration",
      start: "top 0%",
      end: "bottom 0%",
      toggleActions: "play reverse play reverse",
    },
  }
);


/* Service SEction Shap Animation Start */

/* Check if "inner-service-wrapper" exists before running the function */
if (document.querySelector('.inner-service-wrapper')) {

  gsap.to(".inner-shap-1", {
    rotation: 360,
    x: "100vw",
    y: "100vh",
    repeat: -1,
    yoyo: true,
    paused: true,
    scrollTrigger: {
      trigger: ".inner-service-wrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    }
  });

  gsap.to(".inner-shap-2", {
    rotation: -360,
    x: "-100vw",
    y: "-100vh",
    repeat: -1,
    yoyo: true,
    paused: true,
    scrollTrigger: {
      trigger: ".inner-service-wrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    }
  });

  const serviceWrapper = document.querySelector('.inner-service-wrapper');
  const serviceShap = document.querySelector('.inner-service-shap');

  const observerService = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceShap.classList.add('fixed');
      }
    });
  }, { threshold: 0.1 });

  observerService.observe(serviceWrapper);

  const serviceList = document.querySelector('.inner-service-list');

  const observerServiceList = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        serviceShap.classList.remove('fixed');
      }
    });
  }, { threshold: 0 });

  observerServiceList.observe(serviceList);
}


/* Squad Section JS Start */

if (document.querySelector('.hire-main-sec')) {

  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hire-main-sec .hire-con-row",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  const items = gsap.utils.shuffle(gsap.utils.toArray(".hire-con-item"));

  items.forEach((item) => {
    timeline.to(item, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.2,
      delay: Math.random() * 0.2,
    });
  });

}

/* Squad Section JS End */

/* Animated Section JS Start */

if (document.querySelector(".Process-main-sec")) {

  const boxes = gsap.utils.toArray(".animated-section .item");

  const containerWidth = boxes.reduce((acc, el) => acc + el.offsetWidth, 0);
  const offset = -containerWidth + window.innerWidth / 20;

  gsap.to(boxes, {
    scrollTrigger: {
      trigger: ".Process-main-sec",
      start: "top top",
      end: () => `+=${containerWidth}`,
      scrub: true,
      pin: ".Process-main-sec",
      pinSpacing: true,
      onEnter: () => {
        console.log('Process section pinned and scrolling started');
      },
      onLeave: () => {
        console.log('Process section unpinned, next section can scroll');
      },
      onLeaveBack: () => {
        console.log('Scroll has passed back through the Process section');
      }
    },
    x: offset,
    ease: "linear"
  });

  let initialPos = boxes[0].getBoundingClientRect().left;

  function scaleItems() {
    const currentPos = boxes[0].getBoundingClientRect().left;
    const scaleAmount = Math.min(Math.abs((initialPos - currentPos) * 0.0175), 1);
    gsap.to(boxes, { scale: 1 - scaleAmount / 2 });

    initialPos = currentPos;
    requestAnimationFrame(scaleItems);
  }

  scaleItems();
}

/* Animated Section JS End */


/* FAQ accordion js Start */

jQuery(document).ready(function ($) {
  $(".faq-area-block-wrap").click(function () {
    var $this = $(this);
    var $content = $this.find(".at-tab");
    var $title = $this.find(".at-title");

    if ($title.hasClass("active")) {

      $title.removeClass("active");
      $this.removeClass("active");
      $content.slideUp();
    } else {

      $(".faq-area-block-wrap .at-title.active")
        .removeClass("active")
        .closest(".faq-area-block-wrap")
        .removeClass("active")
        .find(".at-tab")
        .slideUp();

      $title.addClass("active");
      $this.addClass("active");
      $content.slideDown();
    }
  });
});

/* FAQ accordion js End */


/* Dedicated Team js start */
$(document).ready(function () {
  if ($(".dedicated-slider").length > 0) {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },


    });
  }
});
/* Dedicated Team js end */


/* Specialize Section JS Start */

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-contents');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

/* Specialize Section JS End */


/* Our Projects js start */

if ($(".projects-main-sec").length > 0) {
  gsap.utils.toArray('.projects-item').forEach((item, index) => {
    const isEven = (index + 1) % 2 === 0;

    gsap.from(item, {
      x: isEven ? 100 : -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
  });
}

/* Our Projects js End */


/* App Features Tabs js Start */
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-buttons li");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

/* App Features Tabs js End */

/* service - review from client js Start */

var swiper = new Swiper(".od-app-slider", {
  direction: "vertical",
  mousewheelControl: true,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".od-app-pagi",
    clickable: true,
  },
});

$(document).ready(function () {
  var swiper = new Swipern(".review-client-slider", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 800,
    loop: false,
    centeredSlides: true,
    rotate: true,
    navigation: {
      nextEl: ".review-client-next",
      prevEl: ".review-client-prev",
    },

  });
});

/* service - review from client js End */

/* Technology stack sec js start */

if ($(".technology-stack-sec").length > 0) {
  const tabButtonsSec = document.querySelectorAll('.technology-stack-sec .tab-buttons');
  const tabContentsSec = document.querySelectorAll('.technology-stack-sec .tab-contents');

  tabButtonsSec.forEach((button) => {
    button.addEventListener('click', () => {
      const targetTabSec = button.getAttribute('data-tab');

      tabButtonsSec.forEach((btn) => btn.classList.remove('active'));
      tabContentsSec.forEach((content) => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTabSec).classList.add('active');
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".technology-stack-sec .animated-img-sec img",
    {
      scale: 0,
      y: 1000,
    },
    {
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".technology-stack-sec",
        start: "top 0%",
        end: "bottom 0%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
}

/* Technology stack sec js end */

/* Product details page  js start  */
/* summary js start  */
const firstLi = document.querySelector('ul li');
if (firstLi) {
  firstLi.classList.add('active');
}

document.querySelectorAll('.link-item').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');


    if (targetId.startsWith('#')) {
      event.preventDefault();

      document.querySelectorAll('ul li').forEach((li) => {
        li.classList.remove('active');
      });

      const parentLi = link.closest('li');
      if (parentLi) {
        parentLi.classList.add('active');
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  window.scrollTo(0, 0);
});
/* summary js end  */
/* Product details page  js end  */

/* Portfolio Sec JS Start */

var swiper = new Swiper(".portfolio-thumb", {
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,

  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".portfolio-slider", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* Portfolio Sec JS End */

/* career accordion js Start */

jQuery(document).ready(function ($) {
  $(".career-area-block-wrap").click(function () {
    var $this = $(this);
    var $content = $this.find(".at-tab");
    var $title = $this.find(".at-title");

    if ($title.hasClass("active")) {

      $title.removeClass("active");
      $this.removeClass("active");
      $content.slideUp();
    } else {

      $(".career-area-block-wrap .at-title.active")
        .removeClass("active")
        .closest(".career-area-block-wrap")
        .removeClass("active")
        .find(".at-tab")
        .slideUp();

      $title.addClass("active");
      $this.addClass("active");
      $content.slideDown();
    }
  });
});

/* career accordion js End */
jQuery(document).ready(function ($) {
  const $gifWrapper = $('.imgaes-row.gif-wrapper');
  const $gifCols = $('.gif-col-wrapper');
  const $yourPassion = $('.cust-img-effect');


  $yourPassion.on('mouseenter', function () {
    $('body').addClass('overflow-hidden-x');
    $(document).on('mousemove.gifWrapper', function (e) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      $gifWrapper.css({
        'left': (mouseX - 100) + 'px',
        'top': mouseY + 'px',
      });
      const rotation = (mouseX / $(window).width()) * 48 - 24;
      $gifWrapper.css('transform', 'rotate(' + rotation + 'deg)');
    });

    $gifCols.each(function (index) {
      $(this).on('mouseenter', function () {
        $gifWrapper.css({
          'visibility': 'visible',
          'opacity': '1'
        });
        $gifWrapper.find('img').each(function (i) {
          if (i === index) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });

      $(this).on('mouseleave', function () {
        $gifWrapper.css({
          'visibility': 'hidden',
          'opacity': '0'
        });
      });
    });
  });

  $yourPassion.on('mouseleave', function () {

    $('body').removeClass('overflow-hidden-x');

    $(document).off('mousemove.gifWrapper');
    $gifWrapper.css({
      'left': '0px',
      'top': '0px',
      'transform': 'rotate(0deg)',
      'visibility': 'hidden',
      'opacity': '0'
    });
  });
});

/* Event Sec JS Start */
$(document).ready(function () {
  new Swiper('.event-video-swiper', {
    loop: true, // Enables infinite looping
    slidesPerView: 6, // Number of visible slides
    spaceBetween: 25, // Space between slides
    autoplay: {
      delay: 0, // No delay for continuous movement
      disableOnInteraction: false // Keeps autoplay running even after user interaction
    },
    speed: 5000, // Adjusts the speed of the linear rotation
    breakpoints: {
      1920: {
        slidesPerView: 6,
        spaceBetween: 25
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 25
      }
    }
  });
});

/* Event Sec JS End */

/* Review Section BG Animation JS Start */

if (document.querySelector(".review-client-area")) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let x1 = 0, y1 = 0, dx1 = 6, dy1 = 6;
  let x2 = screenWidth - 50, y2 = screenHeight - 50, dx2 = -8, dy2 = -8;

  const leftTop = document.querySelector(".left-top");
  const bottomRight = document.querySelector(".bottom-right");

  function animateDivs() {
    x1 += dx1;
    y1 += dy1;

    if (x1 <= 0 || x1 >= screenWidth - 50) dx1 *= -1;
    if (y1 <= 0 || y1 >= screenHeight - 50) dy1 *= -1;

    leftTop.style.transform = `translate(${x1}px, ${y1}px)`;

    x2 += dx2;
    y2 += dy2;

    if (x2 <= 0 || x2 >= screenWidth - 50) dx2 *= -1;
    if (y2 <= 0 || y2 >= screenHeight - 50) dy2 *= -1;

    bottomRight.style.transform = `translate(${x2 - (screenWidth - 50)}px, ${y2 - (screenHeight - 50)}px)`;

    requestAnimationFrame(animateDivs);
  }

  animateDivs();
}

/* Review Section BG Animation JS End */


/* Header Mega Menu JS Start */

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar .mega-menu > ul > li");

  menuItems.forEach(item => {
      let link = item.querySelector("a");
      let subMenu = item.querySelector(".second-sub-menu-inner");

      if (link && subMenu) {
          link.addEventListener("mouseenter", function () {
              subMenu.style.display = "block";
              subMenu.style.opacity = "0";
              setTimeout(() => {
                  subMenu.style.opacity = "1";
              }, 10);

              item.classList.add("active-menu");
          });

          subMenu.addEventListener("mouseenter", function () {
              subMenu.style.display = "block";
              subMenu.style.opacity = "1";
          });

          item.addEventListener("mouseleave", function (event) {
              if (!item.contains(event.relatedTarget)) {
                  subMenu.style.opacity = "0";
                  setTimeout(() => {
                      subMenu.style.display = "none";
                  }, 300);
                  item.classList.remove("active-menu");
              }
          });
      }
  });

  document.querySelectorAll(".second-sub-menu > li > a").forEach(item => {
      item.addEventListener("mouseenter", function () {
          let thirdSubMenu = this.nextElementSibling;

          document.querySelectorAll(".third-sub-menu.active").forEach(activeMenu => {
              activeMenu.style.opacity = "0";
              setTimeout(() => {
                  activeMenu.style.display = "none";
              }, 300);
              activeMenu.classList.remove("active");
          });

          document.querySelectorAll(".second-sub-menu > li > a.opend-sub-menu").forEach(activeLink => {
              activeLink.classList.remove("opend-sub-menu");
          });

          if (thirdSubMenu && thirdSubMenu.classList.contains("third-sub-menu")) {
              thirdSubMenu.style.display = "flex";
              thirdSubMenu.style.opacity = "0";
              setTimeout(() => {
                  thirdSubMenu.style.opacity = "1";
                  thirdSubMenu.classList.add("active");
                  this.classList.add("opend-sub-menu");
              }, 10);
          }
      });
  });

  document.querySelectorAll(".second-sub-menu > li:first-child > a").forEach(link => {
      link.classList.add("opend-sub-menu");
      let thirdSubMenu = link.nextElementSibling;
      if (thirdSubMenu && thirdSubMenu.classList.contains("third-sub-menu")) {
          thirdSubMenu.style.display = "flex";
          thirdSubMenu.style.opacity = "1";
          thirdSubMenu.classList.add("active");
      }
  });
});


/* Header Mega Menu JS End */


jQuery(document).ready(function ($) {
  // Initially filter by the first active category
  let firstCategory = $('.btn-gal.on').attr('class').split(' ').find(cls => cls !== 'btn-gal' && cls !== 'on');
  if (firstCategory && firstCategory !== 'all') {
    $('.grid').isotope({ filter: '.' + firstCategory });
  } else {
    $('.grid').isotope({ filter: '*' }); // Show all if "All" is the first
  }

  // Filter button click event
  $('.btn-gal').click(function () {
    let filterValue = $(this).attr('class').split(' ').find(cls => cls !== 'btn-gal' && cls !== 'on');

    // Apply filter
    $('.grid').isotope({ filter: filterValue === 'all' ? '*' : '.' + filterValue });

    // Toggle active class
    $('.btn-gal').removeClass('on');
    $(this).addClass('on');
  });
});
