  // Get all read more buttons
  const buttons = document.querySelectorAll('.btn-readmore');
  // All content pages
  const contentPages = document.querySelectorAll('.content-page');
  // Go back buttons
  const backButtons = document.querySelectorAll('.btn-back');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const channel = btn.closest('.channel');
      const courseId = channel.getAttribute('data-course');
      // Hide all content pages first
      contentPages.forEach(page => page.classList.remove('active'));
      // Show the correct content page
      const page = document.getElementById(courseId);
      if(page){
        page.classList.add('active');
        page.focus();
        window.scrollTo(0, 0);
      }
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Hide all content pages
      contentPages.forEach(page => page.classList.remove('active'));
    });
  });

  // Accessibility: trap focus inside content page when open (optional, but recommended)
  // For brevity, not implemented here, but can be added if needed.