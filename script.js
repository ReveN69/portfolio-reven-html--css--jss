function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark mode
const toggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Share script copy link

async function copyArtLink(button) {
  const url = button.dataset.url;
  
  try {
    await navigator.clipboard.writeText(url);
    
    // Feedback visuel
    button.innerHTML = '<i class="fas fa-check"></i> Copié !';
    button.classList.add('copied');
    
    // Réinitialiser après 2 sec
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-share-alt"></i> Share';
      button.classList.remove('copied');
    }, 2000);
    
  } catch (err) {
    button.textContent = 'Erreur :(';
    console.error("Échec de la copie :", err);
  }
}