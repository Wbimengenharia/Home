/* ==============================
   WBIM ENGENHARIA - SCRIPT FINAL
================================ */

/* SCROLL SUAVE */
function smoothScroll(target) {
  const el = document.querySelector(target);
  if (!el) return;

  const offset = document.querySelector('.header')?.offsetHeight || 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 10;

  window.scrollTo({
    top,
    behavior: 'smooth'
  });
}

/* BOTÕES E MENU */
document.querySelectorAll('[data-action]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();

    const action = el.dataset.action;

    if (action === 'scroll') {
      smoothScroll(el.dataset.target);
    }

    if (action === 'whatsapp') {
      const phone = '5599999999999'; // TROQUE PELO SEU
      const message = encodeURIComponent(
        'Olá! Gostaria de solicitar um orçamento com a WBIM Engenharia.'
      );
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }
  });
});

/* MENU ATIVO AO ROLAR */
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.target === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* SOMBRA NO HEADER */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow =
    window.scrollY > 40
      ? '0 10px 30px rgba(0,0,0,0.08)'
      : 'none';
});

/* ANIMAÇÃO AO APARECER */
const revealItems = document.querySelectorAll(
  '.about-box, .service, .cta-box'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});
