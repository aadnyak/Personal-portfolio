// script.js - interaction: smooth scroll, active nav highlight, contact validation, modal

document.addEventListener('DOMContentLoaded', () => {
  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', ()=> navLinks.classList.toggle('open'));

  // Active nav link on scroll
  const sections = document.querySelectorAll('main .section');
  const navItems = document.querySelectorAll('.nav-link');
  function onScroll(){
    let index = sections.length;
    while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
    navItems.forEach(a=>a.classList.remove('active'));
    const id = sections[index]?.id;
    if(id){
      const activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
      if(activeLink) activeLink.classList.add('active');
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Project modal view
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.view-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
      modalImg.src = btn.dataset.img;
      modalTitle.textContent = btn.dataset.title;
      modal.setAttribute('aria-hidden','false');
    });
  });
  modalClose?.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e)=> {
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  // Simple contact form validation
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formMsg = document.getElementById('formMsg');

  function validateEmail(email){
    // simple regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formMsg.textContent = '';

    if(nameInput.value.trim().length < 2){ nameError.textContent = 'Enter your name'; valid = false; }
    if(!validateEmail(emailInput.value.trim())){ emailError.textContent = 'Enter a valid email'; valid = false; }
    if(messageInput.value.trim().length < 10){ messageError.textContent = 'Message should be at least 10 characters'; valid = false; }

    if(!valid) return;

    // Simulate sending (since no backend). In a real app you'd send to server or email API.
    formMsg.style.color = 'green';
    formMsg.textContent = 'Message sent (simulation). Thank you!';
    contactForm.reset();
  });

});
