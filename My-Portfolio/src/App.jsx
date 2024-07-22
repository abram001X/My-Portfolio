import './App.css'
import { Projects } from './Components/Projects'
function App() {

  return (
    <>
  <header className='cont_header-padre'>
    <a href='#about'>SOBRE MI</a>
    <a href='#projects'>PROYECTOS</a>
    <a href='#tecnologias'>TECNOLOGÍAS</a>
  </header>
    <article className='cont_app-padre'>
      <section className='card'>
      <h1>Abraham Alfonzo, Full Stack Developers</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png" alt="Abraham Alfonzo" className='yo_img'/>
      </section>
      <section className='cont_proyectos-padre'>
          <h2>PROYECTOS</h2>
          <Projects/>
      </section>
    </article>
    </>
  )
}

export default App
