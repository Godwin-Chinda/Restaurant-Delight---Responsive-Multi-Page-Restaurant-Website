const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", () => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // ✅ Log the data to the console
  console.log("Form Submission:", {
    name: name,
    email: email,
    message: message,
  });

  alert("Thank you, ${name}! Your message has been sent.");
  contactForm.reset();
});
