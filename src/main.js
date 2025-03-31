import './styles.css';

// Project data
const projects = [
  {
    id: 'harv',
    title: 'HARV: AI Browser Extension',
    description: 'HARV is a powerful browser extension that brings AI-powered assistance directly into your browsing experience!',
    url: 'https://github.com/iamakchavan/HARV'
  },
  {
    id: 'paradox',
    title: 'Paradox',
    description: 'A minimalistic Open-Source AI Chatbot combining powerful AI models for intelligent conversations with web search, coding, reasoning, and voice interaction capabilities.',
    url: 'https://paradoxed.vercel.app/'
  },
  {
    id: 'amazicons',
    title: 'Amazicons',
    description: "A collection of all the icons that you'll ever need, that I use in my designs too!",
    url: 'https://www.figma.com/community/file/1484678564434143542'
  },
  {
    id: 'cyberyear',
    title: '2025-in-pixels',
    description: 'A visual representation of 2025 in pixels with daily progress tracking.',
    url: 'https://cyberyear.vercel.app/'
  }
];

// DOM Elements
let themeToggle;
let themeText;
let contactButton;
let projectCards;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  themeToggle = document.getElementById('theme-toggle');
  themeText = document.getElementById('theme-text');
  contactButton = document.querySelector('.contact-button');
  projectCards = document.querySelectorAll('.project-card');

  // Initialize animations
  initializeAnimations();
  
  // Initialize event listeners
  initializeEventListeners();
  
  // Check for saved theme
  initializeTheme();
});

// Initialize animations with proper timing
function initializeAnimations() {
  // Get all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Set animation order for each element
  fadeElements.forEach((el, index) => {
    el.style.setProperty('--order', index);
    // Start animation
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 100 * index);
  });
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
      // Simple animation for the ripple effect
      const ripple = contactButton.querySelector('.ripple');
      ripple.style.opacity = '0.7';
      ripple.style.transform = 'scale(1)';
      
      // Reset animation
      setTimeout(() => {
        ripple.style.opacity = '0';
        ripple.style.transform = 'scale(1.5)';
      }, 300);
      
      // Redirect to email
      window.location.href = 'mailto:akchavan@outlook.com';
    });
  }
  
  // Project card hover effects are handled by CSS
}

// Initialize theme based on user preference
function initializeTheme() {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
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
}

// Enable dark mode
function enableDarkMode() {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  
  if (themeToggle) {
    // Change sun icon to moon
    themeToggle.innerHTML = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    `;
  }
  
  if (themeText) {
    themeText.textContent = 'Dark';
  }
}

// Enable light mode
function enableLightMode() {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  
  if (themeToggle) {
    // Change moon icon back to sun
    themeToggle.innerHTML = `
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    `;
  }
  
  if (themeText) {
    themeText.textContent = 'Light';
  }
}

// Export for testing purposes
export { toggleTheme, enableDarkMode, enableLightMode };