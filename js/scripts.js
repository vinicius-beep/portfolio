/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.querySelectorAll('.projeto-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

const el = document.getElementById('typewriter-nome');

// Detecta automaticamente se está no index (pt), ingles.html ou espanhol.html
const pathname = window.location.pathname.toLowerCase();
const isEnglish = pathname.includes("ingles.html");
const isSpanish = pathname.includes("espanhol.html");

// Textos para cada idioma
let texts = ["Vinícius Da Silva", "Estudante de TI", "Desenvolvedor"];

if (isEnglish) {
    texts = ["Vinícius Da Silva", "IT Student", "Developer"];
} else if (isSpanish) {
    // Textos em espanhol
    texts = ["Vinícius Da Silva", "Estudiante de TI", "Desarrollador"];
}


let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[index];
  const visibleText = currentText.substring(0, charIndex);
  el.textContent = visibleText;

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 200);
    }
  }
}

type();
