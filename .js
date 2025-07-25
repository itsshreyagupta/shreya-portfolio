function toggleAbout() {
    const about = document.getElementById('fullAbout');
    const button = document.getElementById('toggleButton');
    const isHidden = about.classList.contains('hidden');

    if (isHidden) {
      about.classList.remove('hidden');
      button.innerText = 'Read Less ↑';
      button.setAttribute('aria-expanded', 'true');
      about.focus();
    } else {
      about.classList.add('hidden');
      button.innerText = 'Read More ↓';
      button.setAttribute('aria-expanded', 'false');
    }
  }
