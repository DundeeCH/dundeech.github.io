// Dynamic current year updater for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Interactive skill tag highlighting on click
const tags = document.querySelectorAll('.skill-tag');
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('highlight-skill');
    });
});

// Main DOM Content Loaded initialization
document.addEventListener('DOMContentLoaded', () => {
    // Smooth sequential fade-in animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = `all 0.6s ease ${index * 0.12}s`;
    });

    // Accordion expand/collapse logic
    const accordionToggle = document.getElementById('accordionToggle');
    const accordionSection = document.getElementById('additional');

    if (accordionToggle && accordionSection) {
        accordionToggle.addEventListener('click', () => {
            accordionSection.classList.toggle('active');
        });
    }

    // Email Copy to Clipboard Logic
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailTooltip = document.getElementById('emailTooltip');

    if (copyEmailBtn && emailTooltip) {
        copyEmailBtn.addEventListener('click', () => {
            const emailAddress = copyEmailBtn.getAttribute('data-email');
            
            // Використання сучасного Clipboard API
            navigator.clipboard.writeText(emailAddress).then(() => {
                // Зміна тексту підказки на успішне копіювання
                emailTooltip.textContent = 'Copied!';
                
                // Повернення тексту назад через 1.5 секунди
                setTimeout(() => {
                    emailTooltip.textContent = 'Click to copy';
                }, 1500);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });
    }
});
