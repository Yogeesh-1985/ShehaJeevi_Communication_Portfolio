// Function to toggle the visibility of the mobile sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active'); // Toggle the 'active' class to show or hide the sidebar
}

// Dynamically load the mobile menu only on smaller screens
if (window.innerWidth < 768) {
    // Fetch the phone-phone-menu.html content and inject it into the page
    fetch('phone-phone-menu.html')
        .then(response => response.text())
        .then(data => {
            const mobileMenuPlaceholder = document.createElement('div');
            mobileMenuPlaceholder.id = 'mobile-menu-placeholder';
            mobileMenuPlaceholder.innerHTML = data;
            document.body.prepend(mobileMenuPlaceholder); // Add to the beginning of the body
        })
        .catch(error => console.error('Error loading mobile menu:', error));
}
