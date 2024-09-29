// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Reset link colors
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Set the active link to blue
    const activeLink = document.querySelector(`nav a[onclick*="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// By default, show the home section
showSection('home');
