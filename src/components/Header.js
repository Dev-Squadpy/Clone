export function Header() {
  const header = document.createElement('header')
  header.className = 'header'
  
  header.innerHTML = `
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=100&h=40&fit=crop" alt="Zenless Zone Zero" class="logo-img">
        </div>
        <ul class="nav-menu">
          <li><a href="#inicio" class="nav-link active">Inicio</a></li>
          <li><a href="#personajes" class="nav-link">Personajes</a></li>
          <li><a href="#noticias" class="nav-link">Noticias</a></li>
          <li><a href="#bangboo" class="nav-link">Bangboo</a></li>
          <li><a href="#lighter" class="nav-link">Lighter</a></li>
        </ul>
        <div class="nav-actions">
          <button class="btn-download">Descargar</button>
          <button class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `
  
  // Add mobile menu toggle functionality
  const toggle = header.querySelector('.nav-toggle')
  const menu = header.querySelector('.nav-menu')
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    toggle.classList.toggle('active')
  })
  
  return header
}