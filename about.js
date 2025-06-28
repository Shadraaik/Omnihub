function showPanel(id) {
  // Hide all panels
  const panels = document.querySelectorAll('.about-panel');
  panels.forEach(panel => panel.style.display = 'none');

  // Hide the About Us home description and buttons
  document.getElementById('about-home').style.display = 'none';
  document.getElementById('about-buttons').style.display = 'none';

  // Show the selected panel
  const target = document.getElementById(id);
  target.style.display = 'block';
}

function hidePanels() {
  // Hide all panels
  const panels = document.querySelectorAll('.about-panel');
  panels.forEach(panel => panel.style.display = 'none');

  // Show the About Us home description and buttons again
  document.getElementById('about-home').style.display = 'block';
  document.getElementById('about-buttons').style.display = 'flex';
}
