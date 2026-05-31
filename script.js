// Dynamic current year updater for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Interactive skill tag highlighting on click
const tags = document.querySelectorAll('.skill-tag');
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('highlight-skill');
    });
});

// Smooth sequential fade-in animation for sections on page load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = `all 0.6s ease ${index * 0.12}s`;
    });
});

// Логіка для розгортання/згортання секції Additional Information
document.addEventListener('DOMContentLoaded', () => {
    const accordionToggle = document.getElementById('accordionToggle');
    const accordionSection = document.getElementById('additional');

    if (accordionToggle && accordionSection) {
        accordionToggle.addEventListener('click', () => {
            accordionSection.classList.toggle('active');
        });
    }
});