/* ==============================
   WBIM ENGENHARIA - SCRIPT
   Elegante, leve e funcional
================================ */

/* SCROLL SUAVE PARA ÂNCORAS */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* HEADER COM SOMBRA AO SCROLL */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

/* ANIMAÇÃO DE ENTRADA AO SCROLL */
const animatedItems = document.querySelectorAll(
  '.about-box, .services-box .service, .cta-box'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.15
});

animatedItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(40px)';
  item.style.transition = 'all 0.8s ease';
  observer.observe(item);
});

/* BOTÃO CTA - WHATSAPP */
const whatsappButtons = document.querySelectorAll('.btn.gold');

whatsappButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const phone = '5599999999999'; // <-- coloque seu número
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar um orçamento com a WBIM Engenharia.'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});

/* FEEDBACK VISUAL NO CLIQUE */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.96)';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

/* PREVENIR IMAGENS QUEBRADAS */
document.querySelectorAll('img').forEach(img => {
  img.onerror = () => {
    img.style.display = 'none';
  };
});

const whatsappButtons = document.querySelectorAll('.btn.gold');

whatsappButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // abre WhatsApp
  });
});


