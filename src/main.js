import './styles.css';

// DOM Elements
let themeToggle;
let themeText;
let sunIcon;
let moonIcon;
let contactButton;
let projectCards;
let heroTitle;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  themeToggle = document.getElementById('theme-toggle');
  themeText = document.getElementById('theme-text');
  sunIcon = document.querySelector('.sun-icon');
  moonIcon = document.querySelector('.moon-icon');
  contactButton = document.querySelector('.contact-button');
  projectCards = document.querySelectorAll('.project-card');
  heroTitle = document.querySelector('.hero-title');

  // Initialize animations
  initializeAnimations();
  
  // Initialize event listeners
  initializeEventListeners();
  
  // Check for saved theme
  initializeTheme();

  // Apply staggered animation to project cards
  staggeredAnimation();
});

// Initialize animations with proper timing
function initializeAnimations() {
  // Get all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in-up');
  
  // Set animation order for each element
  fadeElements.forEach((el, index) => {
    // Add slight delay between elements
    el.style.setProperty('--delay', `${index * 0.1}s`);
  });
}

// Apply staggered animation to elements
function staggeredAnimation() {
  // Add staggered animations to project cards
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
    
    // Observer for in-view animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
  });

  // Add hover effect to hero title
  if (heroTitle) {
    heroTitle.addEventListener('mousemove', (e) => {
      const bounds = heroTitle.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      
      const offsetX = (mouseX - centerX) / 25;
      const offsetY = (mouseY - centerY) / 25;
      
      heroTitle.querySelector('span').style.transform = `perspective(1000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg) scale(1.02)`;
    });
    
    heroTitle.addEventListener('mouseleave', () => {
      heroTitle.querySelector('span').style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }
}

// Initialize event listeners
function initializeEventListeners() {
  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Contact button
  if (contactButton) {
    contactButton.addEventListener('click', () => {
      // Animate button
      contactButton.classList.add('scale-95');
      setTimeout(() => {
        contactButton.classList.remove('scale-95');
      }, 200);
      
      // Redirect to email
      window.location.href = 'mailto:akchavan@outlook.com';
    });
  }
  
  // Add hover effects for project cards
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('group');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('group');
    });
  });
}

// Initialize theme based on user preference
function initializeTheme() {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// Toggle between light and dark theme
function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  
  if (isDark) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
  
  // Add transition effect to theme toggle
  themeToggle.classList.add('scale-90');
  setTimeout(() => {
    themeToggle.classList.remove('scale-90');
  }, 200);
}

// Enable dark mode
function enableDarkMode() {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  
  // Update UI
  if (sunIcon && moonIcon) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
  
  if (themeText) {
    themeText.textContent = 'Dark';
  }
  
  if (themeToggle) {
    themeToggle.classList.add('bg-gray-800');
    themeToggle.classList.remove('bg-white');
  }
}

// Enable light mode
function enableLightMode() {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  
  // Update UI
  if (sunIcon && moonIcon) {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
  
  if (themeText) {
    themeText.textContent = 'Light';
  }
  
  if (themeToggle) {
    themeToggle.classList.remove('bg-gray-800');
    themeToggle.classList.add('bg-white');
  }
}

// Export for testing purposes
export { toggleTheme, enableDarkMode, enableLightMode };