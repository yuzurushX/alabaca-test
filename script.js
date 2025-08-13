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

  // FAQ toggle
  document.querySelectorAll('.question-header').forEach(header => {
    header.addEventListener('click', () => {
      const question = header.closest('.faq-question');
      const wasActive = question.classList.contains('active');
      
      // Close all questions first
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
      });
      
      // Then open the clicked one if it wasn't active
      if (!wasActive) {
        question.classList.add('active');
      }
    });
  });
})();