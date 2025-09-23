/* Your JS here. */

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const carousel = document.querySelector(".carousel__viewport");
const prevBtn = document.querySelector(".carousel__prev");
const nextBtn = document.querySelector(".carousel__next");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel__slide');
  const dots = document.querySelectorAll('.carousel__dot');
  const viewport = document.querySelector('.carousel__viewport');
  const prevBtn = document.querySelector('.carousel__prev');
  const nextBtn = document.querySelector('.carousel__next');
  let current = 0;

  function setActive(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
    current = index;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      viewport.scrollTo({
        left: idx * viewport.offsetWidth,
        behavior: 'smooth'
      });
    });
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      let idx = Math.max(0, current - 1);
      viewport.scrollTo({
        left: idx * viewport.offsetWidth,
        behavior: 'smooth'
      });
    });
    nextBtn.addEventListener('click', () => {
      let idx = Math.min(slides.length - 1, current + 1);
      viewport.scrollTo({
        left: idx * viewport.offsetWidth,
        behavior: 'smooth'
      });
    });
  }

  viewport.addEventListener('scroll', () => {
    const slideWidth = viewport.offsetWidth;
    const scrollLeft = viewport.scrollLeft;
    const idx = Math.round(scrollLeft / slideWidth);
    setActive(idx);
  });
  setActive(0);
});

document.querySelectorAll('.fav-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('.modal').style.display = 'none';
  });
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
