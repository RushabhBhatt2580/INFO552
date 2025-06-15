function showMessage() {
    alert("Thanks for reaching out! I'll get back to you soon.");
  }

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop form from refreshing the page
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset(); // Optional: clear the form fields
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  });  