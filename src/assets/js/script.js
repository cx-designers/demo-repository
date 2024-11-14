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
      });

}, 100);

function animateDot() {
    let progress = 0;
    let totalDuration = 1; 
    gsap.to({}, {
        duration: totalDuration,
        repeat: -1,
        ease: "power1.inOut",
        onUpdate: function() {
            const lengthAtProgress = pathLength * progress;
            const point = drarLogo.getPointAtLength(lengthAtProgress);
            movingDot.setAttribute('cx', point.x);
            movingDot.setAttribute('cy', point.y);
            progress += 0.001 * gsap.utils.random(0.5, 1); 
            if (progress >= 1) {
                progress = 0;
            }
        },
        onRepeat: function() {
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

const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // The div where the animation will be rendered
    renderer: 'svg', // Rendering the animation as SVG
    loop: false, // Control if the animation should loop
    autoplay: false, // Animation will not play automatically
    path: '../assets/img/UNKbhCxzX0.json' // Path to the Lottie JSON file
});
let isPlayingForward = true;
// Add click event to the .menu-toggle button
document.querySelector('.toggle-btn').addEventListener('click', function() {
    if (isPlayingForward) {
        animation.setDirection(1); // Set direction to forward
        animation.play(); // Play the animation forward
    } else {
        animation.setDirection(-1); // Set direction to reverse
        animation.play(); // Play the animation in reverse
    }
    isPlayingForward = !isPlayingForward;
});
