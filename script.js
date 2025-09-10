// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple alert on form submit
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting me! I’ll respond soon.");
});
