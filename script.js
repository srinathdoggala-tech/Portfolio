/* ==========================================================================
   PARTICLE BACKGROUND CANVAS SYSTEM
   ========================================================================== */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
let mouse = {
  x: null,
  y: null,
  radius: 120 // Interaction radius
};

// Set canvas dimensions
function initCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
  initCanvasSize();
  initParticles();
});

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

// Particle Constructor
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // Update position and check interactions
  update() {
    // Bounce off walls
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Mouse check (repel particles slightly)
    if (mouse.x != null && mouse.y != null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        let force = (mouse.radius - distance) / mouse.radius; // 0 to 1
        let forceX = (dx / distance) * force * 3;
        let forceY = (dy / distance) * force * 3;
        
        this.x -= forceX;
        this.y -= forceY;
      }
    }

    // Move particle
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
  }
}

// Populate particle array
function initParticles() {
  particlesArray = [];
  // Adjust particle density based on screen size
  const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 11000), 100);
  
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * (innerWidth - size * 2) + size;
    let y = Math.random() * (innerHeight - size * 2) + size;
    let directionX = (Math.random() * 0.4) - 0.2;
    let directionY = (Math.random() * 0.4) - 0.2;
    
    // Curated accent colors for particles
    const colors = [
      'rgba(139, 92, 246, 0.45)', // Purple
      'rgba(59, 130, 246, 0.4)',  // Blue
      'rgba(20, 184, 166, 0.4)'   // Teal
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// Connecting lines (Constellation neural-net effect)
function connectParticles() {
  let opacityValue = 1;
  const maxDistance = 150;
  
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        opacityValue = 1 - (distance / maxDistance);
        
        // Use a soft white-blue line color
        ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// Animation Loop
function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connectParticles();
}

// Start Background System
initCanvasSize();
initParticles();
animateParticles();


/* ==========================================================================
   TYPEWRITER EFFECT (HERO SUBTITLE)
   ========================================================================== */
const typewriterElement = document.getElementById('typewriter-text');
const phrases = [
  "Multi-Agent AI Systems.",
  "Computer Vision Solutions.",
  "Intelligent Software Architecture.",
  "Full-Stack Web Platforms."
];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

function typePhrase() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    // Delete character
    typewriterElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
    typeSpeed = 40; // Deleting is faster
  } else {
    // Add character
    typewriterElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
    typeSpeed = 80;
  }

  // Completed typing phrase
  if (!isDeleting && characterIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause before deleting
  } 
  // Completed deleting phrase
  else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500; // Pause before typing next
  }

  setTimeout(typePhrase, typeSpeed);
}

// Start typewriter after a short delay
setTimeout(typePhrase, 1000);


/* ==========================================================================
   REVEAL ON SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // If it's a skills card, trigger progress bar width animations
      if (entry.target.classList.contains('skills-card')) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          // Trigger CSS transition by clearing any override and letting style.width work
          bar.style.transform = 'scaleX(1)';
        });
      }
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
});

// Prepare progress bars for trigger (scaleX(0) initially)
document.querySelectorAll('.skill-progress').forEach(bar => {
  bar.style.transform = 'scaleX(0)';
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});


/* ==========================================================================
   NAVIGATION LOGIC (MOBILE TOGGLE & SCROLL)
   ========================================================================== */
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Effect (scrolled background)
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Hamburger Toggle
mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
});

// Close Mobile Navbar on link clicks
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});


/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    // Simulate network delay
    setTimeout(() => {
      // Success feedback
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      
      formStatus.textContent = 'Thank you! Your message was sent successfully.';
      formStatus.classList.add('success');
      
      contactForm.reset();
    }, 1500);
  });
}
