(function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      const willOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
    });
  }

  // Optional: Close other details when one opens
  const accordion = document.querySelector('[data-accordion]');
  if (accordion){
    accordion.addEventListener('toggle', (e) => {
      const target = e.target;
      if(target.tagName === 'DETAILS' && target.open){
        accordion.querySelectorAll('details').forEach(d => {
          if(d !== target) d.removeAttribute('open');
        });
      }
    }, true);
  }
})();


