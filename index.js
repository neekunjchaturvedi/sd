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

window.addEventListener("scroll", () => {
  const profileImage = document.getElementById("profileImage");
  const sidebarImage = document.getElementById("sidebarImage");

  if (window.scrollY > 100) {
    setTimeout(() => {
      profileImage.classList.add("profile-to-sidebar");
      profileImage.style.opacity = "0";
    }, 800);

    setTimeout(() => {
      sidebarImage.style.backgroundImage = profileImage.style.backgroundImage;
      sidebarImage.style.width = "120px";
      sidebarImage.style.height = "120px";
      sidebarImage.classList.add("rounded-full", "bg-cover", "bg-center");
      sidebarImage.style.opacity = "1";
    }, 800);
  } else {
    setTimeout(() => {
      profileImage.classList.remove("profile-to-sidebar");
      profileImage.style.opacity = "1";
      sidebarImage.style.opacity = "0";
    }, 800);

    setTimeout(() => {
      sidebarImage.style.width = "0";
      sidebarImage.style.height = "0";
    }, 800);
  }
});
