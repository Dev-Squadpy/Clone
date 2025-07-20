export function Footer() {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  
  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=120&h=40&fit=crop" alt="Zenless Zone Zero">
          </div>
          <p class="footer-description">
            Sumérgete en Nueva Eridu y vive una aventura urbana post-apocalíptica única.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">YouTube</a>
            <a href="#" class="social-link">Discord</a>
            <a href="#" class="social-link">Reddit</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Juego</h4>
          <ul class="footer-links">
            <li><a href="#">Descargar</a></li>
            <li><a href="#">Requisitos del Sistema</a></li>
            <li><a href="#">Guías</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Comunidad</h4>
          <ul class="footer-links">
            <li><a href="#">Foro Oficial</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Reddit</a></li>
            <li><a href="#">Fan Art</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Soporte</h4>
          <ul class="footer-links">
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Reportar Bug</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; 2024 miHoYo Co., Ltd. Todos los derechos reservados.</p>
        </div>
        <div class="footer-legal">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  `
  
  return footer
}