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
// Add this inside document.addEventListener('DOMContentLoaded', () => { ... })
const copyEmailBtn = document.getElementById('copyEmailBtn');
const emailTooltip = document.getElementById('emailTooltip');

if (copyEmailBtn && emailTooltip) {
    copyEmailBtn.addEventListener('click', () => {
        const emailAddress = copyEmailBtn.getAttribute('data-email');
        
        navigator.clipboard.writeText(emailAddress).then(() => {
            // Change tooltip text
            emailTooltip.textContent = 'Copied!';
            
            // Reset text after 1.5 seconds
            setTimeout(() => {
                emailTooltip.textContent = 'Click to copy';
            }, 1500);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
}

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