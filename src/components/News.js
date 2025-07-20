export function News() {
  const section = document.createElement('section')
  section.className = 'news'
  section.id = 'noticias'
  
  const newsItems = [
    {
      title: 'Actualización 1.4: "Lighter" ya disponible',
      date: '15 Dic 2024',
      category: 'Actualización',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Conoce al nuevo agente Lighter y explora nuevas áreas en Nueva Eridu.'
    },
    {
      title: 'Evento especial: Festival de Invierno',
      date: '10 Dic 2024',
      category: 'Evento',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Participa en actividades especiales y obtén recompensas exclusivas.'
    },
    {
      title: 'Guía de combate: Dominando los Huecos',
      date: '5 Dic 2024',
      category: 'Guía',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Aprende las mejores estrategias para sobrevivir en los Huecos más peligrosos.'
    }
  ]
  
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Noticias</h2>
        <p class="section-subtitle">Mantente al día con las últimas novedades</p>
      </div>
      <div class="news-grid">
        ${newsItems.map((item, index) => `
          <article class="news-card ${index === 0 ? 'featured' : ''}">
            <div class="news-image">
              <img src="${item.image}" alt="${item.title}">
              <div class="news-category">${item.category}</div>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <time class="news-date">${item.date}</time>
              </div>
              <h3 class="news-title">${item.title}</h3>
              <p class="news-excerpt">${item.excerpt}</p>
              <a href="#" class="news-link">Leer más</a>
            </div>
          </article>
        `).join('')}
      </div>
      <div class="news-actions">
        <button class="btn-outline">Ver Todas las Noticias</button>
      </div>
    </div>
  `
  
  return section
}