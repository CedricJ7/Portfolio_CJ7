/**
 * Portfolio Cédric Jestin - Main JavaScript
 * Provides animations, interactivity and responsive behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: false,
    offset: 100,
    delay: 50
  });

  // Tool cards interaction
  const toolCards = document.querySelectorAll('.tool-card');
  const toolDescriptions = document.querySelectorAll('.tool-description');
  
  toolCards.forEach(card => {
    card.addEventListener('click', () => {
      const toolName = card.querySelector('h3').textContent;
      
      // Reset all cards
      toolCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      // Show corresponding description
      toolDescriptions.forEach(desc => {
        desc.classList.remove('active');
        if (desc.getAttribute('data-tool') === toolName) {
          desc.classList.add('active');
        }
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll indicator functionality
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.getElementById('one');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Active navigation based on scroll position
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  
  // Parallax effect for header background
  const header = document.getElementById('header');
  
  function parallaxHeader() {
    if (header) {
      const scrollPosition = window.pageYOffset;
      header.style.backgroundPositionY = `calc(50% + ${scrollPosition * 0.3}px)`;
    }
  }
  
  window.addEventListener('scroll', parallaxHeader);
  
  // Skill bars animation
  const skillLevels = document.querySelectorAll('.skill-level');
  
  // Animate skill bars when they come into view
  const animateSkillBars = () => {
    skillLevels.forEach(skillBar => {
      const sectionOffset = skillBar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (sectionOffset < screenPosition) {
        skillBar.style.width = skillBar.style.width || skillBar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
      } else {
        skillBar.style.width = '0%';
      }
    });
  };
  
  window.addEventListener('scroll', animateSkillBars);
  
  // Project hover effects for touch devices
  const projectCards = document.querySelectorAll('.project-card');
  
  if ('ontouchstart' in window) {
    projectCards.forEach(card => {
      card.addEventListener('touchstart', () => {
        projectCards.forEach(c => c.classList.remove('touched'));
        card.classList.add('touched');
      });
    });
    
    document.addEventListener('touchstart', (e) => {
      if (!e.target.closest('.project-card')) {
        projectCards.forEach(c => c.classList.remove('touched'));
      }
    });
  } else {
    // Mouse hover effects already handled by CSS
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const overlay = card.querySelector('.project-overlay');
        const img = card.querySelector('.project-image img');
        
        if (overlay) overlay.style.opacity = '1';
        if (img) img.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', () => {
        const overlay = card.querySelector('.project-overlay');
        const img = card.querySelector('.project-image img');
        
        if (overlay) overlay.style.opacity = '0';
        if (img) img.style.transform = 'scale(1)';
      });
    });
  }
});

// Stylized cursor effect (neural network inspired)
document.addEventListener('DOMContentLoaded', () => {
  // Code pour l'effet de curseur supprimé pour améliorer l'expérience utilisateur
  
  // Touch device styles pour les cartes de projet (conservé car indépendant de l'effet curseur)
  const style = document.createElement('style');
  style.textContent = `    
    /* Touch device styles */
    .project-card.touched .project-overlay {
      opacity: 1 !important;
    }
    
    .project-card.touched .project-image img {
      transform: scale(1.05) !important;
    }
  `;
  
  document.head.appendChild(style);
}); 