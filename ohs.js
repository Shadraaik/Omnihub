const messages = [
  {
    header: "Proven  Records",
    description: "We have helped hundreds of professionals enhance their careers.",
    bgImage: "url('images/pic1.jpg')"
  },
   {
    header: "Measurable Impact",
    description: "Pre-and-post training assessments to demonstrate tangible perfomance gain",
    bgImage: "url('images/pic2.jpg')"
  },
  {
    header: "Expert Facilitators",
    description: "Our instructors bring real-world expertise to every session.",
    bgImage: "url('images/pic3.jpg')"
  },
  {
    header: "Flexible Learning",
    description: "Our programs fit your schedule, in-person or online.",
    bgImage: "url('images/pic4.jpg')"
  }
];

let currentIndex = 0;
const messageElement = document.getElementById('message');
const bgLayer1 = document.getElementById('bgLayer1');
const bgLayer2 = document.getElementById('bgLayer2');
let isBgLayer1Active = true;

function showMessage(index) {
  messageElement.style.opacity = 0;

  // Fade out both background layers
  bgLayer1.style.opacity = 0;
  bgLayer2.style.opacity = 0;

  setTimeout(() => {
    // Change message content
    messageElement.innerHTML = `
      <h2>${messages[index].header}</h2>
      <p>${messages[index].description}</p>
    `;
    messageElement.style.opacity = 1;

    // Change background
    if (isBgLayer1Active) {
      bgLayer2.style.backgroundImage = messages[index].bgImage;
      bgLayer2.classList.add('active');
      bgLayer1.classList.remove('active');
      bgLayer2.style.opacity = 1; // Fade in bgLayer2
    } else {
      bgLayer1.style.backgroundImage = messages[index].bgImage;
      bgLayer1.classList.add('active');
      bgLayer2.classList.remove('active');
      bgLayer1.style.opacity = 1; // Fade in bgLayer1
    }
    isBgLayer1Active = !isBgLayer1Active;

  }, 500); // this matches your CSS transition
}

function nextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  showMessage(currentIndex);
}

function prevMessage() {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  showMessage(currentIndex);
}

// Auto-slide
setInterval(nextMessage, 3000);

// Initial
showMessage(currentIndex);

// 
// 
 const sections = document.querySelectorAll('.section');

    function showSection(id) {
      sections.forEach(section => {
        if(section.id === id) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    function toggleMenu() {
      const hamburger = document.querySelector('.hamburger');
      const menu = document.getElementById('menu');
      const quoteBtn = document.getElementById('quoteBtn');
      hamburger.classList.toggle('spin');
      document.querySelector('nav').classList.toggle('show');
          
       if (menu.classList.contains('show')) {
        const menuHeight = menu.offsetHeight;
        quoteBtn.style.transform = `translateY(${menuHeight}px)`;
      } else {
        quoteBtn.style.transform = `translateY(0px)`;
      }
    }
    function toggleDropdown() {
      const submenu = document.getElementById('submenu');
      const arrow = document.querySelector('.arrow');
      
      submenu.classList.toggle('show');
      arrow.classList.toggle('rotate');
    
    setTimeout(() => {
    const menu = document.getElementById('menu');
    const quoteBtn = document.getElementById('quoteBtn');
    const menuHeight = menu.offsetHeight;
    quoteBtn.style.transform = `translateY(${menuHeight}px)`;
  }, ); // Delay to wait for submenu to fully show
}
    // Typing Animation
    const typingElement = document.getElementById('typing');
    const texts = ["Life-Skills Training.", "Professional Development.", "Customized Workshops.", "Empower Your Future."];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
      if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(eraseText, 1500);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      if(texts.length) typeText();
    });
// footer
// Smooth scroll to top
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // subtooltip
  // Toggle main menu
const menuBtn = document.querySelector('.ourc');
const menuList = document.querySelector('.listing li ul');

menuBtn.addEventListener('click', () => {
  menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

// Handle submenu toggle
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (e) => {
  e.stopPropagation(); // stop bubbling to menuBtn
  dropdown.classList.toggle('active');
});
