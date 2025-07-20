export function Hero() {
  const hero = document.createElement('section')
  hero.className = 'hero'
  hero.id = 'inicio'
  
  hero.innerHTML = `
    <div class="hero-background">
      <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="Zenless Zone Zero Background" class="hero-bg-img">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-container">
        <h1 class="hero-title">
          <span class="title-main">ZENLESS</span>
          <span class="title-sub">ZONE ZERO</span>
        </h1>
        <p class="hero-description">
          Sumérgete en un mundo urbano post-apocalíptico donde la civilización se refugia en Nueva Eridu, 
          la última metrópolis que permanece en pie tras el desastre conocido como los "Huecos".
        </p>
        <div class="hero-actions">
          <button class="btn-primary">Jugar Ahora</button>
          <button class="btn-secondary">Ver Tráiler</button>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">10M+</span>
            <span class="stat-label">Jugadores</span>
          </div>
          <div class="stat">
            <span class="stat-number">4.8</span>
            <span class="stat-label">Calificación</span>
          </div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Personajes</span>
          </div>
        </div>
      </div>
    </div>
  `
  
  return hero
}