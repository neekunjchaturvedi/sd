const phrases = [
  " an App Developer",
  " an App Designer",
  " a Flutter Developer",
];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 75; // milliseconds per character
const erasingSpeed = 75; // milliseconds per character
const delayBetweenPhrases = 1500; // milliseconds before switching phrases
const typingTextElement = document.getElementById("typing-text");

function typePhrase() {
  if (charIndex < phrases[phraseIndex].length) {
    // Typing effect
    typingTextElement.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    // Erasing effect after a delay
    setTimeout(erasePhrase, delayBetweenPhrases);
  }
}

function erasePhrase() {
  if (charIndex > 0) {
    typingTextElement.innerHTML = phrases[phraseIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erasePhrase, erasingSpeed);
  } else {
    // Move to the next phrase after erasing
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function () {
  typePhrase();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Send Email using EmailJS (Add your EmailJS credentials here)
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if all fields are filled
  if (name && email && message) {
    email
      .send({
        SecureToken: "YOUR_SECURE_TOKEN", // Replace with your actual token
        To: "you@example.com", // Replace with the receiver's email
        From: email,
        Subject: `New message from ${name}`,
        Body: `
        <b>Sender:</b> ${name} (${email})<br><br>
        <b>Message:</b><br>${message}
      `,
      })
      .then((response) => {
        if (response === "OK") {
          alert("Message sent successfully");
        } else {
          alert("Failed to send message: " + response);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  } else {
    alert("Please fill in all fields");
  }
}

function aboutbtn() {
  const abtsection = document.getElementById("about");
  if (abtsection) {
    abtsection.scrollIntoView({ behavior: "smooth" });
  }
}
function openresume() {
  window.open(
    "https://drive.google.com/file/d/1fuHs2CpWVbFlDnPw3oEIVOGb53OctTDZ/view?usp=share_link",
    "_blank"
  );
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Toggle sidebar visibility
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");

  // Toggle overlay visibility
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("active");
}

function collarlink() {
  window.open("https://github.com/chintu4/collarlink", "blank");
}
function bmi() {
  window.open("https://github.com/Dany4950/bmi-calculator", "blank");
}
