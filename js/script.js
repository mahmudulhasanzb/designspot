document.addEventListener('DOMContentLoaded',()=>{
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // mobile nav toggle (uses class-based open state)
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  function closeNav(){
    navToggle.setAttribute('aria-expanded','false');
    mainNav.classList.remove('is-open');
  }
  function openNav(){
    navToggle.setAttribute('aria-expanded','true');
    mainNav.classList.add('is-open');
  }
  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if(expanded) closeNav(); else openNav();
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      // close mobile nav when a nav link is clicked
      if(mainNav.classList.contains('is-open')) closeNav();
      if(href.length>1){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // lightbox for portfolio
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lightbox-image');
  const lbTitle = document.getElementById('lightbox-title');
  const lbClose = document.querySelector('.lightbox-close');
  let lastFocused = null;

  document.querySelectorAll('.card .thumb').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const img = btn.querySelector('img');
      lbImage.src = img ? img.src : '';
      lbImage.alt = img ? img.alt : '';
      lbTitle.textContent = btn.getAttribute('data-title') || '';
      lightbox.classList.add('lightbox--open');
      lightbox.setAttribute('aria-hidden','false');
      lastFocused = document.activeElement;
      lbClose.focus();
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox(){
    lightbox.classList.remove('lightbox--open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    lbImage.src = '';
    if(lastFocused) lastFocused.focus();
  }

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

  // simple form validation and fake submit
  const form = document.getElementById('contactForm');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(()=>{
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Thanks! Your message has been received. (Demo)');
      form.reset();
    },1200);
  });
});
