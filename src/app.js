import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Characters } from './components/Characters.js'
import { News } from './components/News.js'
import { Bangboo } from './components/Bangboo.js'
import { Footer } from './components/Footer.js'

export function createApp() {
  const app = document.createElement('div')
  app.className = 'app'
  
  app.appendChild(Header())
  app.appendChild(Hero())
  app.appendChild(Characters())
  app.appendChild(News())
  app.appendChild(Bangboo())
  app.appendChild(Footer())
  
  return app
}