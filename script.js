function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });
}
// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero button action
const heroButton = document.querySelector('.hero button');

heroButton.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Simple welcome message (optional)
window.addEventListener('load', () => {
    console.log("Business Portfolio Website Loaded Successfully");
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "123456789",
    "template_229p49i",
    this
  ).then(() => {
    alert("Message sent successfully! We will contact you soon.");
    this.reset();
  }, (error) => {
    alert("Failed to send message. Please try again.");
    console.error(error);
  });
});

