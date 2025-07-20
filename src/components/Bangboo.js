export function Bangboo() {
  const section = document.createElement('section')
  section.className = 'bangboo'
  section.id = 'bangboo'
  
  section.innerHTML = `
    <div class="bangboo-background">
      <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="Bangboo Background" class="bangboo-bg">
      <div class="bangboo-overlay"></div>
    </div>
    <div class="container">
      <div class="bangboo-content">
        <div class="bangboo-info">
          <h2 class="bangboo-title">Bangboo</h2>
          <p class="bangboo-subtitle">Tus compañeros de confianza</p>
          <p class="bangboo-description">
            Los Bangboo son adorables compañeros robóticos que te ayudarán en tu aventura. 
            Cada uno tiene habilidades únicas que pueden marcar la diferencia en el combate 
            y la exploración. Colecciona diferentes tipos y descubre sus personalidades únicas.
          </p>
          <div class="bangboo-features">
            <div class="feature">
              <div class="feature-icon">🤖</div>
              <div class="feature-text">
                <h4>Compañeros IA</h4>
                <p>Inteligencia artificial avanzada</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <div class="feature-text">
                <h4>Habilidades Únicas</h4>
                <p>Cada Bangboo tiene talentos especiales</p>
              </div>
            </div>
            <div class="feature">
              <div class="feature-icon">💎</div>
              <div class="feature-text">
                <h4>Coleccionables</h4>
                <p>Encuentra y colecciona diferentes tipos</p>
              </div>
            </div>
          </div>
          <button class="btn-primary">Conocer Bangboo</button>
        </div>
        <div class="bangboo-showcase">
          <div class="bangboo-model">
            <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" alt="Bangboo Model" class="bangboo-img">
          </div>
        </div>
      </div>
    </div>
  `
  
  return section
}