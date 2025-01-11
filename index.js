document.addEventListener('DOMContentLoaded', () => {
  const heroSearchInput = document.querySelector('.hero input[type="text"]');

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
  heroSearchInput.addEventListener('input', () => {
    const searchTerm = heroSearchInput.value.toLowerCase();
    console.log(`Searching for: ${searchTerm}`);
    // Implement search logic here
  });

  const promptLoginButton = document.querySelectorAll('.resource-item .btn');
  promptLoginButton.forEach(button => {
    button.addEventListener('click', () => {
      alert('Please log in to download resources.');
    });
  });

  console.log('Home page script initialized.');
});
