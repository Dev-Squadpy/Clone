export function Characters() {
  const section = document.createElement('section')
  section.className = 'characters'
  section.id = 'personajes'
  
  const characters = [
    {
      name: 'Belle',
      faction: 'Cunning Hares',
      element: 'Ether',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      name: 'Wise',
      faction: 'Cunning Hares',
      element: 'Ether',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      name: 'Anby',
      faction: 'Cunning Hares',
      element: 'Electric',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      name: 'Nicole',
      faction: 'Cunning Hares',
      element: 'Ether',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      name: 'Billy',
      faction: 'Cunning Hares',
      element: 'Physical',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      name: 'Nekomiya',
      faction: 'Cunning Hares',
      element: 'Physical',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    }
  ]
  
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Personajes</h2>
        <p class="section-subtitle">Conoce a los agentes que lucharán a tu lado</p>
      </div>
      <div class="characters-grid">
        ${characters.map(char => `
          <div class="character-card">
            <div class="character-image">
              <img src="${char.image}" alt="${char.name}">
              <div class="character-overlay">
                <div class="character-element ${char.element.toLowerCase()}">${char.element}</div>
              </div>
            </div>
            <div class="character-info">
              <h3 class="character-name">${char.name}</h3>
              <p class="character-faction">${char.faction}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="characters-actions">
        <button class="btn-outline">Ver Todos los Personajes</button>
      </div>
    </div>
  `
  
  return section
}