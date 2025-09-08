// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links should have data-section attributes matching section IDs
    const navLinks = document.querySelectorAll('nav a[data-section]');
    const sections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        sections.forEach(sec => {
            sec.style.display = sec.id === sectionId ? 'block' : 'none';
        });
    }

    // Initial load: show section from URL hash or default to home
    const initialSection = window.location.hash.replace('#', '') || 'home';
    showSection(initialSection);

    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
            history.pushState({section: sectionId}, '', '#' + sectionId);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function(event) {
        const sectionId = (event.state && event.state.section) || window.location.hash.replace('#', '') || 'home';
        showSection(sectionId);
    });
});
