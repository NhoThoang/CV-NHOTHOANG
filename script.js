document.addEventListener('DOMContentLoaded', function onReady() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});

