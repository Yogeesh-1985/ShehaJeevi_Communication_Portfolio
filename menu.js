document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuPlaceholder = document.getElementById('mobile-menu-placeholder');

  // Dynamically inject the mobile menu content
  mobileMenuPlaceholder.innerHTML = `
    <button id="menu-toggle">☰ Menu</button>
    <nav id="mobile-sidebar">
      <ul>
        <li><a href="index.html"><img src="logo.png" class="menu-icon" alt="Logo">Home</a></li>
        <li><a href="about.html"><img src="logo.png" class="menu-icon" alt="Logo">About</a></li>
        <li><a href="package.html"><img src="logo.png" class="menu-icon" alt="Logo">Packages</a></li>
        <li><a href="contact.html"><img src="logo.png" class="menu-icon" alt="Logo">Contact</a></li>
      </ul>
    </nav>
  `;

  // Toggle functionality
  const menuToggle = document.getElementById('menu-toggle');
  const mobileSidebar = document.getElementById('mobile-sidebar');

  menuToggle.addEventListener('click', () => {
    if (mobileSidebar.style.display === 'block') {
      mobileSidebar.style.display = 'none';
    } else {
      mobileSidebar.style.display = 'block';
    }
  });
});
