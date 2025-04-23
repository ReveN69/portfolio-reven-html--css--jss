// HAMBURGER MENU BASIC TOGGLE MENU FROM TUTORIAL
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// DARK MODE AND LIGHT MODE
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

// SHARE SCRIPT FOR DRAWINGS

async function copyArtLink(button) {
  const url = button.dataset.url;
  
  try {
    await navigator.clipboard.writeText(url);
    
// Visual feedback for copied link
    button.innerHTML = '<i class="fas fa-check"></i> Copied !';
    button.classList.add('copied');
    
// Reinitializing after 2 seconds
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-share-alt"></i> Share';
      button.classList.remove('copied');
    }, 2000);
    
  } catch (err) {
    button.textContent = 'Error :(';
    console.error("Failed to copy :", err);
  }
}