// Scroll Animation
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

animateElements.forEach((element) => {
  observer.observe(element);
});

// Particle.js Configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        size: 6,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
// Form Submission Handling
const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  });

  if (response.ok) {
    formStatus.style.display = 'block'; // Show success message
    form.reset(); // Clear the form
  } else {
    alert('Oops! Something went wrong. Please try again.');
  }
});