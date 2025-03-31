import './styles.css';

// Projects data
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
    description: 'A collection of all the icons that you\'ll ever need, that I use in my designs too!',
    url: 'https://www.figma.com/community/file/1484678564434143542'
  },
  {
    id: 'pixels',
    title: '2025-in-pixels',
    description: 'A visual representation of 2025 in pixels with daily progress tracking.',
    url: 'https://cyberyear.vercel.app/'
  }
];

// Animation functions
function animateElements() {
  // Name shimmer animation
  const nameElement = document.querySelector('.shimmer-text');
  if (nameElement) {
    nameElement.style.animation = 'shimmer 3s ease-in-out infinite';
  }

  // Staggered fade in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 * index);
  });
}

// Project card hover effects
function setupProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const background = card.querySelector('.card-bg');
      const line = card.querySelector('.card-line');
      const arrow = card.querySelector('.card-arrow');
      
      if (background) background.style.transform = 'scaleY(1)';
      if (line) line.style.transform = 'scaleX(1)';
      if (arrow) {
        arrow.style.opacity = '1';
        arrow.style.transform = 'translateY(0) translateX(0)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const background = card.querySelector('.card-bg');
      const line = card.querySelector('.card-line');
      const arrow = card.querySelector('.card-arrow');
      
      if (background) background.style.transform = 'scaleY(0)';
      if (line) line.style.transform = 'scaleX(0)';
      if (arrow) {
        arrow.style.opacity = '0';
        arrow.style.transform = 'translateY(-0.25rem) translateX(0.25rem)';
      }
    });
  });
}

// Handle theme toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  // Set initial theme based on system preference
  document.documentElement.classList.toggle('dark', systemTheme === 'dark');
  
  if (themeToggle) {
    themeToggle.textContent = systemTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

// Contact button click effect
function setupContactButton() {
  const contactButton = document.querySelector('.contact-button');
  if (contactButton) {
    contactButton.addEventListener('click', () => {
      const ripple = contactButton.querySelector('.ripple');
      if (ripple) {
        ripple.style.opacity = '1';
        ripple.style.transform = 'scale(1.4)';
        
        setTimeout(() => {
          ripple.style.opacity = '0';
          ripple.style.transform = 'scale(1)';
        }, 400);
      }
      
      // Simulating opening contact options
      alert('Contact options will appear here!');
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateElements();
  setupProjectCards();
  setupThemeToggle();
  setupContactButton();
});